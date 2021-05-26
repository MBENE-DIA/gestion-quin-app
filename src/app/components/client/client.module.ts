import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientRoutingModule } from './client-routing.module';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { CommandeNewComponent } from './commande-new/commande-new.component';



@NgModule({
  declarations: [
    ClientDetailComponent,
    ClientEditComponent,
    CommandeNewComponent

  ],
  imports: [
    CommonModule,
    ClientRoutingModule
  ]
})
export class ClientModule { }
