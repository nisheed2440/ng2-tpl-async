import { DirectivesModule } from '../directives/directives.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { FooterComponent } from './footer/footer.component';
import { ColumnComponent } from './column/column.component';
import { RowComponent } from './row/row.component';
import { ProductTileComponent } from './product-tile/product-tile.component';
import { MainComponent } from './main/main.component';
import { CalloutComponent } from './callout/callout.component';


const COMPONENTS_ARRAY = [
  HeaderComponent,
  FooterComponent,
  TopNavComponent,
  ColumnComponent,
  RowComponent,
  ProductTileComponent,
  MainComponent,
  CalloutComponent
];


@NgModule({
  imports: [
    CommonModule,
    DirectivesModule
  ],
  declarations: [...COMPONENTS_ARRAY],
  exports:[...COMPONENTS_ARRAY],
  entryComponents: [...COMPONENTS_ARRAY]
})
export class ComponentsModule { }