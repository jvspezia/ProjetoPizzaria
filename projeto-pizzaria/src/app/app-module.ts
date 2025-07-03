import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { Pizza } from './component/pizza/pizza';
import { App } from './app';
import { PizzaInterface } from './pizza-interface/pizza-interface';
import { ListaPizzas } from './conponent/lista-pizzas/lista-pizzas';

@NgModule({
  declarations: [
    App,
    Pizza,
    PizzaInterface,
    ListaPizzas
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
