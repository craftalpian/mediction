import Trie "mo:base/Trie";
import HashMap "mo:base/HashMap";
import Buffer "mo:base/Buffer";
import Text "mo:base/Text";
import Nat "mo:base/Nat";

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

    public type DoctorId = Nat;

    public type DoctorSpecialist = {
        #Kardiolog;
        #Neurolog;
        #Onkolog;
        #Dermatolog;
        #Ortopedi;
    };

    public type DoctorSector = {
        #Umum;
        #Anak;
        #Gigi;
        #Bedah;
        #Psikiatri;
    };

    public type Doctor = {
    id : Nat;
    owner: Principal;
    fullname : Text;
    numberSIP : Text;
    email : Text;
    phone : Text;
    sector: DoctorSector;
    specialist: DoctorSpecialist;
    createdAt: Int;
    updatedAt: Int;
  };

  public type DoctorPayload = {
    // id : Nat32;
    // owner: Principal;
    fullname : Text;
    numberSIP : Text;
    email : Text;
    phone : Text;
    sector: DoctorSector;
    specialist: DoctorSpecialist;
    // createdAt: Int;
    // updatedAt: Int;
  };

  public type DoctorHasPatientId = Nat;

  public type DoctorHasPatient = {
      doctorId : DoctorId;
      patientId : PatientId;
  };

  public type DrinkRules = {
    #SebelumMakan;
    #SesudahMakan;
    #SebelumTidur;
  };

  public type HistoryAction = {
    #Operasi;
    #CheckUp;
    #Terapi;
  };

  public type Dosage = {
    #One;
    #Two;
    #Three;
    #Four;
    #Five;
  };

  public type DrinkPeriod = {
    #SetiapHari;
    #DuaHariSekali;
    #TigaHariSekali;
    #HariPilihan: Text;
    #Lainnya: Text;
  };
  public type DrinkDuration = {
    #SatuHari;
    #TigaHari;
    #SatuMinggu;
    #DuaMinggu;
    #SatuBulan;
    #Lainnya: Text;
  };

  public type HistoryId = Nat;

  public type Medicine = {
    name: Text;
    dosage: Dosage;
    drinkPeriod: DrinkPeriod;
    drinkRules: DrinkRules;
    drinkStart: Text;
    drinkDuration: DrinkDuration;
  };

  public type History = {
    id : HistoryId;
    owner: Principal;
    doctorId : DoctorId;
    patientId : PatientId;
    symptoms: Text;
    tension: Text;
    weight: Nat;
    diagnoses: Text;
    description: Text;
    action: HistoryAction;
    followUp: Text;
    medicines: [Medicine];
    createdAt: Int;
    updatedAt: Int;
  };

  public type HistoryPayload = {
    // id : HistoryId;
    // owner: Principal;
    doctorId : DoctorId;
    // patientId : PatientId;
    symptoms: Text;
    tension: Text;
    weight: Nat;
    diagnoses: Text;
    description: Text;
    action: HistoryAction;
    followUp: Text;
    medicines: [Medicine];
    // createdAt: Int;
    // updatedAt: Int;
  };
}