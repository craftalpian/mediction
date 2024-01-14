import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

export interface Doctor {
  'id' : bigint,
  'numberSIP' : string,
  'owner' : Principal,
  'createdAt' : bigint,
  'sector' : DoctorSector,
  'specialist' : DoctorSpecialist,
  'email' : string,
  'fullname' : string,
  'updatedAt' : bigint,
  'phone' : string,
}
export type DoctorId = bigint;
export type DoctorId__1 = bigint;
export interface DoctorPayload {
  'numberSIP' : string,
  'sector' : DoctorSector,
  'specialist' : DoctorSpecialist,
  'email' : string,
  'fullname' : string,
  'phone' : string,
}
export type DoctorSector = { 'Psikiatri' : null } |
  { 'Anak' : null } |
  { 'Gigi' : null } |
  { 'Umum' : null } |
  { 'Bedah' : null };
export type DoctorSpecialist = { 'Dermatolog' : null } |
  { 'Neurolog' : null } |
  { 'Onkolog' : null } |
  { 'Kardiolog' : null } |
  { 'Ortopedi' : null };
export type Dosage = { 'One' : null } |
  { 'Two' : null } |
  { 'Five' : null } |
  { 'Four' : null } |
  { 'Three' : null };
export type DrinkDuration = { 'TigaHari' : null } |
  { 'SatuHari' : null } |
  { 'DuaMinggu' : null } |
  { 'SatuMinggu' : null } |
  { 'Lainnya' : string } |
  { 'SatuBulan' : null };
export type DrinkPeriod = { 'DuaHariSekali' : null } |
  { 'Lainnya' : string } |
  { 'TigaHariSekali' : null } |
  { 'HariPilihan' : string } |
  { 'SetiapHari' : null };
export type DrinkRules = { 'SesudahMakan' : null } |
  { 'SebelumMakan' : null } |
  { 'SebelumTidur' : null };
export interface History {
  'id' : HistoryId,
  'weight' : bigint,
  'doctorId' : DoctorId__1,
  'action' : HistoryAction,
  'owner' : Principal,
  'patientId' : PatientId__1,
  'createdAt' : bigint,
  'description' : string,
  'diagnoses' : string,
  'followUp' : string,
  'updatedAt' : bigint,
  'symptoms' : string,
  'tension' : string,
  'medicines' : Array<Medicine>,
}
export type HistoryAction = { 'Terapi' : null } |
  { 'Operasi' : null } |
  { 'CheckUp' : null };
export type HistoryId = bigint;
export interface HistoryPayload {
  'weight' : bigint,
  'doctorId' : DoctorId__1,
  'action' : HistoryAction,
  'description' : string,
  'diagnoses' : string,
  'followUp' : string,
  'symptoms' : string,
  'tension' : string,
  'medicines' : Array<Medicine>,
}
export interface Hospital {
  'id' : bigint,
  'owner' : Principal,
  'password' : string,
  'name' : string,
  'createdAt' : bigint,
  'personInChargePhone' : string,
  'email' : string,
  'updatedAt' : bigint,
  'address' : string,
  'category' : HospitalCategory,
  'phone' : string,
  'personInPosition' : string,
  'personInCharge' : string,
}
export type HospitalCategory = { 'Private' : null } |
  { 'Public' : null };
export type HospitalId = bigint;
export interface HospitalPayload {
  'password' : string,
  'name' : string,
  'personInChargePhone' : string,
  'email' : string,
  'address' : string,
  'category' : HospitalCategory,
  'phone' : string,
  'personInPosition' : string,
  'personInCharge' : string,
}
export interface Medicine {
  'drinkDuration' : DrinkDuration,
  'dosage' : Dosage,
  'drinkStart' : string,
  'name' : string,
  'drinkRules' : DrinkRules,
  'drinkPeriod' : DrinkPeriod,
}
export interface Patient {
  'id' : bigint,
  'bloodType' : string,
  'owner' : Principal,
  'birthdate' : string,
  'password' : string,
  'createdAt' : bigint,
  'representativeName' : string,
  'fullname' : string,
  'insurance' : boolean,
  'representativeAddress' : string,
  'updatedAt' : bigint,
  'representativeStatus' : string,
  'idNumber' : bigint,
  'address' : string,
  'gender' : PatientGender,
  'phoneNumber' : string,
  'representativePhoneNumber' : string,
}
export type PatientGender = { 'Male' : null } |
  { 'Female' : null };
export type PatientId = bigint;
export type PatientId__1 = bigint;
export interface PatientPayload {
  'bloodType' : string,
  'birthdate' : string,
  'password' : string,
  'representativeName' : string,
  'fullname' : string,
  'insurance' : boolean,
  'representativeAddress' : string,
  'representativeStatus' : string,
  'idNumber' : bigint,
  'address' : string,
  'gender' : PatientGender,
  'phoneNumber' : string,
  'representativePhoneNumber' : string,
}
export interface _SERVICE {
  'createDoctor' : ActorMethod<[DoctorId, DoctorPayload], Doctor>,
  'createDoctorPatient' : ActorMethod<[DoctorId, PatientId], Array<PatientId>>,
  'createHistory' : ActorMethod<[PatientId, HistoryPayload], Array<History>>,
  'createHospital' : ActorMethod<[HospitalId, HospitalPayload], Hospital>,
  'createHospitalPatient' : ActorMethod<
    [HospitalId, PatientId],
    Array<PatientId>
  >,
  'createPatient' : ActorMethod<[PatientId, PatientPayload], Patient>,
  'getDoctor' : ActorMethod<[DoctorId], [] | [Doctor]>,
  'getDoctorPatient' : ActorMethod<[DoctorId], Array<Patient>>,
  'getHistory' : ActorMethod<[PatientId], Array<History>>,
  'getHospital' : ActorMethod<[HospitalId], [] | [Hospital]>,
  'getHospitalPatient' : ActorMethod<[HospitalId], Array<Patient>>,
  'getPatient' : ActorMethod<[PatientId], [] | [Patient]>,
  'removeDoctorPatient' : ActorMethod<[DoctorId, PatientId], Array<PatientId>>,
}
