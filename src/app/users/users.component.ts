import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  isValidFormSubmitted=null;
  userForm:any

  constructor(private formbuilder:FormBuilder){

  }
  ngOnInit()  {
    this.userForm=this.formbuilder.group({
      userName:['',[Validators.required,Validators.maxLength(5)]],
      age:'',
      gender:['',Validators.required],
      isMarried:false,
      tc:['',Validators.requiredTrue]
    })
   
  }
  get userName(){
    return this.userForm.get('userName');
  }
get gender(){
  return this.userForm.get('gender')
}
get tc(){
  return this.userForm.get('tc');
}

setUserValues(){
    this.userForm.setValue({
      userName:'mahesh',
      age:20,
      gender:'male',
      isMarried:true,
      tc:true
  

    });

  }
  setPatchValues(){
    this.userForm.patchValue({
      userName: 'Mahesh',
			gender: 'male',
			tc: true,
      xyz:'anil'
    })

  }
  onFormSubmit(){
    console.log(this.userForm.value);

  }
} 

