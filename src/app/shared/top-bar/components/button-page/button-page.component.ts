import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-page',
  standalone: true,
  imports: [],
  templateUrl: './button-page.component.html',
  styleUrl: './button-page.component.css'
})
export class ButtonPageComponent {
  @Input() label:string = '';
}
