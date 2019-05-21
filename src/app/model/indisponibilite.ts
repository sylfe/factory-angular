import {Formateur} from "./formateur";


export class Indisponibilite {


  constructor(private _id?: number, private _dateDebut?: Date, private _dateFin?: Date, private _formateur: Formateur) {
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

  get dateFin(): Date {
    return this._dateFin;
  }

  set dateFin(value: Date) {
    this._dateFin = value;
  }

  get formateur(): Formateur {
    return this._formateur;
  }

  set formateur(value: Formateur) {
    this._formateur = value;
  }
}
