import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';

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
  'createHospital' : ActorMethod<[HospitalId, HospitalPayload], HospitalId>,
  'createHospitalPatient' : ActorMethod<
    [HospitalId, PatientId],
    Array<PatientId>
  >,
  'createPatient' : ActorMethod<[PatientId, PatientPayload], PatientId>,
  'getHospital' : ActorMethod<[HospitalId], [] | [Hospital]>,
  'getHospitalPatient' : ActorMethod<[HospitalId], Array<PatientId>>,
  'getPatient' : ActorMethod<[PatientId], [] | [Patient]>,
}
