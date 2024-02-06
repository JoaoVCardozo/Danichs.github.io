import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  AngularProjects = false;
  TypescriptProjects = false;
  JavascriptProjects = false;
  JavaProjects = false;
  CProjects = false
  CsharpProjects = false;
  SQLProjects = false;
  PythonProjects = false;
  /* Funções para alternancia de conteudo das linguagens */
  AngularFunction() {
    this.AngularProjects = true;
    this.TypescriptProjects = false;
    this.JavascriptProjects = false;
    this.JavaProjects = false;
    this.CProjects = false;
    this.CsharpProjects = false;
    this.SQLProjects = false;
    this.PythonProjects = false;
    
  }
  TypescriptFunction() {
    this.AngularProjects = false;
    this.TypescriptProjects = true;
    this.JavascriptProjects = false;
    this.JavaProjects = false;
    this.CProjects = false;
    this.CsharpProjects = false;
    this.SQLProjects = false;
    this.PythonProjects = false;
  }
  JavascriptFunction() {
    this.AngularProjects = false;
    this.TypescriptProjects = false;
    this.JavascriptProjects = true;
    this.JavaProjects = false;
    this.CProjects = false;
    this.CsharpProjects = false;
    this.SQLProjects = false;
    this.PythonProjects = false;
  }
  JavaFunction () {
    this.AngularProjects = false;
    this.TypescriptProjects = false;
    this.JavascriptProjects = false;
    this.JavaProjects = true;
    this.CProjects = false;
    this.CsharpProjects = false;
    this.SQLProjects = false;
    this.PythonProjects = false;
  }
  CFunction () {
    this.AngularProjects = false;
    this.TypescriptProjects = false;
    this.JavascriptProjects = false;
    this.JavaProjects = false;
    this.CProjects = true;
    this.CsharpProjects = false;
    this.SQLProjects = false;
    this.PythonProjects = false;
  }
  CsharpFunction () {
    this.AngularProjects = false;
    this.TypescriptProjects = false;
    this.JavascriptProjects = false;
    this.JavaProjects = false;
    this.CProjects = false;
    this.CsharpProjects = true;
    this.SQLProjects = false;
    this.PythonProjects = false;
  }
  SQLFunction () {
    this.AngularProjects = false;
    this.TypescriptProjects = false;
    this.JavascriptProjects = false;
    this.JavaProjects = false;
    this.CProjects = false;
    this.CsharpProjects = false;
    this.SQLProjects = true;
    this.PythonProjects = false;
  }
  PythonFunction () {
    this.AngularProjects = false;
    this.TypescriptProjects = false;
    this.JavascriptProjects = false;
    this.JavaProjects = false;
    this.CProjects = false;
    this.CsharpProjects = false;
    this.SQLProjects = false;
    this.PythonProjects = true;
  }
}
