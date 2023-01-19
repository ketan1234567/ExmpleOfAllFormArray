import { Injectable } from '@angular/core';
import { Profile } from '../domain/profile';
import { Technology } from '../domain/technology';
import { User } from '../domain/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { } 

  getProfiles():Profile[]{
    let profiles=[
      new Profile('dev','developer'),
      new Profile('man','manager'),
      new Profile('dir','director')

  ]
  return profiles;

  }
  getTechnologies():Technology[]{
    
  let technologies=[
     new Technology(100,'java'),
     new Technology(101,'angular'),
     new Technology(103,'spring')

  ]
  return technologies;
  }
  createUser(user:any=User) {
    //Log user data in console
    console.log("User Name: " + user.userName);
    console.log("Profile Id: " + user.profile.prId);
    console.log("Profile Name: " + user.profile.prName);
    for (let i = 0; i < user.technologies.length; i++) {
        console.log("Technology Id: " + user.technologies[i].techId);
        console.log("Technology Name: " + user.technologies[i].techName);
    }
}
}
