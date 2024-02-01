import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMeComponent } from './pages/about-me/about-me.component';
import { AcademicComponent } from './pages/academic/academic.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'home', component: AppComponent},
  { path: 'about-me', component: AboutMeComponent},
  { path: 'academic', component: AcademicComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', redirectTo: '/home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
