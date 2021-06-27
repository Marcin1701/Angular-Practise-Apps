import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { StyleScopeComponent } from './style-scope/style-scope.component';
import { InnerAComponent } from './style-scope/inner-a/inner-a.component';
import { EncapsulationComponent } from './encapsulation/encapsulation.component';
import { InnerBComponent } from './encapsulation/inner-b/inner-b.component';
import { HostComponent } from './host/host.component';
import { InnerCComponent } from './host/inner-c/inner-c.component';

const routes: Routes = [
  {
    path: 'style-scope',
    component: StyleScopeComponent,
  },
  {
    path: 'encapsulation',
    component: EncapsulationComponent,
  },
  {
    path: 'host',
    component: HostComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    StyleScopeComponent,
    InnerAComponent,
    EncapsulationComponent,
    InnerBComponent,
    HostComponent,
    InnerCComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
