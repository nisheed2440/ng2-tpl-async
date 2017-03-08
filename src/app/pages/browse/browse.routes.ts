import { TemplateResolverService } from '../../template-resolver.service';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowseComponent } from './browse.component';

const BROWSE_ROUTES:Routes = [
    { 
        path:'browse', 
        component:BrowseComponent, 
        children:[
            { path:'home', component:HomeComponent, resolve:{template:TemplateResolverService} },
            { path:'product', children: [
                { path: ':id', component:ProductDetailsComponent },
                { path:'', pathMatch:'full', redirectTo:'/not-found' },
                { path:'**', redirectTo:'/not-found' }
            ]},
            { path:'', pathMatch:'full', redirectTo:'home' },
            { path:'**', redirectTo:'/not-found' }
        ],
        resolve:{
            template: TemplateResolverService
        }
    },
    { path:'not-found', component:NotFoundComponent},
    { path:'', pathMatch:'full', redirectTo:'browse'},
    { path:'**', redirectTo:'not-found' }
];

@NgModule({
    imports: [
        RouterModule.forChild(BROWSE_ROUTES)
    ],
    exports: [
        RouterModule
    ],
    declarations:[]
})
export class BrowseRoutesModule { }