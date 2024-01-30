import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './pages/home/home.module';
import { AboutMeModule } from './pages/about-me/about-me.module';
import { ProjectsModule } from './pages/projects/projects.module';
import { AcademicModule } from './pages/academic/academic.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, SharedModule, HomeModule, AboutMeModule, ProjectsModule, AcademicModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Danichs.github.io';
}
