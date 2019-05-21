import {User} from './user';
import {Droit} from './droit.enum';


export class Technicien extends User {
  constructor(id?: number, nom?: string, prenom?: string, adresse?: string, email?: string, telephone?: string,
              motDePasse?: string, version?: number) {
    super(id, nom, prenom, adresse,  email, telephone, motDePasse, version);
  }
}
