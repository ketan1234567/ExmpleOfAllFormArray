import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    console.log("This is ketan")
  this.userForm.get('name')?.valueChanges.subscribe(data=>this.usrNameChanges=data);
  this.userForm.get('name')?.statusChanges.subscribe(data=>this.usrNameStatus=data);
  
  }
  formSubmitted=false;
  usrNameChanges:any;
  usrNameStatus:any;
  profiles=[
    {name:'Developer',shortName:'dev'},
    {name:'Manager',shortName:'man'},
    {name:'director',shortName:'dir'} 
  
  
  ];

  userForm=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.maxLength(10 )]),
    age:new FormControl('',[Validators.required]),
    gender:new FormControl('male'),
    profile:new FormControl(this.profiles[1].shortName),
    
    users:new FormArray([
      new FormControl('Mahesh'),
      new FormControl()
    ]),
    address:new FormGroup({
      houseNumber:new FormControl('',Validators.required),
      city:new FormControl('Noida'),
      country:new FormControl({value:'India',disabled:true})
  })
  });

get name(){
  return this.userForm.get('name') as FormControl;
}
get users(){
  return this.userForm.get('users') as FormArray;
}
setAge(){
  this.userForm.get('age')?.setValue('20');
  }
setCountry(){
this.userForm.get('address')?.get('country')?.setValue('India');
}

logodata(){
  console.log('Name'+this.userForm.get('name')?.value)
  console.log('profile'+this.userForm.get('profile')?.value)
  console.log('city'+ this.userForm.get('city')?.value);
  console.log('age'+ this.userForm.get('age')?.value);

  console.log('country'+ this.userForm.get('country')?.value);
  //iterate of FormArray
  for(let i=0; i<this.users.length; i++){
    console.log(this.users.at(i).value)
  }
  //address
  let addressFG:any=this.userForm.get('address');
  console.log('HouseNumber'+ addressFG.get('houseNumber')?.value);
  console.log('city'+ addressFG.get('city')?.value);
  console.log('country'+ addressFG.get('country')?.value);



  // Gives complete address
  console.log(addressFG.value); 
  //Checks address validation	 
console.log(addressFG.valid); 
  // Gives complete FormArray data	 
console.log(this.users.value); 
  //Checks FormArray validation	 	
console.log(this.users.valid); 	 
  // Gives Complete form data	 	 
console.log(this.userForm.value); 
  // checks Complete form validation	 	 
console.log(this.userForm.valid);	 

}
onFormSubmit(){
  this.formSubmitted=true;

  if(this.userForm.valid){
    this.logodata();
    this.ResetForm();
  }else{
    this.formSubmitted=false;
  }
}
deleteUserField(idx:number){
  this.users.removeAt(idx)

}

AddUserField(){
this.users.push(new FormControl());
}
setDefaultValue(){
  this.userForm.patchValue({name:'Mahesh',gender:'male',profile:this.profiles[2].shortName,
  address:{city:'Noiad',country:'India'}}) //  we can set  a value a Default like this
}
ResetForm(){
  this.userForm.reset();
}



}


