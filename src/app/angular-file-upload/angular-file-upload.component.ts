import { Component, OnInit } from '@angular/core';
import { FileUploadServiceService } from '../services/file-upload-service.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';
import { FormArray, FormBuilder, FormControl, Validators } from '@angular/forms';
import { fileExtensionValidator } from '../file-extension-validator.directive';


@Component({
  selector: 'app-angular-file-upload',
  templateUrl: './angular-file-upload.component.html',
  styleUrls: ['./angular-file-upload.component.css']
})
export class AngularFileUploadComponent  {
  percetCompleted:number=0;
  isSingleUploaded=false;
  isMultipleUploaded=false;
  urlAfterUpload='';
  selectedFileList=null;
  percentUploaded=[0];
  errorCode:any
  acceptedExtensions ="jpg, jpeg, bmp, png, wav, mp3, mp4";



  constructor(private fuservices:FileUploadServiceService,private formbuilder:FormBuilder){

  }

  Upload(files: File[]){

    console.log('Uploaded The Single File')
    //const selectedFileList = (<HTMLInputElement>document.getElementById('myFile')).files; 
    const file=files[0];
    console.log("File.Name");
    this.isSingleUploaded=false;
    this.urlAfterUpload='';


    const formData= new FormData();
    formData.append("file", file);
    this.fuservices.UploadWithProgress(formData)
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percetCompleted = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.isSingleUploaded = true;
          this.urlAfterUpload = event.body.link;
        }
      });

  }
  uploadFile(file: File, fileNum: number) {
    const formData = new FormData();
    formData.append("file", file);
    this.fuservices.UploadWithProgress(formData)
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.percentUploaded[fileNum] = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          console.log(file.name + ', Size: ' + file.size + ', Uploaded URL: ' + event.body.link);
          this.fileUploadSuccess();
        }
      },
        err => console.log(err)
      );
  }
  //Multiple Upload File Code

  uploadForm=this.formbuilder.group({
    title:['',Validators.required],
    filesToUpload:this.formbuilder.array([
      this.formbuilder.control('',[Validators.required,fileExtensionValidator(this.acceptedExtensions)])
    ])

  });

  get title() :FormControl{
    return  this.uploadForm.get('title') as FormControl;
  }
  get filesToUpload():FormArray{
    return this.uploadForm.get('filesToUpload') as FormArray;

  }
  addMoreFiles(){
    this.filesToUpload.push(this.formbuilder.control('',[Validators.required,fileExtensionValidator(this.acceptedExtensions)]));
    this.percentUploaded.push(0);

  }
  deleteFile(index:number){
    this.filesToUpload.removeAt(index);
    this.percentUploaded.splice(index,1);
  }
  onFormSubmit(){
    this.isMultipleUploaded = false;
  if(this.uploadForm.value){
   this.errorCode="This  is all selected Required";
  }
  for (let i = 0; i < this.filesToUpload.length; i++) {

      const selectedFileList:any= (<HTMLInputElement>document.getElementById('file' + i)).files;
      const file = selectedFileList.item(0);
      
      this.uploadFile1(file, i);
    }
    console.log(this.title.value);

 

  }
    
  uploadFile1(file: File, fileNum: number) {
    const formData = new FormData();
    formData.append("file", file);
    this.fuservices.UploadWithProgress(formData)
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress ) {
          this.percentUploaded[fileNum] = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          console.log(file.name + ', Size: ' + file.size + ', Uploaded URL: ' + event.body.link);
          this.fileUploadSuccess();
        }
      },
        err => console.log(err)
      );
  }

  fileUploadSuccess() {
    let flag = true;
    this.percentUploaded.forEach(n => {
      if (n !== 100) {
        flag = false;
      }
    });
    if (flag) {
      this.isMultipleUploaded = true;
    }

  }
  formReset() {
    this.uploadForm.reset();
    this.isMultipleUploaded  = false;
    for (let i = 0; i < this.percentUploaded.length; i++) {
      this.percentUploaded[i] = 0;
    }

}
}
