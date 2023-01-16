import { Component, OnInit } from '@angular/core';
import { FormControl,FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-focus-blur-event',
  templateUrl: './focus-blur-event.component.html',
  styleUrls: ['./focus-blur-event.component.css']
})
export class FocusBlurEventComponent implements OnInit  {
  userForm: any
  myStyle1:any
  myStyle2:any
  myStyle3:any
  constructor(private formBuilder:FormBuilder) {
  }
  ngOnInit(){
    this.userForm=this.formBuilder.group({
      name:['',[Validators.required]],
      age:''
    });
   
  }

  countryName= new  FormControl();
  name= new  FormControl();
  onFocusCountry() {
    this.myStyle1={
      'background-color' : "#d1152c"
    }
  } 
  onFocusName(){
    this.myStyle2={
      'background-color':"#eebd71"
    }
  }
  onBlurName(){
    this.myStyle2=null;
  }
 onFocusAge(){
    this.myStyle3={
      'background-color':"#eebd71"
    }
  }

 onBlurAge(){
    this.myStyle3=null;
  }
  onFromSubmit(){
  console.log(this.userForm.value)
  }

}
