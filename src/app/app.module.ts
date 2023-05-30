import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { HttpClientModule, HttpClient} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { DirectivesModule } from './core/directive/directives.module';
import { AgmCoreModule } from '@agm/core';
/* Routing */
import { AppRoutingModule } from './app-routing.module';

/* Service */
import { ChkService } from './service/chk.service';

/* components */
import { AppComponent } from './app.component';
import { MainComponent }   from './main/main.component';
import { HomeComponent } from './home/home.component';
import { PricingComponent } from './cargaDoc/cargaDoc.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

import { MenuItems } from './core/menu/menu-items/menu-items';
import { MenuToggleModule } from './core/menu-toggle.module';
import { PageTitleService } from './core/page-title/page-title.service';
import { WidgetsModule } from './widgets/widgets.module';
import { FeaturesComponent } from './features/features.component';
import { AboutComponent } from './about/about.component';
import { SearchComponent } from './search/search.component';
import { SupportComponent } from './support/support.component';
import { Footer2Component } from './footer2/footer2.component';
import { sidebarWidgetsComponent } from './sidebarWidgets/sidebarWidgets.component';
import { CommonModule } from '@angular/common';

import { uploadService } from './server.js';

@NgModule({
   declarations: [
      AppComponent,
      MainComponent,
      HomeComponent,
      PricingComponent,
      ContactComponent,
      FooterComponent,
      HeaderComponent,
      MenuComponent,
      FeaturesComponent,
      AboutComponent,
      SearchComponent,
      SupportComponent,
      Footer2Component,
      sidebarWidgetsComponent,
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      CommonModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule,
      AppRoutingModule,
      WidgetsModule,
      MenuToggleModule,
      DirectivesModule,
      SlickCarouselModule,
      AgmCoreModule.forRoot({
         apiKey: 'AIzaSyD4y2luRxfM8Q8yKHSLdOOdNpkiilVhD9k'
      })
   ],
   providers: [
      MenuItems,
      PageTitleService,
      ChkService,
      //uploadService
   ],
   bootstrap: [AppComponent]
})
export class AppModule { }
