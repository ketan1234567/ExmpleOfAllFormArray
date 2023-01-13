import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-disable-angular-form-control',
  templateUrl: './disable-angular-form-control.component.html',
  styleUrls: ['./disable-angular-form-control.component.css']
})
export class DisableAngularFormControlComponent implements OnInit {

  cityName= new  FormControl();

  cityNameDisable(){
    this.cityName.disable();
  }
  cityNameEnable(){
    this.cityName.enable();
  }
  
  cnAction="enable";
  userForm:any;
  ageAction="enable";

  constructor(private formbuilder:FormBuilder){

  }
  ngOnInit(){
    this.userForm=this.formbuilder.group({
      name:[{value:"ketan",disabled:true},[Validators.required]],
      age:''
    });
    
  }
  onFormSubmit(){
    console.log(this.userForm.value);
    this.userForm.reset();
  }

}
