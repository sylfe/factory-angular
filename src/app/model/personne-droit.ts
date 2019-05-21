import {Droit} from './droit.enum';
import {User} from './user';

export class PersonneDroit {
  constructor(private _id?: number, private _droit?: Droit = Droit.DROIT_ALL, private _personne?: User) {
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get droit(): Droit {
    return this._droit;
  }

  set droit(value: Droit) {
    this._droit = value;
  }

  get personne(): User {
    return this._personne;
  }

  set personne(value: User) {
    this._personne = value;
  }
}
