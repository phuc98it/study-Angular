import { Component, ViewChild } from '@angular/core';
import { ToggleComponent } from '../toggle/toggle.component';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrl: './hello.component.css'
})
export class HelloComponent {
  user = {
    name: 'Phuc Phan',
    age: 10,
  };

  authors = [
    {
      id: 1,
      firstName: 'Flora',
      lastName: 'Twell',
      email: 'ftwell0@phoca.cz',
      gender: 'Female',
      ipAddress: '99.180.237.33',
    },
    {
      id: 2,
      firstName: 'Priscella',
      lastName: 'Signe',
      email: 'psigne1@berkeley.edu',
      gender: 'Female',
      ipAddress: '183.243.228.65',
    },
  ];

  
  @ViewChild('toggleComp') toggleComp: ToggleComponent;
  toggleInside() {
    this.toggleComp.toggle();
  }
}
