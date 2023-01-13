import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MainService } from '../services/main.service';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {
  ngOnInit(): void {
    
  }
  constructor(private formbuilder:FormBuilder,private services:MainService){

  }
  studentForm=new FormGroup ({
    
    name: new FormControl('',[Validators.required]),
    classmates:new FormArray([
        new FormControl(''),
        new FormControl(''),

    ])
  });

  get name():FormControl{
    return this.studentForm.get('name') as FormControl;
  }
  get classmates():FormArray{
    return this.studentForm.get('classmates') as FormArray;
  }
  onFormSubmit(){
    this.services.ArrayName(this.studentForm.value);

  }

}
