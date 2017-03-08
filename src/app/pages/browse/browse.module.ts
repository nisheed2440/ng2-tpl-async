import { DirectivesModule } from '../../directives/directives.module';
import { BrowseRoutesModule } from './browse.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowseComponent } from './browse.component';

@NgModule({
  imports: [
    CommonModule,
    BrowseRoutesModule,
    DirectivesModule
  ],
  declarations: [HomeComponent, ProductDetailsComponent, NotFoundComponent, BrowseComponent],
  exports:[]
})
export class BrowseModule { }
