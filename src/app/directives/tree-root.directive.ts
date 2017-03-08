import { TemplateCacheService } from '../template-cache.service';
import { Directive, Input, OnInit, ViewContainerRef } from '@angular/core';


@Directive({
  selector: '[treeRoot]'
})
export class TreeRootDirective implements OnInit{
  @Input() treeRoot:any[] = [];
  constructor(
    private vcf: ViewContainerRef,
    private templateCacheService: TemplateCacheService
  ) { }
  ngOnInit(){
    for(var i = 0; i < this.treeRoot.length; i++){
      this.templateCacheService.createTemplate(this.vcf,this.treeRoot[i]);
    }
  }
}
