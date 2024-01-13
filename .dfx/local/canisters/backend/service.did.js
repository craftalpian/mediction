export const idlFactory = ({ IDL }) => {
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
  const PatientId = IDL.Nat;
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
    'createHospital' : IDL.Func(
        [HospitalId, HospitalPayload],
        [HospitalId],
        [],
      ),
    'createHospitalPatient' : IDL.Func(
        [HospitalId, PatientId],
        [IDL.Vec(PatientId)],
        [],
      ),
    'createPatient' : IDL.Func([PatientId, PatientPayload], [PatientId], []),
    'getHospital' : IDL.Func([HospitalId], [IDL.Opt(Hospital)], []),
    'getHospitalPatient' : IDL.Func([HospitalId], [IDL.Vec(PatientId)], []),
    'getPatient' : IDL.Func([PatientId], [IDL.Opt(Patient)], []),
  });
};
export const init = ({ IDL }) => { return []; };
