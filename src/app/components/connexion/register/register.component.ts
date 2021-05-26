import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ClientService } from '../../admin/client/client.service';
import { User } from '../../admin/user/user';
import { UserService } from '../../admin/user/user.service';
import { Client } from '../../client/client';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  taille = 0;
  age = 0;
  formClient: FormGroup | any;
  user: User | any;
  client: Client | any;
  currentClient: Client | any;
  constructor(
    public fb: FormBuilder,
    //public toastr: ToastrService,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public crudApiClient: ClientService,
    public crudApiUser: UserService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.formClient = this.fb.group({
      nom: ['', [Validators.required]],
      prenom: ['', [Validators.required]],
      adresse: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
      tel: ['', [Validators.required]],
      pwdd: ['', [Validators.required]],
    });
  }

  ResetForm(): void {
    this.formClient.reset();
  }

  onSubmit(): void {
    const val = this.formClient.value;
    this.user = {
      role: 'client',
      email: val.email,
      password: val.password,
    };
    if (val.password === val.pwdd) {
      this.addData();
    } else {
     // this.toastr.warning('Vérifier votre de passe ...');
    }
  }

  addData(): void {
    console.log('add data ... ');

    const val = this.formClient.value;

    this.crudApiUser
      .createData(this.user.email, this.user.password, this.user.role)
      .toPromise<User>()
      .then((data_u) => {
        console.log(data_u);

        this.client = {
          nom: val.nom,
          prenom: val.prenom,
          age: val.age,
          adresse: val.adresse,
          user: data_u,
        };
        console.log(this.client);

//this.toastr.success('Inscription User Réussi !');
        this.crudApiClient
          .createData(this.client)
          .toPromise<Client>()
          .then((data_p) => {
            this.currentClient = data_p;
            console.log('resultat patient created ' + data_p);
           // this.toastr.success('Inscription patient Réussi !');
          });
        this.router.navigate(['/client']);
      });
  }

  addDataPatient(): void {}
}


