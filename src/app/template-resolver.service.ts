import { Template, TemplateCacheService } from './template-cache.service';
import { Http } from '@angular/http';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class TemplateResolverService implements Resolve<any>{

  constructor(private router:Router, private http: Http, private templateCacheService: TemplateCacheService) {}
  
  resolve(route:ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> | Template[]{
     var page = 'home';
     //Check if template cache has the template
     var template = this.templateCacheService.getTemplateFromCache(page);
     if(template){
       return template;
     } else {
      return this.templateCacheService.getTemplate(page).then(data => {
        if(data){
          return data
        } else {
          this.router.navigate(['/not-found']);
          return null;
        }
      });
     }
  }

}
