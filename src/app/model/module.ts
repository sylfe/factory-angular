
import {Formateur} from "./formateur";
import {Matiere} from "./matiere";
import {Formation} from "./formation";

export class Module {


  constructor(private _id?: number, private _dateDebut?: Date, private _matiere?: Matiere,
              private _formateur?: Formateur, private _formation?: Formation, private _version?: number) {
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get dateDebut(): Date {
    return this._dateDebut;
  }

  set dateDebut(value: Date) {
    this._dateDebut = value;
  }

  get matiere(): Matiere {
    return this._matiere;
  }

  set matiere(value: Matiere) {
    this._matiere = value;
  }

  get formateur(): Formateur {
    return this._formateur;
  }

  set formateur(value: Formateur) {
    this._formateur = value;
  }

  get formation(): Formation {
    return this._formation;
  }

  set formation(value: Formation) {
    this._formation = value;
  }

  get version(): number {
    return this._version;
  }

  set version(value: number) {
    this._version = value;
  }
}
