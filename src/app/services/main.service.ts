import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor() { }

  ArrayName(team:any){
    console.log(team.name)
    console.log(team.classmates)

  }
}
