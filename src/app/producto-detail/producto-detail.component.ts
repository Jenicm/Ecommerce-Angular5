import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase } from 'angularfire2/database';
import { ActivatedRoute } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-producto-detail',
  templateUrl: './producto-detail.component.html',
  styleUrls: ['./producto-detail.component.css']
})
export class ProductoDetailComponent implements OnInit {
  productoObservable: Observable<any[]>;
  _id: number;
  prueba: any;

  constructor( private db: AngularFireDatabase, private route: ActivatedRoute, private router: Router, private cookieService: CookieService) {  }

  ngOnInit() {
    this._id = this.route.snapshot.params["id"];
    this.productoObservable=this.getProductosId('/productos');
    
  }

  getProductosId( listPath){
    return this.db.list(listPath).valueChanges();
}

detalles(ident, nombre, fot, preci, cant) {
  this.prueba = {   
    id: ident.value,
    titulo: nombre.value,
    foto: fot.value,
    precio: preci.value,
    cantidad: cant.value,
    total: cant.value*preci.value
  };

  this.cookieService.set(ident.value, JSON.stringify(this.prueba)); 
  this.router.navigate(['/carrito'])
}

}