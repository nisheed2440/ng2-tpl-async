import { ComponentRegistry } from './app.components.registry';
import { Http } from '@angular/http';
import { ComponentFactoryResolver, Injectable, ViewContainerRef } from '@angular/core';

export class Template{
  constructor(
    public name:string,
    public data:{}, 
    public children:Template[]
  ){}
}


@Injectable()
export class TemplateCacheService {
  private templateCache: any = {};
  constructor(
    private http:Http, 
    private resolver: ComponentFactoryResolver
  ) { }

  setTemplateInCache(page, data){
    this.templateCache[page] = data;
    console.log(this.templateCache);
    return this.getTemplateFromCache(page);
  }
  
  getTemplateFromCache(page:string){
    return this.templateCache[page];
  }
  
  getTemplate(page:string):Promise<any> {
     const url = `http://localhost:3000/api/${page}`;
     return this.http.get(url).toPromise().then((response) => {
       return this.setTemplateInCache(page,response.json()[0].view);
     });
  }

  createTemplate(vcf:ViewContainerRef, componentObj:Template){
    if(componentObj.name in ComponentRegistry){
      var factory  = this.resolver.resolveComponentFactory(ComponentRegistry[componentObj.name]);
      var component = vcf.createComponent(factory);
      component.instance['data'] = componentObj.data;
      component.instance['children'] = componentObj.children;
      console.log(component.instance);
    } else {
      console.info(`Unknown ${componentObj.name} component`);
    }
  }

}
