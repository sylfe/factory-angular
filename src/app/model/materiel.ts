export class Materiel {

  constructor(
    private _id?: number, private _version?: number, private _code?: string = 'MAT', private _coutJournee?: number = 0) {
  }

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


  get version(): number {
    return this._version;
  }

  set version(value: number) {
    this._version = value;
  }
}
