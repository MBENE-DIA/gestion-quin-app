import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployerRoutingModule } from './employer-routing.module';
import { LivraisonListComponent } from './livraison-list/livraison-list.component';
import { EmployerEditComponent } from './employer-edit/employer-edit.component';
import { EmployerDetailComponent } from './employer-detail/employer-detail.component';



@NgModule({
  declarations: [
    LivraisonListComponent,
    EmployerEditComponent,
    EmployerDetailComponent
  ],
  imports: [
    CommonModule,
    EmployerRoutingModule
  ]
})
export class EmployerModuleModule { }
