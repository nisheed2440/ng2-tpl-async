import { BrowseModule } from './browse/browse.module';
import { OrganismsModule } from '../organisms/organisms.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    OrganismsModule,
    BrowseModule
  ],
  declarations: []
})
export class PagesModule { }
