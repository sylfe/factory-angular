import {PersonneDroit} from "./personne-droit";

export class User {

  constructor(private _id?: number, private _nom?: string, private _prenom?: string, private _adresse?: string,
              private _email?: string, private _telephone?: string, private _motDePasse?: string,
              private _version?: number, private _droits?: any[]) {}

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get prenom(): string {
    return this._prenom;
  }

  set prenom(value: string) {
    this._prenom = value;
  }

  get adresse(): string {
    return this._adresse;
  }

  set adresse(value: string) {
    this._adresse = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get telephone(): string {
    return this._telephone;
  }

  set telephone(value: string) {
    this._telephone = value;
  }

  get motDePasse(): string {
    return this._motDePasse;
  }

  set motDePasse(value: string) {
    this._motDePasse = value;
  }

  get version(): number {
    return this._version;
  }

  set version(value: number) {
    this._version = value;
  }


  get droits(): any[] {
    return this._droits;
  }

  set droits(value: any[]) {
    this._droits = value;
  }
}
