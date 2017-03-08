import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

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
  constructor(private http:Http) { }

  setTemplateInCache(page, data){
    this.templateCache[page] = data;
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

}
