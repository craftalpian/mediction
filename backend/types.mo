import Trie "mo:base/Trie";
import HashMap "mo:base/HashMap";
import Buffer "mo:base/Buffer";

module {
      /**
   * Types
   */

  // The type of a hospital identifier.
  public type HospitalId = Nat;

  // The type of a hospital.

  public type HospitalCategory = {
  #Public;
  #Private;
  };

  public type Hospital = {
    id : Nat;
    owner: Principal;
    email : Text;
    password : Text;
    name : Text;
    category : HospitalCategory;
    phone: Text;
    address: Text;
    personInCharge: Text;
    personInPosition: Text;
    personInChargePhone: Text;
    createdAt: Int;
    updatedAt: Int;
  };

    public type HospitalPayload = {
    // id : Nat;
    // owner: Principal;
    email : Text;
    password : Text;
    name : Text;
    category : HospitalCategory;
    phone: Text;
    address: Text;
    personInCharge: Text;
    personInPosition: Text;
    personInChargePhone: Text;
    // createdAt: Int;
    // updatedAt: Int;
  };

  /**
   * Application State
   */

//   private stable var hospitals : Trie.Trie<HospitalId, Hospital> = Trie.empty();

      /**
   * Types
   */

  // The type of a patient identifier.
  public type PatientId = Nat;

  // The type of a patient.

  public type PatientGender = {
  #Male;
  #Female;
  };

  public type Patient = {
    id : Nat;
    owner: Principal;
    fullname : Text;
    phoneNumber : Text;
    idNumber : Nat;
    birthdate : Text;
    password: Text;
    gender: PatientGender;
    bloodType: Text;
    address: Text;
    representativeName: Text;
    representativeStatus: Text;
    representativeAddress: Text;
    representativePhoneNumber: Text;
    insurance: Bool;
    createdAt: Int;
    updatedAt: Int;
  };

    public type PatientPayload = {
    // id : Nat;
    // owner: Principal;
    fullname : Text;
    phoneNumber : Text;
    idNumber : Nat;
    birthdate : Text;
    password: Text;
    gender: PatientGender;
    bloodType: Text;
    address: Text;
    representativeName: Text;
    representativeStatus: Text;
    representativeAddress: Text;
    representativePhoneNumber: Text;
    insurance: Bool;
    // createdAt: Int;
    // updatedAt: Int;
  };
    public type HospitalHasPatientId = Nat;

    public type HospitalHasPatient = {
        hospitalId : Nat;
        patientId : Nat;
    };
}