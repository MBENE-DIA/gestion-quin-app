import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeThreeComponent } from '../pages/home-three/home-three.component';
import { ClientDetailComponent } from './client-detail/client-detail.component';
import { ClientEditComponent } from './client-edit/client-edit.component';
import { CommandeNewComponent } from './commande-new/commande-new.component';
import { HomeTwoComponent } from '../pages/home-two/home-two.component';
import { ServiceComponent } from '../pages/service/service.component';
import { ServiceTwoComponent } from '../pages/service-two/service-two.component';
import { ServiceThreeComponent } from '../pages/service-three/service-three.component';
import { ServiceDetailsComponent } from '../pages/service-details/service-details.component';
import { BlogComponent } from '../pages/blog/blog.component';
import { BlogRightSidebarComponent } from '../pages/blog-right-sidebar/blog-right-sidebar.component';
import { BlogDetailsComponent } from '../pages/blog-details/blog-details.component';
import { PricingComponent } from '../pages/pricing/pricing.component';
import { RecentProjectComponent } from '../pages/recent-project/recent-project.component';
import { ErrorComponent } from '../pages/error/error.component';
import { TeamComponent } from '../pages/team/team.component';
import { TeamTwoComponent } from '../pages/team-two/team-two.component';
import { produitRoutes } from '../admin/produit/produit.route';
import { EmployerListComponent } from '../admin/employer/employer-list/employer-list.component';
import { ProduitListComponent } from '../admin/produit/produit-list/produit-list.component';
import { ProduitNewComponent } from '../admin/produit/produit-new/produit-new.component';

const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: 'accueil', component: HomeThreeComponent },
 // {path: ':id', component: ClientDetailComponent},
  {path: 'client-edit/:id', component: ClientEditComponent },
  {path: 'home-two', component: HomeTwoComponent},
  {path: 'sanitaire', component: ServiceComponent},
  {path: 'service-two', component: ServiceTwoComponent},
  {path: 'service-three', component: ServiceThreeComponent},
  {path: 'service-details', component: ServiceDetailsComponent},
  {path: 'eclairage', component: BlogComponent},
  {path: 'cables', component: BlogRightSidebarComponent},
  {path: 'prise', component: BlogDetailsComponent},
  {path: 'alimentation', component: PricingComponent},
  {path: 'chauffe', component: RecentProjectComponent},
  {path: 'robinet', component: ErrorComponent},
  {path: 'evier', component: TeamComponent},
  {path: 'robinet-cuisine', component: TeamTwoComponent},
   {path: 'produit', component: ProduitListComponent} ,
   {path: 'produit/new', component: ProduitNewComponent} ,
  {path: 'employer', component: EmployerListComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
