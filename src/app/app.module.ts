import { TemplateCacheService } from './template-cache.service';
import { TemplateResolverService } from './template-resolver.service';
import 'rxjs/add/operator/toPromise';
import { PagesModule } from './pages/pages.module';
import { AppRoutesModule } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    PagesModule,
    AppRoutesModule
  ],
  providers: [TemplateResolverService, TemplateCacheService],
  bootstrap: [AppComponent]
})
export class AppModule { }
