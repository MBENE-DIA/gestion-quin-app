import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeThreeComponent } from '../pages/home-three/home-three.component';
import { EmployerDetailComponent } from './employer-detail/employer-detail.component';
import { EmployerEditComponent } from './employer-edit/employer-edit.component';
import { LivraisonListComponent } from './livraison-list/livraison-list.component';
const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: HomeThreeComponent },
  //{path: 'employer-edit/:id', component: EmployerEditComponent },
  {path: 'livraison',component: LivraisonListComponent}
];
/*
const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: HomeThreeComponent },
 // {path: ':id', component: ClientDetailComponent},
  {path: 'client-edit/:id', component: ClientEditComponent },
  {path: 'commande',component: CommandeNewComponent}
];



*/ 


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class EmployerRoutingModule { }
