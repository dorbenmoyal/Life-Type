import { Injectable } from '@angular/core';
import { HttpParams, HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse, HttpResponse} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {Form} from '../app/Form';

@Injectable({
  providedIn: 'root'
})
export class MailServiceService {

  private _sendMailUrl ='http://localhost:3000/mailjs/sendmail';

  constructor(private http: HttpClient) { }

  sendMail(form : Form){
   this.http.post(this._sendMailUrl,JSON.stringify(form),
   {headers:{'Content-Type': 
    'application/json'}}).subscribe(res=> console.log(res));
  }

}
