import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  logo: String;

  constructor() {
    this.logo = 'assets/logo.png';
  }

  ngOnInit() {
  }

}
