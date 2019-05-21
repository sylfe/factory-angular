import {Materiel} from './materiel';
import {Salle} from "./salle";

export class VideoProjecteur extends Materiel {

  constructor(id?: number, version?: number, code?: string, coutJournee?: number,
              private _salle?: Salle) {
    super(id, version, code, coutJournee);
  }


  get salle(): Salle {
    return this._salle;
  }

  set salle(value: Salle) {
    this._salle = value;
  }
}
