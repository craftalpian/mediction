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

   
   var db: Database.Repository = Database.Repository();

   public shared(msg) func createHospital(hospitalId: HospitalId, hospitalPayload: HospitalPayload): async HospitalId {
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

    public shared(msg) func createPatient(patientId: PatientId, patientPayload: PatientPayload): async PatientId {
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
    let arr: [PatientId] = await getHospitalPatient(hospitalId);
    let exist = Array.find<PatientId>(arr, func (x) { x == patientId });

        switch (patient, exist) {
            case (null, _) { return []; }; // Patient does not exist
            case (_, null) { db.createHospitalHasPatient(hospitalId, patientId); }; // Patient exists but not in this hospital
            case (_, _) {
                return arr;
            };
        };
    };

    public func getHospitalPatient(hospitalId: HospitalId): async [PatientId] {
        db.getHospitalHasPatient(hospitalId);
    };
};