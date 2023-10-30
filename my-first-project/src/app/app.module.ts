import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormUserComponent } from './components/form-user/form-user.component';
import { FormsModule } from '@angular/forms';
import { ConditionalComponent } from './components/conditional/conditional.component';
import { RepertoryComponent } from './components/repertory/repertory.component';

@NgModule({
  declarations: [
    AppComponent,
    FormUserComponent,
    ConditionalComponent,
    RepertoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
