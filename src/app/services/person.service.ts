import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor() { }

  savePerson(personDatay:any){
    console.log(personDatay);

  }
}
