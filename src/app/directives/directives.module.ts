import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TreeRootDirective } from './tree-root.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TreeRootDirective],
  exports:[TreeRootDirective]
})
export class DirectivesModule { }
