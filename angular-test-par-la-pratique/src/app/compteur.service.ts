import { Injectable } from "@angular/core";

@Injectable()
export class CompteurService {
  private _nombre = 0;

  constructor() {}

  incrementer(): number {
    return ++this._nombre;
  }
}
