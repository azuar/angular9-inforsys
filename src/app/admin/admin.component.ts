import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(
    public api: ApiService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.checkLogin();
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

  //Login Chek
  checkLogin() {
    this.api.get('bookswithauth/status').subscribe(res => {
      return;
    }, err => {
      this.router.navigate(['/login']);
    })
  }

  //Logout Function
  logout() {
    let conf = confirm('Yakin Ingin Keluar ?');
    if (conf) {
      localStorage.removeItem('appToken');
      window.location.reload();
    }
  }
}
