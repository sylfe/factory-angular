import {User} from './user';
import {Formation} from "./formation";
import {PersonneDroit} from "./personne-droit";


export class Gestionnaire extends User {
  constructor(id?: number, nom?: string, prenom?: string, adresse?: string, email?: string, telephone?: string,
              motDePasse?: string, version?: number, droits?: PersonneDroit[], private _formations?: Formation[]) {
    super(id, nom, prenom, adresse,  email, telephone, motDePasse, version, droits);
  }


  get formations(): Formation[] {
    return this._formations;
  }

  set formations(value: Formation[]) {
    this._formations = value;
  }
}
