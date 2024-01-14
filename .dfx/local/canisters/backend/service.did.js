export const idlFactory = ({ IDL }) => {
  const DoctorId = IDL.Nat;
  const DoctorSector = IDL.Variant({
    'Psikiatri' : IDL.Null,
    'Anak' : IDL.Null,
    'Gigi' : IDL.Null,
    'Umum' : IDL.Null,
    'Bedah' : IDL.Null,
  });
  const DoctorSpecialist = IDL.Variant({
    'Dermatolog' : IDL.Null,
    'Neurolog' : IDL.Null,
    'Onkolog' : IDL.Null,
    'Kardiolog' : IDL.Null,
    'Ortopedi' : IDL.Null,
  });
  const DoctorPayload = IDL.Record({
    'numberSIP' : IDL.Text,
    'sector' : DoctorSector,
    'specialist' : DoctorSpecialist,
    'email' : IDL.Text,
    'fullname' : IDL.Text,
    'phone' : IDL.Text,
  });
  const Doctor = IDL.Record({
    'id' : IDL.Nat,
    'numberSIP' : IDL.Text,
    'owner' : IDL.Principal,
    'createdAt' : IDL.Int,
    'sector' : DoctorSector,
    'specialist' : DoctorSpecialist,
    'email' : IDL.Text,
    'fullname' : IDL.Text,
    'updatedAt' : IDL.Int,
    'phone' : IDL.Text,
  });
  const PatientId = IDL.Nat;
  const DoctorId__1 = IDL.Nat;
  const HistoryAction = IDL.Variant({
    'Terapi' : IDL.Null,
    'Operasi' : IDL.Null,
    'CheckUp' : IDL.Null,
  });
  const DrinkDuration = IDL.Variant({
    'TigaHari' : IDL.Null,
    'SatuHari' : IDL.Null,
    'DuaMinggu' : IDL.Null,
    'SatuMinggu' : IDL.Null,
    'Lainnya' : IDL.Text,
    'SatuBulan' : IDL.Null,
  });
  const Dosage = IDL.Variant({
    'One' : IDL.Null,
    'Two' : IDL.Null,
    'Five' : IDL.Null,
    'Four' : IDL.Null,
    'Three' : IDL.Null,
  });
  const DrinkRules = IDL.Variant({
    'SesudahMakan' : IDL.Null,
    'SebelumMakan' : IDL.Null,
    'SebelumTidur' : IDL.Null,
  });
  const DrinkPeriod = IDL.Variant({
    'DuaHariSekali' : IDL.Null,
    'Lainnya' : IDL.Text,
    'TigaHariSekali' : IDL.Null,
    'HariPilihan' : IDL.Text,
    'SetiapHari' : IDL.Null,
  });
  const Medicine = IDL.Record({
    'drinkDuration' : DrinkDuration,
    'dosage' : Dosage,
    'drinkStart' : IDL.Text,
    'name' : IDL.Text,
    'drinkRules' : DrinkRules,
    'drinkPeriod' : DrinkPeriod,
  });
  const HistoryPayload = IDL.Record({
    'weight' : IDL.Nat,
    'doctorId' : DoctorId__1,
    'action' : HistoryAction,
    'description' : IDL.Text,
    'diagnoses' : IDL.Text,
    'followUp' : IDL.Text,
    'symptoms' : IDL.Text,
    'tension' : IDL.Text,
    'medicines' : IDL.Vec(Medicine),
  });
  const HistoryId = IDL.Nat;
  const PatientId__1 = IDL.Nat;
  const History = IDL.Record({
    'id' : HistoryId,
    'weight' : IDL.Nat,
    'doctorId' : DoctorId__1,
    'action' : HistoryAction,
    'owner' : IDL.Principal,
    'patientId' : PatientId__1,
    'createdAt' : IDL.Int,
    'description' : IDL.Text,
    'diagnoses' : IDL.Text,
    'followUp' : IDL.Text,
    'updatedAt' : IDL.Int,
    'symptoms' : IDL.Text,
    'tension' : IDL.Text,
    'medicines' : IDL.Vec(Medicine),
  });
  const HospitalId = IDL.Nat;
  const HospitalCategory = IDL.Variant({
    'Private' : IDL.Null,
    'Public' : IDL.Null,
  });
  const HospitalPayload = IDL.Record({
    'password' : IDL.Text,
    'name' : IDL.Text,
    'personInChargePhone' : IDL.Text,
    'email' : IDL.Text,
    'address' : IDL.Text,
    'category' : HospitalCategory,
    'phone' : IDL.Text,
    'personInPosition' : IDL.Text,
    'personInCharge' : IDL.Text,
  });
  const Hospital = IDL.Record({
    'id' : IDL.Nat,
    'owner' : IDL.Principal,
    'password' : IDL.Text,
    'name' : IDL.Text,
    'createdAt' : IDL.Int,
    'personInChargePhone' : IDL.Text,
    'email' : IDL.Text,
    'updatedAt' : IDL.Int,
    'address' : IDL.Text,
    'category' : HospitalCategory,
    'phone' : IDL.Text,
    'personInPosition' : IDL.Text,
    'personInCharge' : IDL.Text,
  });
  const PatientGender = IDL.Variant({ 'Male' : IDL.Null, 'Female' : IDL.Null });
  const PatientPayload = IDL.Record({
    'bloodType' : IDL.Text,
    'birthdate' : IDL.Text,
    'password' : IDL.Text,
    'representativeName' : IDL.Text,
    'fullname' : IDL.Text,
    'insurance' : IDL.Bool,
    'representativeAddress' : IDL.Text,
    'representativeStatus' : IDL.Text,
    'idNumber' : IDL.Nat,
    'address' : IDL.Text,
    'gender' : PatientGender,
    'phoneNumber' : IDL.Text,
    'representativePhoneNumber' : IDL.Text,
  });
  const Patient = IDL.Record({
    'id' : IDL.Nat,
    'bloodType' : IDL.Text,
    'owner' : IDL.Principal,
    'birthdate' : IDL.Text,
    'password' : IDL.Text,
    'createdAt' : IDL.Int,
    'representativeName' : IDL.Text,
    'fullname' : IDL.Text,
    'insurance' : IDL.Bool,
    'representativeAddress' : IDL.Text,
    'updatedAt' : IDL.Int,
    'representativeStatus' : IDL.Text,
    'idNumber' : IDL.Nat,
    'address' : IDL.Text,
    'gender' : PatientGender,
    'phoneNumber' : IDL.Text,
    'representativePhoneNumber' : IDL.Text,
  });
  return IDL.Service({
    'createDoctor' : IDL.Func([DoctorId, DoctorPayload], [Doctor], []),
    'createDoctorPatient' : IDL.Func(
        [DoctorId, PatientId],
        [IDL.Vec(PatientId)],
        [],
      ),
    'createHistory' : IDL.Func(
        [PatientId, HistoryPayload],
        [IDL.Vec(History)],
        [],
      ),
    'createHospital' : IDL.Func([HospitalId, HospitalPayload], [Hospital], []),
    'createHospitalPatient' : IDL.Func(
        [HospitalId, PatientId],
        [IDL.Vec(PatientId)],
        [],
      ),
    'createPatient' : IDL.Func([PatientId, PatientPayload], [Patient], []),
    'getDoctor' : IDL.Func([DoctorId], [IDL.Opt(Doctor)], []),
    'getDoctorPatient' : IDL.Func([DoctorId], [IDL.Vec(Patient)], []),
    'getHistory' : IDL.Func([PatientId], [IDL.Vec(History)], []),
    'getHospital' : IDL.Func([HospitalId], [IDL.Opt(Hospital)], []),
    'getHospitalPatient' : IDL.Func([HospitalId], [IDL.Vec(Patient)], []),
    'getPatient' : IDL.Func([PatientId], [IDL.Opt(Patient)], []),
    'removeDoctorPatient' : IDL.Func(
        [DoctorId, PatientId],
        [IDL.Vec(PatientId)],
        [],
      ),
  });
};
export const init = ({ IDL }) => { return []; };
