import { BrowseRoutesModule } from './browse.routes';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowseComponent, RouterComponent } from './browse.component';

@NgModule({
  imports: [
    CommonModule,
    BrowseRoutesModule
  ],
  declarations: [HomeComponent, ProductDetailsComponent, NotFoundComponent, BrowseComponent, RouterComponent],
  entryComponents:[RouterComponent],
  exports:[RouterComponent]
})
export class BrowseModule { }
