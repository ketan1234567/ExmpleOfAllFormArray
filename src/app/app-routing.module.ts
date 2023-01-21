import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { DisableAngularFormControlComponent } from './disable-angular-form-control/disable-angular-form-control.component';
import { FocusBlurEventComponent } from './focus-blur-event/focus-blur-event.component';
import { AddControlandremoveControlComponent } from './add-controlandremove-control/add-controlandremove-control.component';
import { FileUploadServiceService } from './services/file-upload-service.service';
import { AngularFileUploadComponent } from './angular-file-upload/angular-file-upload.component';
import { ReactiveOptionsSelectedDynamicallyComponent } from './reactive-options-selected-dynamically/reactive-options-selected-dynamically.component';
import { ValueChangesStatusChangesComponent } from './value-changes-status-changes/value-changes-status-changes.component';


const routes: Routes = [
  {
    path:"user",
    component:UsersComponent
  },
  {
    path:"Form-Array",
    component:FormArrayComponent
  },
  {
    path:"disable-angular",
    component:DisableAngularFormControlComponent
  },
  {
    path:"focus-blur",
    component:FocusBlurEventComponent
  },
  {
    path:"add-control",
    component:AddControlandremoveControlComponent
  },
  {
    path:"upload-Content",
    component:AngularFileUploadComponent
  },
  {
    path:"ReactiveOptions",
    component:ReactiveOptionsSelectedDynamicallyComponent
  },
  {
    path:"ValueChanges",
    component:ValueChangesStatusChangesComponent
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
