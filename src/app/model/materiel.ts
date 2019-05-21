export class Materiel {
  constructor(
    private _id?: number, private _code?: string, private _coutJournee?: number, private _disponibilite?: false) {}

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get code(): string {
    return this._code;
  }

  set code(value: string) {
    this._code = value;
  }

  get coutJournee(): number {
    return this._coutJournee;
  }

  set coutJournee(value: number) {
    this._coutJournee = value;
  }

  get disponibilite(): false {
    return this._disponibilite;
  }

  set disponibilite(value: false) {
    this._disponibilite = value;
  }
}
