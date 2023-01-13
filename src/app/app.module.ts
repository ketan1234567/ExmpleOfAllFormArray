import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormArrayComponent } from './form-array/form-array.component';
import { DisableAngularFormControlComponent } from './disable-angular-form-control/disable-angular-form-control.component';
import { FocusBlurEventComponent } from './focus-blur-event/focus-blur-event.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    FormArrayComponent,
    DisableAngularFormControlComponent,
    FocusBlurEventComponent
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
