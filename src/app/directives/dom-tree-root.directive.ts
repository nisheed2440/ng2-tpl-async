import { Http } from '@angular/http';
import { componentModuleUrl } from '@angular/compiler';
import { ComponentsRegistry } from '../components/components.registry';
import { Component, ComponentFactoryResolver, Directive, Input, OnInit, ViewContainerRef } from '@angular/core';


@Directive({
  selector: '[bjsDomTreeRoot]'
})
export class DomTreeRootDirective implements OnInit{
  @Input() bjsDomTreeRoot?:string = '';
  constructor(
    private http: Http,
    private vcf: ViewContainerRef,
    private resolver: ComponentFactoryResolver
  ) {}
  ngOnInit(){
    
     const url = `http://localhost:3000/api/${this.bjsDomTreeRoot}`;
     this.http.get(url).subscribe((dataObj) => {
       var viewData = dataObj.json()[0].view;
        this.vcf.clear();
        for(var i = 0; i < viewData.length; i++){
          this.createRecurrsiveDomTree(this.vcf,viewData[i]);
        }
     });
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
