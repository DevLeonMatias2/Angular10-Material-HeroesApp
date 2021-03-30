import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import {FormsModule} from '@angular/forms';


import {HeroesRoutingModule} from './heroes-routing.module';
import {MaterialModule} from '../material/material.module';

import { AgregarComponent } from './pages/agregar/agregar.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { HomeComponent } from './pages/home/home.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { ImagenPipe } from './pipes/imagen.pipe';
import { ConfirmarComponent } from './components/confirmar/confirmar.component';



@NgModule({
  declarations: [
    AgregarComponent,
    BuscarComponent,
    HeroeComponent,
    HomeComponent,
    ListadoComponent,
    HeroeTarjetaComponent,
    ImagenPipe,
    ConfirmarComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    MaterialModule,
    HeroesRoutingModule,
    MatSidenavModule
  ]
})
export class HeroesModule { }
