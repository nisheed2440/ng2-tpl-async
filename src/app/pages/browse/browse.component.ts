import { TemplateCacheService } from '../../template-cache.service';
import { ComponentRegistry } from '../../app.components.registry';
import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'bjs-router',
  template: `<router-outlet></router-outlet>`
})
export class RouterComponent {}

@Component({
  selector: 'bjs-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.scss']
})
export class BrowseComponent implements OnInit {
  @ViewChild('container',{read:ViewContainerRef}) container : ViewContainerRef;
  constructor(private resolver: ComponentFactoryResolver, private templateCacheService: TemplateCacheService) { }

  ngOnInit() {
    var template = this.templateCacheService.getTemplateFromCache('home');
    for(var i = 0; i < template.length; i++){
      var component = template[i];
       if(component.name in ComponentRegistry){
        var factory  = this.resolver.resolveComponentFactory(RouterComponent);
        this.container.createComponent(factory);
       }
    }
  }

}
