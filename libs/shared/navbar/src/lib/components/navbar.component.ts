import { Component } from '@angular/core';

@Component({
  selector: 'lib-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
  host: {
    '[attr.data-navbar-instance]': 'true', // This forces unique IDs for the instances
  },
})
export class NavbarComponent {}
