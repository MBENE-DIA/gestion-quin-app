import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeOneComponent } from './components/pages/home-one/home-one.component';
import { HomeTwoComponent } from './components/pages/home-two/home-two.component';
import { HomeThreeComponent } from './components/pages/home-three/home-three.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ServiceComponent } from './components/pages/service/service.component';
import { ServiceTwoComponent } from './components/pages/service-two/service-two.component';
import { ServiceThreeComponent } from './components/pages/service-three/service-three.component';
import { ServiceDetailsComponent } from './components/pages/service-details/service-details.component';
import { BlogComponent } from './components/pages/blog/blog.component';
import { BlogRightSidebarComponent } from './components/pages/blog-right-sidebar/blog-right-sidebar.component';
import { BlogDetailsComponent } from './components/pages/blog-details/blog-details.component';
import { PricingComponent } from './components/pages/pricing/pricing.component';
import { RecentProjectComponent } from './components/pages/recent-project/recent-project.component';
import { ErrorComponent } from './components/pages/error/error.component';
import { TeamComponent } from './components/pages/team/team.component';
import { TeamTwoComponent } from './components/pages/team-two/team-two.component';
import { ContactComponent } from './components/pages/contact/contact.component';

import { employerRoutes } from './components/employer/employer.router';
import { produitRoutes } from './components/admin/produit/produit.route';
import { LoginComponent } from './components/connexion/login/login.component';
import { RegisterComponent } from './components/connexion/register/register.component';

const routes: Routes = [
  {path: 'contact', component: ContactComponent},
 { path: 'acceuil', redirectTo: 'acceuil', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
   { path: 'inscription', component: RegisterComponent },
    
    {
        path: 'admin',
        loadChildren: () =>
          import('./components/admin/adminis.module').then(
            (m) => m.AdminisModule
          ),
        
        
      },
      {
        path: 'client',
        loadChildren: () =>
          import('./components/client/client.module').then(
            (m) => m.ClientModule
          ),
          
      },
      {
        path: 'employer',
        loadChildren: () =>
          import('./components/employer/employer-module.module').then(
            (m) => m.EmployerModuleModule
          ),
         
      },

 
   
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }