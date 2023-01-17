import { Component, OnInit } from '@angular/core';
import { FileUploadServiceService } from '../services/file-upload-service.service';
import { HttpResponse, HttpEventType } from '@angular/common/http';


@Component({
  selector: 'app-angular-file-upload',
  templateUrl: './angular-file-upload.component.html',
  styleUrls: ['./angular-file-upload.component.css']
})
export class AngularFileUploadComponent  {
  percetCompleted:number=0;
  isSingleUploaded=false;
  urlAfterUpload='';
  percentUploaded=[0];



  constructor(private fuservices:FileUploadServiceService){

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
  fileUploadSuccess() {
    let flag = true;
    this.percentUploaded.forEach(n => {
      if (n !== 100) {
        flag = false;
      }
    });

  }

}
