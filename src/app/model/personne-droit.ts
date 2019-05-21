import {Droit} from './droit.enum';
import {User} from './user';

export class PersonneDroit {
  constructor(private id?: number, private droit?: Droit, private personne?: User) {
  }
}
