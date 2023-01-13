import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-focus-blur-event',
  templateUrl: './focus-blur-event.component.html',
  styleUrls: ['./focus-blur-event.component.css']
})
export class FocusBlurEventComponent implements OnInit  {
  ngOnInit(){
   
  }
  myStyle1:any
  countryName= new  FormControl();
  onFocusCountry() {
    this.myStyle1={
      'background-color' : "#d1152c"
    }
  } 


}
