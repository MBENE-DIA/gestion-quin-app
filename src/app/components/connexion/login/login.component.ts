import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl,
  ReactiveFormsModule,
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Client } from '../../admin/client/client';
import { ClientService } from '../../admin/client/client.service';
import { EmployerService } from '../../admin/employer/employer.service';
import { User } from '../../admin/user/user';
import { UserService } from '../../admin/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user : User | any;


  errorMessage = '';
  name = '';
  Wdate: any;
  annee = 0;
  loginForm: FormGroup | any;
  email = '';
  password = '';

  constructor(private router: Router,
    private userSrv: UserService,private datePipe: DatePipe,
    public fb: FormBuilder,
    public cltSrv: ClientService,
    public empSrv: EmployerService,
    public toastr: ToastrService) { }

  ngOnInit(): void {
    this.userSrv.islogin = false;
    this.userSrv.admin = false;
    this.userSrv.client = false;
    this.userSrv.employer = false;
    this.Wdate = this.transformDate(new Date());
    this.annee = this.Wdate.toString().substring(0, 4);
    localStorage.setItem('annee', this.annee.toString());
    this.loginForm = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required],
});


  }

  login(): void {
    const val = this.loginForm.value;
    console.log(val);
    
    this.userSrv.login(val.email, val.password).subscribe(
      (res) => {
        console.log(res);
        this.userSrv.user = res;
        this.user = res;
        localStorage.setItem('user', this.user);

       this.toastr.success('Connexion réussi!');

        var jwt = 'Mbene' + this.user.jwt;
        localStorage.setItem('token', jwt);
        localStorage.setItem('email', this.user.email);

        this.user.islogin = true;
        if (this.user.role === 'admin') {
          this.userSrv.admin = true;
          this.router.navigate(['/admin']);
        } else if (this.user.role === 'client') {

          this.cltSrv.getClientByEmail(this.user.email).toPromise<Client>().then((data)=>{
            this.cltSrv.client = data;
            console.log(this.cltSrv.client);
          })
          this.userSrv.client = true;
          this.router.navigate(['/client']);
        } else if (this.user.role === 'employer') {
          this.userSrv.employer = true;
          this.router.navigate(['/employer']);
        
        } else {
          this.router.navigate(['']);
        }
      },
      (error) =>  this.toastr.warning('Login incorrecte!')
    );
  }

  register(): void {
    this.router.navigateByUrl('/inscription');
  }
  logOut(): void {
    this.userSrv.islogin = false;
    localStorage.removeItem('email');
    this.router.navigate(['/login']);
  }

  transformDate(date: any): any {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }
  logout(): void {
    // remove user from local storage and set current user to null
    localStorage.removeItem('name');
  }






}
