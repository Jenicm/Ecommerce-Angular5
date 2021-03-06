import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Insertar } from '../models/Insertar';
import { QueryFn } from 'angularfire2/database/interfaces';
 
@Injectable()
export class InsertarService { 
 
  private dbPath = '/productos';
 
  insercionRef: AngularFireList<Insertar> = null;
 
  constructor(private db: AngularFireDatabase) {
    this.insercionRef = db.list(this.dbPath);
  }
 
  crearProducto(insertar: Insertar): void {
    this.insercionRef.push(insertar);
  }
 
  getProductosList(): AngularFireList<Insertar> {
    return this.insercionRef;
  }
 
  private handleError(error) {
    console.log(error);
  }
}
