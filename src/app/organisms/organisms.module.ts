import { RouterModule } from '@angular/router';
import { MoleculesModule } from '../molecules/molecules.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterComponent } from './router/router.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MoleculesModule
  ],
  declarations: [HeaderComponent, FooterComponent, RouterComponent],
  exports:[HeaderComponent, FooterComponent, RouterComponent],
  entryComponents:[HeaderComponent, FooterComponent, RouterComponent]
})
export class OrganismsModule { }
