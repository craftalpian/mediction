import List "mo:base/List";
import Option "mo:base/Option";
import Trie "mo:base/Trie";
import Nat32 "mo:base/Nat32";
import Nat "mo:base/Nat";
import Text "mo:base/Text";
import Time "mo:base/Time";
import Principal "mo:base/Principal";
import Int "mo:base/Int";
import Array "mo:base/Array";
import Buffer "mo:base/Buffer";
import Types "./types";
import Database "./database";

actor Mediction {

  /**
   * High-Level API
   */

   type HospitalId = Types.HospitalId;
   type HospitalPayload = Types.HospitalPayload;
   type Hospital = Types.Hospital;

   type PatientId = Types.PatientId;
   type PatientPayload = Types.PatientPayload;
   type Patient = Types.Patient;

   type HospitalHasPatientId = Types.HospitalHasPatientId;
   type HospitalHasPatient = Types.HospitalHasPatient;

   type DoctorId = Types.DoctorId;
   type DoctorPayload = Types.DoctorPayload;
   type Doctor = Types.Doctor;

   type DoctorHasPatientId = Types.DoctorHasPatientId;
   type DoctorHasPatient = Types.DoctorHasPatient;

   type HistoryId = Types.HistoryId;
   type HistoryPayload = Types.HistoryPayload;
   type History = Types.History;
   
   var db: Database.Repository = Database.Repository();

   public shared(msg) func createHospital(hospitalId: HospitalId, hospitalPayload: HospitalPayload): async Hospital {
        let hospital: Hospital = {
            id = hospitalId;
            owner = msg.caller;
            email  = hospitalPayload.email;
            password  = hospitalPayload.password;
            name  = hospitalPayload.name;
            category  = hospitalPayload.category;
            phone = hospitalPayload.phone;
            address = hospitalPayload.address;
            personInCharge = hospitalPayload.personInCharge;
            personInPosition = hospitalPayload.personInPosition;
            personInChargePhone = hospitalPayload.personInChargePhone;
            createdAt = Time.now();
            updatedAt = Time.now();
        };
        await db.createHospital(hospitalId, hospital);
    };

    public func getHospital(hospitalId: HospitalId): async ?Hospital {
        db.getHospital(hospitalId);
    };

    public shared(msg) func createPatient(patientId: PatientId, patientPayload: PatientPayload): async Patient {
    let patient: Patient = {
        id = patientId;
        owner = msg.caller;
        fullname = patientPayload.fullname;
        phoneNumber = patientPayload.phoneNumber;
        idNumber = patientPayload.idNumber;
        birthdate = patientPayload.birthdate;
        password = patientPayload.password;
        gender = patientPayload.gender;
        bloodType = patientPayload.bloodType;
        address = patientPayload.address;
        representativeName = patientPayload.representativeName;
        representativeStatus = patientPayload.representativeStatus;
        representativeAddress = patientPayload.representativeAddress;
        representativePhoneNumber = patientPayload.representativePhoneNumber;
        insurance = patientPayload.insurance;
        createdAt = Time.now();
        updatedAt = Time.now();
    };
        await db.createPatient(patientId, patient);
    };

    public func getPatient(patientId: PatientId): async ?Patient {
        db.getPatient(patientId);
    };

    public func createHospitalPatient(hospitalId: HospitalId, patientId: PatientId): async [PatientId] {
        let patient: ?Patient = await getPatient(patientId);
        let arr: [Patient] = await getHospitalPatient(hospitalId);
        let exist = Array.find<Patient>(arr, func (x) { x.id == patientId });
        let arrId: [PatientId] = Array.map<Patient,PatientId>(arr, func (x) { x.id });

        switch (patient, exist) {
            case (null, _) { return []; }; // Patient does not exist
            case (_, null) { db.createHospitalHasPatient(hospitalId, patientId); }; // Patient exists but not in this hospital
            case (_, _) {
                return arrId;
            };
        };
    };

    public func getHospitalPatient(hospitalId: HospitalId): async [Patient] {
        let data = db.getHospitalHasPatient(hospitalId);
        let patients = Buffer.Buffer<Patient>(0);
        for (patientId in data.vals()) {
            let patient: ?Patient = await getPatient(patientId);
            switch(patient) {
                case(null) {  };
                case(?patient) { patients.add(patient); };
            };
        };
        return Buffer.toArray(patients);
    };

    public shared(msg) func createDoctor(doctorId: DoctorId, doctorPayload: DoctorPayload): async Doctor {
    let doctor: Doctor = {
        id = doctorId;
        owner = msg.caller;
        fullname = doctorPayload.fullname;
        numberSIP = doctorPayload.numberSIP;
        email = doctorPayload.email;
        phone = doctorPayload.phone;
        sector= doctorPayload.sector;
        specialist= doctorPayload.specialist;
        createdAt = Time.now();
        updatedAt = Time.now();
    };
        await db.createDoctor(doctorId, doctor);
    };

    public func getDoctor(doctorId: DoctorId): async ?Doctor {
        db.getDoctor(doctorId);
    };

    public func createDoctorPatient(doctorId: DoctorId, patientId: PatientId): async [PatientId] {
    let patient: ?Patient = await getPatient(patientId);
    let arr: [Patient] = await getDoctorPatient(doctorId);
    let exist = Array.find<Patient>(arr, func (x) { x.id == patientId });
    let arrId: [PatientId] = Array.map<Patient,PatientId>(arr, func (x) { x.id });

        switch (patient, exist) {
            case (null, _) { return []; }; // Patient does not exist
            case (_, null) { db.createDoctorHasPatient(doctorId, patientId); }; // Patient exists but not in this doctor
            case (_, _) {
                return arrId;
            };
        };
    };

    public func getDoctorPatient(doctorId: DoctorId): async [Patient] {
        let data = db.getDoctorHasPatient(doctorId);
        let patients = Buffer.Buffer<Patient>(0);
        for (patientId in data.vals()) {
            let patient: ?Patient = await getPatient(patientId);
            switch(patient) {
                case(null) {  };
                case(?patient) { patients.add(patient); };
            };
        };
        return Buffer.toArray(patients);
    };

    public func removeDoctorPatient(doctorId: DoctorId, patientId: PatientId): async [PatientId] {
    let arr: [Patient] = await getDoctorPatient(doctorId);
    let exist = Array.find<Patient>(arr, func (x) { x.id == patientId });
    let arrId: [PatientId] = Array.map<Patient,PatientId>(arr, func (x) { x.id });

        switch (arr, exist) {
            case (arr, ?exist) { db.removeDoctorHasPatient(doctorId,patientId); }; // Patient does not exist
            case (arr, null) { return arrId; }; // Patient exists but not in this doctor
        };
    };

    var historyId : HistoryId = 0;

    public shared(msg) func createHistory(patientId: PatientId, historyPayload: HistoryPayload): async [History] {
        let patient: ?Patient = await getPatient(patientId);
        let doctor: ?Doctor = await getDoctor(historyPayload.doctorId);
        switch (patient, doctor) {
            case (null, _) { return []; }; // Patient does not exist
            case (_, null) { return []; }; // Patient exists but not in this doctor
            case (_, _) {
                historyId := historyId + 1;
                let history: History = {
                    id  = historyId;
                    owner = msg.caller; //should hospital
                    doctorId  = historyPayload.doctorId;
                    patientId  = patientId;
                    symptoms = historyPayload.symptoms;
                    tension = historyPayload.tension;
                    weight = historyPayload.weight;
                    diagnoses = historyPayload.diagnoses;
                    description = historyPayload.description;
                    action = historyPayload.action;
                    followUp = historyPayload.followUp;
                    medicines = historyPayload.medicines;
                    createdAt = Time.now();
                    updatedAt = Time.now();
                };

                return await db.createHistory(patientId, history);
            };
        };
    };

    public func getHistory(patientId: PatientId): async [History] {
        db.getHistory(patientId);
    };


};