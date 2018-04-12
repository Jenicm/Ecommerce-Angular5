import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireDatabase } from 'angularfire2/database'; 
import { Observable } from 'rxjs/Observable';
import { Insertar } from '../models/Insertar';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {
    productoObservable: Observable<any[]>;

    constructor( private db: AngularFireDatabase) { }
  
    ngOnInit() {
    this.productoObservable = this.getProductos('/productos');
  }
    
    getProductos(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }
  }
