import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  links = [
    {title: 'Todolist', route: '/todolist'},
    {title: 'Home', route: '/home'},
    {title: 'About', route: '/about'},
    {title: 'Contact Us', route: '/contact-us' }
  ];
  constructor() { }

  ngOnInit() {
  }

}
