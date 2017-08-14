import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  links: {
    title: string,
    route: string
  }[] = [
    {title: 'Home', route: '/home'},
    {title: 'About', route: '/about'},
    {title: 'Todolist', route: '/todolist'},
    {title: 'Quiz', route: '/quiz'},
    {title: 'Contact Us', route: '/contact-us' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
