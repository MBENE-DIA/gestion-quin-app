import {ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PreloaderComponent } from './components/layouts/preloader/preloader.component';
import { HeaderComponent } from './components/layouts/header/header.component';
import { FooterComponent } from './components/layouts/footer/footer.component';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';

import { ContactComponent } from './components/pages/contact/contact.component';
import { AccueilComponent } from './components/accueil/accueil.component';
import { HttpClientModule } from '@angular/common/http';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { NzSelectModule } from 'ng-zorro-antd/select';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';

import { AdminisModule } from './components/admin/adminis.module';
import { EmployerModuleModule } from './components/employer/employer-module.module';
import { ClientModule } from './components/client/client.module';
import { LoginComponent } from './components/connexion/login/login.component';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './components/connexion/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    PreloaderComponent,
    HeaderComponent,
    FooterComponent,
    HomeOneComponent,
    HomeTwoComponent,    
    ContactComponent,
    AccueilComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NzSelectModule,
    NgSelectModule,
    FormsModule,
    ReactiveFormsModule,
    AdminisModule,
    ToastrModule.forRoot(),
    EmployerModuleModule,
    ClientModule,
    BrowserAnimationsModule
  ],
  providers: [ DatePipe,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
