import {Droit} from './droit.enum';

export class User {

  constructor(private id?: number, private nom?: string, private prenom?: string, private adresse?: string,
              private email?: string, private telephone?: string, private motDePasse?: string,
              private version?: number, private droit?: Droit) {}

}
