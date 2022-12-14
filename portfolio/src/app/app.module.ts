import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './partes/header/header.component';
import { LogoAPComponent } from './partes/logo-ap/logo-ap.component';
import { BannerComponent } from './partes/banner/banner.component';
import { SobreMiComponent } from './partes/sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './partes/experiencia/experiencia.component';
import { EducacionComponent } from './partes/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { SkillsComponent } from './partes/skills/skills.component';
import { ProyectosComponent } from './partes/proyectos/proyectos.component';
import { FooterComponent } from './partes/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './partes/home/home.component';
import { LoginComponent } from './partes/login/login.component';
import { interceptorProvider } from './service/interceptor-service';
import { NewExperienciaComponent } from './partes/experiencia/new-experiencia.component';
import { FormsModule } from '@angular/forms';
import { EditExperienciaComponent } from './partes/experiencia/edit-experiencia.component';
import { NeweducacionComponent } from './partes/educacion/neweducacion.component';
import { EditeducacionComponent } from './partes/educacion/editeducacion.component';
import { EditSkillComponent } from './partes/skills/edit-skill.component';
import { NewSkillComponent } from './partes/skills/new-skill.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    BannerComponent,
    SobreMiComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NeweducacionComponent,
    EditeducacionComponent,
    EditSkillComponent,
    NewSkillComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
    
    
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
