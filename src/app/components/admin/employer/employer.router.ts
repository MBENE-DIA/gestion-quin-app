import { Route } from '@angular/router';
import { EmployerListComponent } from './employer-list/employer-list.component';
import { EmployerNewComponent } from './employer-new/employer-new.component';


const employerRoutes: Route = {
    path: 'employer',
    children: [
        { path: '', component: EmployerListComponent},
        { path: 'new', component: EmployerNewComponent},
        
    ]
    
};

export { employerRoutes };
