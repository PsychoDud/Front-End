import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditeducacionComponent } from './partes/educacion/editeducacion.component';
import { NeweducacionComponent } from './partes/educacion/neweducacion.component';
import { EditExperienciaComponent } from './partes/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './partes/experiencia/new-experiencia.component';
import { HomeComponent } from './partes/home/home.component';
import { LoginComponent } from './partes/login/login.component';
import { EditSkillComponent } from './partes/skills/edit-skill.component';
import { NewSkillComponent } from './partes/skills/new-skill.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent},
  { path: 'editexp/:id', component: EditExperienciaComponent},
  { path: 'nuevaedu', component: NeweducacionComponent},
  { path: 'editedu/:id', component: EditeducacionComponent},
  { path: 'newskill', component: NewSkillComponent},
  { path: 'editskill/:id', component: EditSkillComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

