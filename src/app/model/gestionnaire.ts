import {User} from './user';
import {Droit} from './droit.enum';


export class Gestionnaire extends User {
  constructor(id?: number, nom?: string, prenom?: string, adresse?: string, email?: string, telephone?: string,
              motDePasse?: string, version?: number, droit?: Droit) {
    super(id, nom, prenom, adresse,  email, telephone, motDePasse, version, droit);
  }
}
