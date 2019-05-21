import {Formateur} from "./formateur";
import {Matiere} from "./matiere";

export class Enseignement {

  constructor(private _id?: number, private _formateur?: Formateur, private _matiere?: Matiere) {
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get formateur(): Formateur {
    return this._formateur;
  }

  set formateur(value: Formateur) {
    this._formateur = value;
  }

  get matiere(): Matiere {
    return this._matiere;
  }

  set matiere(value: Matiere) {
    this._matiere = value;
  }
}


