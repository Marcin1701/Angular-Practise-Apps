import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from './navbar/navbar.component';
import { RankingComponent } from './ranking/ranking.component';
import { FormComponent } from './form/form.component';
import { ButtonComponent } from './button/button.component';
import { ButtonVotesComponent } from './button-votes/button-votes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RankingComponent,
    FormComponent,
    ButtonComponent,
    ButtonVotesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
