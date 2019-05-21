import {Materiel} from './materiel';

export class Salle extends Materiel {
  constructor(id?: number, code?: string, coutJournee?: number, disponibilite?: false,
              private _maxPersonne?: number) {
    super(id, code, coutJournee, disponibilite);
  }


  get maxPersonne(): number {
    return this._maxPersonne;
  }

  set maxPersonne(value: number) {
    this._maxPersonne = value;
  }
}
