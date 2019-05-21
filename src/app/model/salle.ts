import {Materiel} from './materiel';

export class Salle extends Materiel {
  constructor(id?: number, code?: string, coutJournee?: number, disponibilite?: false,
              private _capacite?: number) {
    super(id, code, coutJournee, disponibilite);
  }


  get capacite(): number {
    return this._capacite;
  }

  set capacite(value: number) {
    this._capacite = value;
  }
}
