import { DirectivesModule } from '../directives/directives.module';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components/components.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowseComponent } from './browse/browse.component';

@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    DirectivesModule,
    RouterModule.forChild([
      {
        path:'',
        redirectTo:'dynamic-home',
        pathMatch: 'full'
      },{
        path:'dynamic-home',
        component:BrowseComponent,
        data:{
          page:'home'
        }
      },{
        path:'dynamic-pdp',
        component:BrowseComponent,
        data:{
          page:'pdp'
        }
      }
    ])
  ],
  declarations: [BrowseComponent]
})
export class TemplatesModule { }
