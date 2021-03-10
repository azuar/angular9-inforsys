import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  menu = [
    {
      name: 'Dashboard',
      icon: 'dashboard',
      url: '/admin/dashboard'
    },
    {
      name: 'Produks',
      icon: 'cases',
      url: '/admin/product'
    },
    {
      name: 'Upload Image',
      icon: 'monochrome_photos',
      url: '/admin/gallery'
    },
    {
      name: 'Administrator',
      icon: 'account_circle',
      url: '#'
    }
  ];
}
