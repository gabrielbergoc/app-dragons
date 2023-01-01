import { Component } from '@angular/core';
import { Link } from 'src/app/core/interfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  links: Link[] = [
    {
      name: 'Home',
      link: '/',
    },
    {
      name: 'Dragons',
      link: 'dragons',
    },
    {
      name: 'Register',
      link: 'dragons/create',
    },
    {
      name: 'About',
      link: 'about',
    },
    {
      name: 'Logout',
      link: 'logout',
    },
  ];
}
