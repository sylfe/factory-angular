import {Materiel} from './materiel';
import {Stagiaire} from "./stagiaire";


export class Ordinateur extends Materiel {


  constructor(id?: number, version?: number, code?: string, coutJournee?: number,
              private _processeur?: string, private _quantiteRAM?: number, private _quantiteDD?: number,
              private _anneeAchat?: number, private _stagiaires?: Stagiaire[]) {
    super(id, version, code, coutJournee);
  }


  get processeur(): string {
    return this._processeur;
  }

  set processeur(value: string) {
    this._processeur = value;
  }

  get quantiteRAM(): number {
    return this._quantiteRAM;
  }

  set quantiteRAM(value: number) {
    this._quantiteRAM = value;
  }

  get quantiteDD(): number {
    return this._quantiteDD;
  }

  set quantiteDD(value: number) {
    this._quantiteDD = value;
  }

  get anneeAchat(): number {
    return this._anneeAchat;
  }

  set anneeAchat(value: number) {
    this._anneeAchat = value;
  }

  get stagiaires(): Stagiaire[] {
    return this._stagiaires;
  }

  set stagiaires(value: Stagiaire[]) {
    this._stagiaires = value;
  }
}
