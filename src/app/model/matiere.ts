import {Enseignement} from "./enseignement";

export class Matiere {
  constructor(private _id?: number, private _nom?: string, private _niveau?: string, private _objectif?: string,
              private _prerequis?: string, private _contenu?: string, private _nbJours?: number, private _enseignements?: Enseignement[], private _version?: number){}


  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get niveau(): string {
    return this._niveau;
  }

  set niveau(value: string) {
    this._niveau = value;
  }

  get prerequis(): string {
    return this._prerequis;
  }

  set prerequis(value: string) {
    this._prerequis = value;
  }

  get nbJours(): number {
    return this._nbJours;
  }

  set nbJours(value: number) {
    this._nbJours = value;
  }


  get contenu(): string {
    return this._contenu;
  }

  set contenu(value: string) {
    this._contenu = value;
  }


  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }


  get objectif(): string {
    return this._objectif;
  }

  set objectif(value: string) {
    this._objectif = value;
  }

  get enseignements(): Enseignement[] {
    return this._enseignements;
  }

  set enseignements(value: Enseignement[]) {
    this._enseignements = value;
  }

  get version(): number {
    return this._version;
  }

  set version(value: number) {
    this._version = value;
  }
}
