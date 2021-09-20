import { NgModule }  from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent }     from './app.component';

import { HeaderComponent }        from './components/template/header/header.component';
import { NavComponent }           from './components/template/nav/nav.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import {MatSidenavModule}   from '@angular/material/sidenav';
import {MatCardModule}      from '@angular/material/card';
import {MatButtonModule}    from '@angular/material/button';
import {MatListModule}      from '@angular/material/list';

import { HomeComponent }        from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    HomeComponent,
    ProductCrudComponent,
    ProductCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
