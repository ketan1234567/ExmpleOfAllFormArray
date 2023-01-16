import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-add-controlandremove-control',
  templateUrl: './add-controlandremove-control.component.html',
  styleUrls: ['./add-controlandremove-control.component.css']
})
export class AddControlandremoveControlComponent implements OnInit {

 
  constructor(private formBuilder:FormBuilder,private personservice:PersonService){

  }
  personForm:FormGroup=this.formBuilder.group({
    pname:['',Validators.required],
    isIndian:['',Validators.required],
    isEmp:['',Validators.required],
    favBookEntry:''
  });
  companyFG:FormGroup=this.formBuilder.group({
    compName:['',Validators.required],
    compLocation:['',Validators.required],
    profile:['',Validators.required]

  })
  ngOnInit(){
    this.handleNationality();
    this.handleEmploymentStatus();
    this.handleFavoriteBooks();
    
  }
  get pname(){
    return this.personForm.get('pname') as FormControl;
  }
  get isIndian(){
    return this.personForm.get('isIndian') as FormControl;

  }
  get isEmp(){
   return this.personForm.get('isEmp') as FormControl;
  }
  get favBookEntry(){
    return this.personForm.get('favBookEntry') as FormControl;
  }
  get favBooks(){
    return this.personForm.get('favBooks') as FormArray;
  }

  handleNationality(){
    this.isIndian.valueChanges.subscribe(res=>{
      if(res==='false'){
        this.personForm.addControl('nationality',
        this.formBuilder.control('',[Validators.required]));
      
      }else{
  this.personForm.removeControl('nationality');

      }
    });
  }
  handleFavoriteBooks() {
    this.favBookEntry.valueChanges.subscribe(fbEntry => {
      if (fbEntry && !this.personForm.contains('favBooks')) {
        this.personForm.addControl('favBooks',
          this.formBuilder.array([new FormControl('', [Validators.required])]));
      } else {
        this.personForm.removeControl('favBooks');
      }
    });
  }
  handleEmploymentStatus() {
    this.isEmp.valueChanges.subscribe(val => {
      if (val === 'true' && !this.personForm.contains('company')) {
        this.personForm.addControl('company', this.companyFG);
      } else {
        this.personForm.removeControl('company');
      }
    });
  }
  deleteBook(index:number){
    this.favBooks.removeAt(index);
  }
  addMoreBooks(){
    this.favBooks.push(new FormControl('',[Validators.required]));
  }
  onFormSubmit()

  {
    if (this.personForm.valid) {
      this.personservice.savePerson(this.personForm.value);
    }
  }



  

}
