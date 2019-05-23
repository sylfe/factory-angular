import {Materiel} from './materiel';
import {VideoProjecteur} from './videoProjecteur';

export class Salle extends Materiel {
  constructor(id?: number, version?: number, code?: string, coutJournee?: number, private _capacite?: number, private _videoprojecteur?: VideoProjecteur) {
    super(id, version, code, coutJournee);
  }


  get capacite(): number {
    return this._capacite;
  }

  set capacite(value: number) {
    this._capacite = value;
  }

  get videoprojecteur(): VideoProjecteur {
    return this._videoprojecteur;
  }

  set videoprojecteur(value: VideoProjecteur) {
    this._videoprojecteur = value;
  }
}
