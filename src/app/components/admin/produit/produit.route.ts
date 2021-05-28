
import { Route } from '@angular/router';
import { ProduitDetailComponent } from './produit-detail/produit-detail.component';
import { ProduitEditComponent } from './produit-edit/produit-edit.component';
import { ProduitListComponent } from './produit-list/produit-list.component';
import { ProduitNewComponent } from './produit-new/produit-new.component';

 const produitRoutes: Route = {
    path: 'produit',
    children: [
        { path: '', component: ProduitListComponent },
        { path: 'new', component: ProduitNewComponent },
        { path: ':id', component: ProduitDetailComponent},
        { path: 'produit/:id', component: ProduitEditComponent}
       


    ]
};


export { produitRoutes };
