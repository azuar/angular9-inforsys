import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    public api: ApiService,
    public router: Router
  ) { }

  ngOnInit(): void {
  }
  users: any = {};
  hide: boolean = true;
  loading: boolean;

  register() {
    this.loading = true;
    this.api.register(this.users.email, this.users.password).subscribe(res => {
      // console.log(res);

      this.router.navigate(['/login']);
      this.loading = false;
    }, error => {
      this.loading = false;
      alert('Anda Tidak Dapat Melakukan Pendaftaran');
    })
  }
}
