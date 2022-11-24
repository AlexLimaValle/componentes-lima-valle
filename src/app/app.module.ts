import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { AreaComponent } from './area/area.component';


@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    NavMenuComponent,
    AreaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
