import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeThreeComponent } from '../pages/home-three/home-three.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { CommandeNewComponent } from './commande-new/commande-new.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: HomeThreeComponent },
 // {path: ':id', component: ClientDetailComponent},
  {path: 'client-edit/:id', component: ClientEditComponent },
  {path: 'commande',component: CommandeNewComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
