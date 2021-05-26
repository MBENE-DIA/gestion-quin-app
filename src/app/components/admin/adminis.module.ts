import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminiRoutingModule } from './admini-routing.module';
import { ClientListComponent } from './client/client-list/client-list.component';
import { CommandeListComponent } from './commande/commande-list/commande-list.component';
import { CommandeDetailComponent } from './commande/commande-detail/commande-detail.component';
import { EmployerListComponent } from './employer/employer-list/employer-list.component';
import { EmployerNewComponent } from './employer/employer-new/employer-new.component';
import { LivraisonListComponent } from './livraison/livraison-list/livraison-list.component';
import { ProduitDetailComponent } from './produit/produit-detail/produit-detail.component';
import { ProduitEditComponent } from './produit/produit-edit/produit-edit.component';
import { ProduitListComponent } from './produit/produit-list/produit-list.component';
import { ProduitNewComponent } from './produit/produit-new/produit-new.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from '../pages/about/about.component';
import { BlogDetailsComponent } from '../pages/blog-details/blog-details.component';
import { BlogRightSidebarComponent } from '../pages/blog-right-sidebar/blog-right-sidebar.component';
import { BlogComponent } from '../pages/blog/blog.component';
import { ErrorComponent } from '../pages/error/error.component';
import { HomeThreeComponent } from '../pages/home-three/home-three.component';
import { PricingComponent } from '../pages/pricing/pricing.component';
import { RecentProjectComponent } from '../pages/recent-project/recent-project.component';
import { ServiceDetailsComponent } from '../pages/service-details/service-details.component';
import { ServiceThreeComponent } from '../pages/service-three/service-three.component';
import { ServiceTwoComponent } from '../pages/service-two/service-two.component';
import { ServiceComponent } from '../pages/service/service.component';
import { TeamTwoComponent } from '../pages/team-two/team-two.component';
import { TeamComponent } from '../pages/team/team.component';




@NgModule({
  declarations: [
 ClientListComponent,
 CommandeListComponent,
 CommandeDetailComponent,
 EmployerListComponent,
 EmployerNewComponent,
 LivraisonListComponent,
 ProduitDetailComponent,
 ProduitEditComponent,
 ProduitListComponent,
 ProduitNewComponent,
 UserListComponent,
 AboutComponent,
 HomeThreeComponent,
 ServiceComponent,
 ServiceTwoComponent,
 ServiceThreeComponent,
 ServiceDetailsComponent,
 BlogComponent,
 BlogRightSidebarComponent,
 BlogDetailsComponent,
 PricingComponent,
 RecentProjectComponent,
 ErrorComponent,
 TeamComponent,
 TeamTwoComponent,

 
    
  ],
  imports: [
    CommonModule,
    AdminiRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ]
})
export class AdminisModule { }
