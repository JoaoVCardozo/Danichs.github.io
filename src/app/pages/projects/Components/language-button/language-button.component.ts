import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-language-button',
  templateUrl: './language-button.component.html',
  styleUrl: './language-button.component.css'
})
export class LanguageButtonComponent {
  @Input() label:string = '';
}
