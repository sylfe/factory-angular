import {User} from './user';
import {PersonneDroit} from "./personne-droit";



export class Technicien extends User {

  constructor(id?: number, nom?: string, prenom?: string, adresse?: string, email?: string, telephone?: string,
              motDePasse?: string, version?: number, droits?: PersonneDroit[]) {
    super(id, nom, prenom, adresse,  email, telephone, motDePasse, version, droits);
  }

}
