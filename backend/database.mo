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

   public class Repository() {
    let hospitalMapping = HashMap.HashMap<HospitalId, Hospital>(1, isEqHospitalId, customHash); 
    let patientMapping = HashMap.HashMap<PatientId, Patient>(2, isEqPatientId, customHash);
    let patientToHospitalMapping = HashMap.HashMap<HospitalId, Buffer.Buffer<PatientId>>(3, isEqHospitalHasPatientId, customHash);

    public func createHospital(hospitalId: HospitalId, hospital: Hospital) : async HospitalId {
      hospitalMapping.put(hospitalId, hospital);
      hospitalId;
    };

    public func getHospital(hospitalId: HospitalId): ?Hospital {
      let res = hospitalMapping.get(hospitalId);
      res;
    };

    public func deleteHospital(hospitalId: HospitalId): Bool {
      hospitalMapping.delete(hospitalId);
      return true;
    };

    public func createPatient(patientId: PatientId, patient: Patient) : async PatientId {
      patientMapping.put(patientId, patient);
      patientId;
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


   };

    func isEqHospitalId(x: HospitalId, y: HospitalId): Bool { x == y };
    func isEqPatientId(x: PatientId, y: PatientId): Bool { x == y };
    func isEqHospitalHasPatientId(x: HospitalHasPatientId, y: HospitalHasPatientId): Bool { x == y };
    func customHash(n: Nat): Nat32 {
    let hashValue: Nat32 = (Nat32.fromNat(n) % 0xFFFFFFFF) : Nat32;
    return hashValue;
    }
}