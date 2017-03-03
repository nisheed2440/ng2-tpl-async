import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomTreeRootDirective } from './dom-tree-root.directive';
import { DomTreeNodeDirective } from './dom-tree-node.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DomTreeRootDirective, DomTreeNodeDirective],
  exports:[DomTreeRootDirective,DomTreeNodeDirective]
})
export class DirectivesModule { }
