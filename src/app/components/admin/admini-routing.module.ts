import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeThreeComponent } from '../pages/home-three/home-three.component';
import { HomeTwoComponent } from '../pages/home-two/home-two.component';
import { ServiceComponent } from '../pages/service/service.component';
import { LoginComponent } from '../connexion/login/login.component';
import { RegisterComponent } from '../connexion/register/register.component';
import { BlogDetailsComponent } from '../pages/blog-details/blog-details.component';
import { BlogRightSidebarComponent } from '../pages/blog-right-sidebar/blog-right-sidebar.component';
import { BlogComponent } from '../pages/blog/blog.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { ErrorComponent } from '../pages/error/error.component';
import { PricingComponent } from '../pages/pricing/pricing.component';
import { RecentProjectComponent } from '../pages/recent-project/recent-project.component';
import { ServiceDetailsComponent } from '../pages/service-details/service-details.component';
import { ServiceThreeComponent } from '../pages/service-three/service-three.component';
import { ServiceTwoComponent } from '../pages/service-two/service-two.component';
import { TeamTwoComponent } from '../pages/team-two/team-two.component';
import { TeamComponent } from '../pages/team/team.component';
import { produitRoutes } from './produit/produit.route';
import { EmployerListComponent } from './employer/employer-list/employer-list.component';
import { LivraisonListComponent } from './livraison/livraison-list/livraison-list.component';
const routes: Routes = [
//{ path: '', redirectTo: 'accueil', pathMatch: 'full' },
{ path: '', redirectTo: 'acceuil', pathMatch: 'full' },
{path: 'acceuil', component: HomeThreeComponent},
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
    produitRoutes,
    {path: 'employer', component: EmployerListComponent},
    {path: 'livraision', component: LivraisonListComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class AdminiRoutingModule { }
