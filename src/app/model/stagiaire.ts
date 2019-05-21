import {User} from './user';
import {PersonneDroit} from "./personne-droit";
import {Formation} from "./formation";
import {Ordinateur} from "./ordinateur";



export class Stagiaire extends User {
  constructor(id?: number, nom?: string, prenom?: string, adresse?: string, email?: string, telephone?: string,
              motDePasse?: string, version?: number, droits?: PersonneDroit[], private _formation?: Formation, private _ordinateur?: Ordinateur) {
    super(id, nom, prenom, adresse,  email, telephone, motDePasse, version, droits);
  }


  get formation(): Formation {
    return this._formation;
  }

  set formation(value: Formation) {
    this._formation = value;
  }

  get ordinateur(): Ordinateur {
    return this._ordinateur;
  }

  set ordinateur(value: Ordinateur) {
    this._ordinateur = value;
  }
}
