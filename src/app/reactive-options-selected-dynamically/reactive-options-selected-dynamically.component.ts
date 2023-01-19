import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Profile } from '../domain/profile';
import { Technology } from '../domain/technology';

import { User } from '../domain/user';
import { UserService } from '../services/user.service';



@Component({
  selector: 'app-reactive-options-selected-dynamically',
  templateUrl: './reactive-options-selected-dynamically.component.html',
  styleUrls: ['./reactive-options-selected-dynamically.component.css']
})
export class ReactiveOptionsSelectedDynamicallyComponent implements OnInit {
  isValidFormSubmitted = false;
	allProfiles:Profile[]=[];
	allTechnologies:Technology[]=[];
	userForm:any= FormGroup;

  constructor(private formbuilder:FormBuilder,private userServices:UserService){

  }
  ngOnInit():void {
    this.userForm=this.formbuilder.group({
      profile:[null,[Validators.required]],
      userName:['',[Validators.required]],
      technologies:[null,[Validators.required]]
    });
    this.allProfiles=this.userServices.getProfiles();
    this.allTechnologies=this.userServices.getTechnologies();
    
   
  }
  get profile() {
		return this.userForm.get('profile');
	}
	get userName() {
		return this.userForm.get('userName');
	}
	get technologies() {
		return this.userForm.get('technologies');
	}

  setDefaultValues(){
    let user =new User();
    user.userName="ketan deshmukh";
    user.profile=this.allProfiles[2];
    user.technologies=[
      this.allTechnologies[1],
      this.allTechnologies[3]
    ];
    this.userForm.setValue(user);

  }
  onProfileChange() {
		let profile: Profile = this.profile.value;
		console.log('Profile Changed: ' + profile.prName);
	}
	compareTech(t1: Technology, t2: Technology): boolean {
		console.log(t1.techId + '-' + t2.techId);
		return t1 && t2 ? t1.techId === t2.techId : t1 === t2;
	}
  onFormSubmit() {
		this.isValidFormSubmitted = false;
		if (this.userForm.valid) {
			this.isValidFormSubmitted = true;
		} else {
			return;
		}
		let newUser: User = this.userForm.value;
		this.userServices.createUser(newUser);
		this.resetForm(this.userForm);
	}

  resetForm(form: FormGroup){
    form.reset();

  }

}
