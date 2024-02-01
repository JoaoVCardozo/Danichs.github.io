import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-button-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './button-page.component.html',
  styleUrl: './button-page.component.css'
})
export class ButtonPageComponent {
  @Input() label:string = '';
  @Input() link:string = '';
}
