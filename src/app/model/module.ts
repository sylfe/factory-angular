import {Matiere} from './matiere';
import {Formateur} from './formateur';

export class Module {

  constructor(private _nbJours?: number, private _matiere?: Matiere, private _formateur?: Formateur) {}


  get nbJours(): number {
    return this._nbJours;
  }

  set nbJours(value: number) {
    this._nbJours = value;
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
}
