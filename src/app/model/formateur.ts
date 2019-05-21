import {User} from './user';

import {Droit} from './droit.enum';
import {Matiere} from './matiere';
import {PersonneDroit} from "./personne-droit";
import {Enseignement} from "./enseignement";
import {Indisponibilite} from "./indisponibilite";


    export class Formateur extends User {
      constructor(id?: number, nom?: string, prenom?: string, adresse?: string, email?: string,
                  telephone?: string, motDePasse?: string,
                  version?: number, droits?: PersonneDroit[],
                  private _enseignements?: Enseignement[], private _indisponibilites?: Indisponibilite[]) {
        super(id, nom, prenom, adresse, email, telephone, motDePasse, version, droits);
      }


      get enseignements(): Enseignement[] {
        return this._enseignements;
      }

      set enseignements(value: Enseignement[]) {
        this._enseignements = value;
      }


      get indisponibilites(): Indisponibilite[] {
        return this._indisponibilites;
      }

      set indisponibilites(value: Indisponibilite[]) {
        this._indisponibilites = value;

      }
    }

