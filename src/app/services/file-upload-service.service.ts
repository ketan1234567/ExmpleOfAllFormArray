import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadServiceService {

  constructor(private http:HttpClient) { }
  url="https://file.io";


  UploadWithProgress(formData:FormData):Observable<any>{
    return this.http.post(this.url, formData, { observe: 'events',  reportProgress: true })
    .pipe(
      catchError(err => this.handleError(err))
    )

  }
 private handleError(error: any){
   return throwError(error);
  }
}

 