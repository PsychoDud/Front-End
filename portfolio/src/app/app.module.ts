import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartesComponent } from './partes/partes.component';
import { BannerComponent } from './partes/banner/banner.component';
import { EducacionComponent } from './partes/educacion/educacion.component';
import { ExperienciaComponent } from './partes/experiencia/experiencia.component';
import { FooterComponent } from './partes/footer/footer.component';
import { HeaderComponent } from './partes/header/header.component';
import { HomeComponent } from './partes/home/home.component';
import { LoginComponent } from './partes/login/login.component';
import { LogoApComponent } from './partes/logo-ap/logo-ap.component';
import { ProyectosComponent } from './partes/proyectos/proyectos.component';
import { SkillsComponent } from './partes/skills/skills.component';
import { SobreMiComponent } from './partes/sobre-mi/sobre-mi.component';

@NgModule({
  declarations: [
    AppComponent,
    PartesComponent,
    BannerComponent,
    EducacionComponent,
    ExperienciaComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    LogoApComponent,
    ProyectosComponent,
    SkillsComponent,
    SobreMiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
