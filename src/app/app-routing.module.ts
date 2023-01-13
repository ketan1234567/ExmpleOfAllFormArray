import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { FormArrayComponent } from './form-array/form-array.component';
import { DisableAngularFormControlComponent } from './disable-angular-form-control/disable-angular-form-control.component';
import { FocusBlurEventComponent } from './focus-blur-event/focus-blur-event.component';


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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
