import { Template, TemplateCacheService } from './template-cache.service';
import { Http } from '@angular/http';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, Resolve } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class TemplateResolverService implements Resolve<any>{

  constructor(private router:Router, private http: Http, private templateCacheService: TemplateCacheService) {}

  redirectNotFound(page:string):any{
    console.log(`Template for ${page} page not found!!`);
    this.router.navigate(['/not-found']);
    return null;
  }
  
  resolve(route:ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> | Template[]{
     var page = route.data['page'];
     if(page){
      //Check template cache
      var templateData = this.templateCacheService.getTemplateFromCache(page);
      if(templateData){
        return templateData;
      }
      //Else get template data from backend
      return this.templateCacheService.getTemplate(page).then(templateData => {
        if(templateData){
          return templateData
        } else {
          //Redirect to not found
          return this.redirectNotFound(page);
        }
      }).catch((error) => {
        //Redirect to not found
        this.redirectNotFound(page);
      });
     } else {
       console.log(`Page name = ${page}`);
     }
  }

}
