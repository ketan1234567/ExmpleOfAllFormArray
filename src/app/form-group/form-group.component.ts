import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {
  formSubmitted=false;
  ngOnInit() {
   
    
  }
  userForm=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.maxLength(10 )]),
    users:new FormArray([
      new FormControl('Mahesh'),
      new FormControl()
    
    ])

  });

get name(){
  return this.userForm.get('name') as FormControl;
}
get users(){
  return this.userForm.get('users') as FormArray;
}



onFormSubmit(){
  console.log(this.userForm.value);
}
deleteUserField(idx:number){
  this.users.removeAt(idx)

}
AddUserField(){
this.users.push(new FormControl());
}
setDefaultValue(){
  this.userForm.patchValue({name:'Mahesh'}) //  we can set  a value a Default like this
}



}


