import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule }   from '@angular/router';

import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
    { path: '', redirectTo: 'page1', pathMatch: 'full' },
    { path: 'page1', component: Page1Component },
    { path: 'page2', component: Page2Component }
  ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
