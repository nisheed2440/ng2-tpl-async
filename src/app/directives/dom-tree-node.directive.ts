import { ComponentsRegistry } from '../components/components.registry';
import { ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[bjsDomTreeNode]'
})
export class DomTreeNodeDirective implements OnInit{
  @Input() bjsDomTreeNode:any[] = [];
  constructor(
    private vcf: ViewContainerRef,
    private resolver: ComponentFactoryResolver
  ) { }
  ngOnInit(){
    for(var i = 0; i < this.bjsDomTreeNode.length; i++){
      this.createRecurrsiveDomTree(this.vcf,this.bjsDomTreeNode[i]);
    }
  }
  createRecurrsiveDomTree(vcf: ViewContainerRef, componentObj:any){
      var componentName = componentObj.component;
      var componentData = componentObj.data;
      if(componentName in ComponentsRegistry){
        var factory = this.resolver.resolveComponentFactory(ComponentsRegistry[componentName]);
        var componentRef = vcf.createComponent(factory, vcf.length, vcf.injector);
        componentRef.instance['data'] = componentData;
      } else {
        console.info(`Unknown ${componentName} component`);
      }
    }

}
