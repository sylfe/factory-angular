import {Materiel} from './materiel';

export class VideoProjecteur extends Materiel {
  constructor(id?: number, code?: string, coutJournee?: number, disponibilite?: false) {
    super(id, code, coutJournee, disponibilite);
  }
}
