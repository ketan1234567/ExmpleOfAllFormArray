import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-control-all',
  templateUrl: './form-control-all.component.html',
  styleUrls: ['./form-control-all.component.css']
})
export class FormControlAllComponent {
  name=new FormControl('',[Validators.required,Validators.minLength(15)])
  age=new FormControl(20,[Validators.required]);
  city=new FormControl();
  country=new FormControl({value:'India',disabled:true})
  married=new FormControl(true);


  setNameValue(){
  this.name.setValue('Ketan deshmukh');
  console.log('Name'+this.name.value)
  console.log('validation status'+this.name.status);
  }
  setResetName(){
    this.name.reset();
  }
  changeValue(){
    console.log(this.married.value);
    this.married=new FormControl(!this.married.value)
  }
userForm=new FormGroup({
  name:new FormControl('ketan',[Validators.required]),
  age:new FormControl(20,[Validators.required]),
  city:new FormControl('',[Validators.required]),
  country:new FormControl('',[Validators.required]),
  users:new FormArray([
    new FormControl('Mahesh'),
    new FormControl('Krishna'),
   

  ])
});
get users(){
  return this.userForm.get('users') as FormArray;
}

resetForm(){
  this.userForm.reset();
}

deleteUserField(idx:number){
  this.users.removeAt(idx);

}
AddUserField(){
  this.users.push(new FormControl())
}
onFormSubmit(){
  console.log('Name:'+this.userForm.get('name')?.value);
  console.log('age:'+this.userForm.get('age')?.value);
  console.log('country:'+this.userForm.get('country')?.value);
  console.log('city:'+this.userForm.get('city')?.value);
  console.log('Users:'+this.userForm.get('users')?.value);

}

}
