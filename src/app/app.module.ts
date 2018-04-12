import { BrowserModule } from '@angular/platform-browser';
import { NgModule, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './ruteo/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CookieService } from 'ngx-cookie-service';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { InsertarComponent } from './insertar/insertar.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';

import { ContactoService } from './services/contacto.services';
import { InsertarService } from './services/insertar.services';
import { AuthService } from './services/auth.service';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { ProductoDetailComponent } from './producto-detail/producto-detail.component';
import { AuthGuard } from './guards/auth.guard';
import { ReservaComponent } from './reserva/reserva.component';
import { CarritoComponent } from './carrito/carrito.component';


const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { title: 'Home' }
  },
  { path: 'login',
  component: LoginComponent },
  {
    path: 'productos',
    component: ProductosComponent,
    data: { title: 'Productos' }
  },
  {
    path: 'insertar',
    component: InsertarComponent,
    data: { title: 'Insertar' },
    canActivate: [AuthGuard]
  },
  {
    path: 'contactos',
    component: ContactoComponent,
    data: { title: 'Contacto' }
  },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: 'email-login',
  component: EmailComponent
  },
  { path: 'detalles/:id',
  component: ProductoDetailComponent
  },
  { path: 'signup',
  component: SignupComponent
  },
  { path: 'reserva/:id',
  component: ReservaComponent
  },
  {
    path: 'carrito',
    component: CarritoComponent
  },
  { path: '**',
  component: ErrorComponent,
  data: { title: 'Error' }
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ContactoComponent,
    InsertarComponent,
    ProductosComponent,
    HomeComponent,
    ErrorComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    ProductoDetailComponent,
    ReservaComponent,
    CarritoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
    appRoutes,
    { enableTracing: true }
  )
  ],
  providers: [
    CookieService, 
    InsertarService, 
    ContactoService, 
    AuthService,
    AuthGuard 
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule{ }