import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {AbstractControl, ValidatorFn} from '@angular/forms';
import { User } from '../user';
import { Observable } from 'rxjs';
import { pwdMatchUsernameValidator } from '../custom-validators.ts/pwd-match-username-validator';
import { confirmPasswordValidator } from '../custom-validators.ts/confirm-password-validator';
//import { confirmPasswordValidator } from '../custom-validators.ts/confirm-password-validator';





@Component({
  selector: 'app-value-changes-status-changes',
  templateUrl: './value-changes-status-changes.component.html',
  styleUrls: ['./value-changes-status-changes.component.css']
})
export class ValueChangesStatusChangesComponent implements OnInit {
  userForm:any= FormGroup; 
  hidenotification:any;
  

  constructor(private formBuilder:FormBuilder) {
  }
  ngOnInit() {
    this.userForm = this.formBuilder.group({
      username: ['', [ Validators.required ]],
      password: ['', [ Validators.required ]],      
      confirmPassword: ['', [ Validators.required ]],          
      notificationMode: ['', [ Validators.required ]],       
      email: '',
      mobileNumber: '', 
      favoriteLocations: this.formBuilder.array([
        this.formBuilder.control('', [Validators.required]),
        this.formBuilder.control('', [Validators.required])
      ])
    });
    this.handleFormChanges();
  }
  handleFormChanges() {
    this.userForm.valueChanges.subscribe((user: User) => {
      console.log('----Form Data---');
      console.log('username: '+ user.username);
      console.log('password: '+ user.password);
      console.log('notificationMode: '+ user.notificationMode);
      console.log('email: '+ user.email);        
      console.log('mobileNumber: '+ user.mobileNumber);                
      console.log('favoriteLocations: '+ user.favoriteLocations); 
      console.log('----End Form Data---');           
    });
    this.userForm.statusChanges.subscribe((status:string) => {
      console.log('Form validation status: '+ status);
    });
    this.username.statusChanges.subscribe(
      (      status: any) => {
         console.log('Username validation status: '+ status);
      }
    );      
    this.username.valueChanges.subscribe(
      (uname:string) => {
        this.password.setValidators([Validators.required, pwdMatchUsernameValidator(uname)]);
        this.password.updateValueAndValidity();
      }
    );
    this.password.valueChanges.subscribe(
      (      pwd: any) => {
        const uname = this.username.value;
        this.password.setValidators([Validators.required, pwdMatchUsernameValidator(uname)]);

        this.confirmPassword.setValidators([Validators.required, confirmPasswordValidator(pwd)]);        
        this.confirmPassword.updateValueAndValidity();
      }
    );    
    this.confirmPassword.valueChanges.subscribe(
      () => {
        const pwd = this.password.value;
        this.confirmPassword.setValidators([Validators.required, confirmPasswordValidator(pwd)]);
      }
    );     
    this.notificationMode.valueChanges.subscribe(
      (      mode: string) => {
        console.log('NotificationMode Mode:'+ mode);
        if (mode==='email') {
           this.email.setValidators([Validators.required, Validators.email]);
           this.hidenotification=mode;
           console.log(     this.hidenotification=mode)
       
           this.mobileNumber.clearValidators();
  
        } else if (mode === 'mobile') {
           this.mobileNumber.setValidators([Validators.required]);
           this.hidenotification=mode;
         
           this.email.clearValidators();
        } else if (mode==='both') {
          this.hidenotification=mode;
          this.email.setValidators([Validators.required, Validators.email]);
          this.mobileNumber.setValidators([Validators.required]);   

        }
        this.email.updateValueAndValidity();
        this.mobileNumber.updateValueAndValidity();
      }
    ); 
    this.favoriteLocations.valueChanges.subscribe(
      (      data:string) => {
        console.log('favoriteLocations: ' + data);
      }
    );  
    this.favoriteLocations.statusChanges.subscribe(
      (      status: string) => {
        console.log('favoriteLocations validation status: ' + status);
      }
    );      
  }
  onFormSubmit() {
    console.log(this.userForm.value);

  }
  get username() {
    return this.userForm.get('username');
  }
  get password() {
    return this.userForm.get('password');
  }  
  get confirmPassword() {
    return this.userForm.get('confirmPassword');
  }   
  get email() {
    return this.userForm.get('email');
  }  
  get mobileNumber() {
    return this.userForm.get('mobileNumber');
  }   
  get notificationMode() {
    
    return this.userForm.get('notificationMode');
  }      
  get favoriteLocations() {
    return this.userForm.get('favoriteLocations');
  }  



}
