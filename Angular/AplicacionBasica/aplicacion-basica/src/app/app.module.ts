import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {MenuComponent} from "./components/menu.component";
import {AccordionComponent} from "./components/accordion.component";
import {CarouselComponent} from "./components/carousel.component";

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AccordionComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
