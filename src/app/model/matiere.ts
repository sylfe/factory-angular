export class Matiere {
  constructor(private _nom?: string, private _niveau?: string, private _objectifs?: string,
              private _prerequis?: string, private _contenu?: string, private _nbJours?: number, private _id?: number){}


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

  get objectifs(): string {
    return this._objectifs;
  }

  set objectifs(value: string) {
    this._objectifs = value;
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
}
