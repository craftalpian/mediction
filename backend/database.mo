import Types "./types";
import HashMap "mo:base/HashMap";
import Hash "mo:base/Hash";
import Nat32 "mo:base/Nat32";
import Text "mo:base/Text";
import Time "mo:base/Time";
import Bool "mo:base/Bool";
import Array "mo:base/Array";
import Buffer "mo:base/Buffer";

module {
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

   type HistoryId = Types.HistoryId;
   type HistoryPayload = Types.HistoryPayload;
   type History = Types.History;

   type DoctorHasPatientId = Types.DoctorHasPatientId;
   type DoctorHasPatient = Types.DoctorHasPatient;

   public class Repository() {
    let hospitalMapping = HashMap.HashMap<HospitalId, Hospital>(1, isEqHospitalId, customHash); 
    let patientMapping = HashMap.HashMap<PatientId, Patient>(2, isEqPatientId, customHash);
    let patientToHospitalMapping = HashMap.HashMap<HospitalId, Buffer.Buffer<PatientId>>(3, isEqHospitalHasPatientId, customHash);
    let doctorMapping = HashMap.HashMap<DoctorId, Doctor>(4, isEqDoctorId, customHash);
    let patientToDoctorMapping = HashMap.HashMap<DoctorId, Buffer.Buffer<PatientId>>(5, isEqDoctorId, customHash);
    let historyToPatientMapping = HashMap.HashMap<PatientId, Buffer.Buffer<History>>(6, isEqPatientId, customHash);

    public func getDoctor(doctorId: DoctorId): ?Doctor {
      return doctorMapping.get(doctorId);
    };

    public func getHospital(hospitalId: HospitalId): ?Hospital {
      return hospitalMapping.get(hospitalId);
    };

    public func deleteHospital(hospitalId: HospitalId): Bool {
      hospitalMapping.delete(hospitalId);
      return true;
    };

    public func createPatient(patientId: PatientId, patient: Patient) : async Patient {
      patientMapping.put(patientId, patient);
      return patient;
    };

    public func getPatient(patientId: PatientId): ?Patient {
      patientMapping.get(patientId);
    };

    public func deletePatient(patientId: PatientId): Bool {
      patientMapping.delete(patientId);
      return true;
    };

    public func createHospitalHasPatient(hospitalId: HospitalId, patientId: PatientId): [PatientId] {
        let exist = patientToHospitalMapping.get(hospitalId);
        let hospitalHasPatientTemp = Buffer.Buffer<PatientId>(0);
      switch (exist) {
        case (null) {
            hospitalHasPatientTemp.add(patientId);
            patientToHospitalMapping.put(hospitalId, hospitalHasPatientTemp);
            return Buffer.toArray(hospitalHasPatientTemp);
        };
        case (?exist) {
            exist.add(patientId);
            patientToHospitalMapping.put(hospitalId, exist);
            return Buffer.toArray(exist);
        };
      };
    };

    public func getHospitalHasPatient(hospitalId: HospitalId): [PatientId] {
      let exist = patientToHospitalMapping.get(hospitalId);
      switch (exist) {
        case (null) {
            return [];
        };
        case (?exist) {
            return Buffer.toArray(exist);
        };
      };
    };

    public func createHospital(hospitalId: HospitalId, hospital: Hospital) : async Hospital {
      hospitalMapping.put(hospitalId, hospital);
      return hospital;
    };

    public func createDoctor(doctorId: DoctorId, doctor: Doctor) : async Doctor {
      doctorMapping.put(doctorId, doctor);
      return doctor;
    };

    public func createDoctorHasPatient(doctorId: DoctorId, patientId: PatientId): [PatientId] {
      let exist = patientToDoctorMapping.get(doctorId);
      let doctorHasPatientTemp = Buffer.Buffer<PatientId>(0);
      switch (exist) {
        case (null) {
            doctorHasPatientTemp.add(patientId);
            patientToDoctorMapping.put(doctorId, doctorHasPatientTemp);
            return Buffer.toArray(doctorHasPatientTemp);
        };
        case (?exist) {
            exist.add(patientId);
            patientToDoctorMapping.put(doctorId, exist);
            return Buffer.toArray(exist);
        };
      };
    };

    public func getDoctorHasPatient(doctorId: DoctorId): [PatientId] {
      let exist = patientToDoctorMapping.get(doctorId);
      switch (exist) {
        case (null) {
            return [];
        };
        case (?exist) {
            return Buffer.toArray(exist);
        };
      };
    };

    public func removeDoctorHasPatient(doctorId: DoctorId, patientId: PatientId): [PatientId] {
      let exist = patientToDoctorMapping.get(doctorId);
      let doctorHasPatientTemp = Buffer.Buffer<PatientId>(0);
      switch (exist) {
        case (null) {
            return Buffer.toArray(doctorHasPatientTemp);
        };
        case (?exist) {
            let idx = Buffer.indexOf<Nat>(patientId, exist, isEqPatientId);
            switch(idx) {
              case(null) {  };
              case(?idx) { let removed = exist.remove(idx); };
            };
            return Buffer.toArray(exist);
        };
      };
    };

    public func createHistory(patientId: PatientId, history: History) : async [History] {  
      let exist = historyToPatientMapping.get(patientId);
      switch(exist) {
        case(null) { 
          let historyToPatientMappingTemp = Buffer.Buffer<History>(0);
          historyToPatientMappingTemp.add(history);
          historyToPatientMapping.put(patientId, historyToPatientMappingTemp);
          Buffer.toArray(historyToPatientMappingTemp);
         };
        case(?exist) { 
          exist.add(history);
          historyToPatientMapping.put(patientId, exist);
          Buffer.toArray(exist);
         };
      };
    };

    public func getHistory(patientId: PatientId): [History] {
      let exist = historyToPatientMapping.get(patientId);
      switch (exist) {
        case (null) {
            return [];
        };
        case (?exist) {
            return Buffer.toArray(exist);
        };
      };
    };

   };

    func isEqDoctorId(x: DoctorId, y: DoctorId): Bool { x == y };
    func isEqHospitalId(x: HospitalId, y: HospitalId): Bool { x == y };
    func isEqPatientId(x: PatientId, y: PatientId): Bool { x == y };
    func isEqHospitalHasPatientId(x: HospitalHasPatientId, y: HospitalHasPatientId): Bool { x == y };
    func customHash(n: Nat): Nat32 {
    let hashValue: Nat32 = (Nat32.fromNat(n) % 0xFFFFFFFF) : Nat32;
    return hashValue;
    }
}