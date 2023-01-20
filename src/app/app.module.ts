import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormArrayComponent } from './form-array/form-array.component';
import { DisableAngularFormControlComponent } from './disable-angular-form-control/disable-angular-form-control.component';
import { FocusBlurEventComponent } from './focus-blur-event/focus-blur-event.component';
import { AddControlandremoveControlComponent } from './add-controlandremove-control/add-controlandremove-control.component';
import { AngularFileUploadComponent } from './angular-file-upload/angular-file-upload.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ReactiveOptionsSelectedDynamicallyComponent } from './reactive-options-selected-dynamically/reactive-options-selected-dynamically.component';
import { ValueChangesStatusChangesComponent } from './value-changes-status-changes/value-changes-status-changes.component';


@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    FormArrayComponent,
    DisableAngularFormControlComponent,
    FocusBlurEventComponent,
    AddControlandremoveControlComponent,
    AngularFileUploadComponent,
    ReactiveOptionsSelectedDynamicallyComponent,
    ValueChangesStatusChangesComponent
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
