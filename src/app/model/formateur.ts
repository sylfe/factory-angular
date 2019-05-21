import {User} from './user';
import {Droit} from './droit.enum';
import {Matiere} from './matiere';


export class Formateur extends User {
  constructor(id?: number, nom?: string, prenom?: string, adresse?: string, email?: string, telephone?: string,
              motDePasse?: string, version?: number, droit?: Droit, listeMatiere?: Matiere[]) {
    super(id, nom, prenom, adresse, email, telephone, motDePasse, version, droit);
  }
}

