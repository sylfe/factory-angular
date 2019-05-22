import {Gestionnaire} from "./gestionnaire";
import {Stagiaire} from "./stagiaire";
import {Salle} from "./salle";
import {Module} from "./module";

export class Formation {

  constructor(private _id?: number, private _titre: string, private _dateDebut?: Date, private _dateFin?: Date, private _version?: number,
              private _gestionnaire?: Gestionnaire, private _salle?: Salle, private _modules?: Module[], private _stagiaires?: Stagiaire[]) {
  }


  get titre(): string {
    return this._titre;
  }

  set titre(value: string) {
    this._titre = value;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get dateDebut(): Date {
    return this._dateDebut;
  }

  set dateDebut(value: Date) {
    this._dateDebut = value;
  }

  get dateFin(): Date {
    return this._dateFin;
  }

  set dateFin(value: Date) {
    this._dateFin = value;
  }

  get version(): number {
    return this._version;
  }

  set version(value: number) {
    this._version = value;
  }

  get gestionnaire(): Gestionnaire {
    return this._gestionnaire;
  }

  set gestionnaire(value: Gestionnaire) {
    this._gestionnaire = value;
  }

  get salle(): Salle {
    return this._salle;
  }

  set salle(value: Salle) {
    this._salle = value;
  }

  get modules(): Module[] {
    return this._modules;
  }

  set modules(value: Module[]) {
    this._modules = value;
  }

  get stagiaires(): Stagiaire[] {
    return this._stagiaires;
  }

  set stagiaires(value: Stagiaire[]) {
    this._stagiaires = value;
  }
}
