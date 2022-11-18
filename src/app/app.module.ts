import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';
import { DirectivasComponent } from './components/directivas/directivas.component';
import { AppRoutingModule } from './app-routing.module';
import { MateriasComponent } from './components/materias/materias.component';
import { MateriaComponent } from './components/materia/materia.component';
import { MateriasService } from './services/materias.service';
import { PaisesService } from './services/paises.service';
import { PaisDetalleComponent } from './pais-detalle/pais-detalle.component';
import { PaisTarjetaComponent } from './pais-tarjeta/pais-tarjeta.component';
import { PaisesComponent } from './paises/paises.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    DirectivasComponent,
    MateriasComponent,
    MateriaComponent,
    PaisesComponent,
    PaisTarjetaComponent,
    PaisDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  
  ],
  providers: [
    MateriasService,
    PaisesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }