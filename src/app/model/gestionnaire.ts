import {User} from './user';


export class Gestionnaire extends User {
  constructor(id?: number, nom?: string, prenom?: string, adresse?: string, email?: string, telephone?: string,
              motDePasse?: string, version?: number) {
    super(id, nom, prenom, adresse,  email, telephone, motDePasse, version);
  }





}
