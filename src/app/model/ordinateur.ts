import {Materiel} from './materiel';


export class Ordinateur extends Materiel {


  constructor(id?: number, code?: string, nom?: string, coutJournee?: number, disponibilite?: false,
              private _processeur?: string, private _ram?: number, private _dd?: number,
              private _anneeAchat?: number) {
    super(id, code, nom, coutJournee, disponibilite);
  }

  get processeur(): string {
    return this._processeur;
  }

  set processeur(value: string) {
    this._processeur = value;
  }

  get ram(): number {
    return this._ram;
  }

  set ram(value: number) {
    this._ram = value;
  }

  get dd(): number {
    return this._dd;
  }

  set dd(value: number) {
    this._dd = value;
  }

  get anneeAchat(): number {
    return this._anneeAchat;
  }

  set anneeAchat(value: number) {
    this._anneeAchat = value;
  }
}
