import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-template-outlet',
  templateUrl: './template-outlet.component.html',
  styleUrl: './template-outlet.component.css'
})
export class TemplateOutletComponent {
  @Input() headerTemplate: TemplateRef<any>; // Custom template provided by parent

  counter = 100
}
