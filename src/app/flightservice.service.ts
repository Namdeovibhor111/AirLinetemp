import { Injectable } from '@angular/core';
import { Iflight } from './iflight';
import {HttpClient} from '@angular/common/http' // this will you not got directly it cotains get put delete put methods
import { HttpHeaders } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
import { Observable } from 'rxjs';// for delivering the message/data used for asynchronus communication
import { Iuserlogin } from './iuserlogin';
import { Iflightsearch } from './iflightsearch';
import { Iuser } from './iuser';

@Injectable({
  providedIn: 'root'
})
export class FlightserviceService {
url = 'http://localhost:29375/api'
httpOptions = {headers:new HttpHeaders({'Content-type':'application/json'})}

  constructor(private httpclient: HttpClient) { }
  getflightList():Observable<any>{
    return this.httpclient.get<any[]>(this.url + '/flightdetail/FlightList').pipe(catchError(this.handleError))
  }
  userlogin(userlogindata:Iuserlogin):Observable<Iuserlogin>{
    return this.httpclient.post<Iuserlogin>(this.url+'/Customer/Userlogin', userlogindata,this.httpOptions).pipe(catchError(this.handleError))
  }
  searchflight(flightdata:Iflightsearch):Observable<any>{
    return this.httpclient.post<any[]>(this.url + '/flightdetail/flightcity',flightdata,this.httpOptions).pipe(catchError(this.handleError))
  }
  RegisterUser(customer:Iuser):Observable<any>
  {

    return this.httpclient.post<any>(this.url+'/Customer/UserReg',customer,this.httpOptions).pipe(catchError(this.handleError))
  }
  handleError(error:HttpErrorResponse){
    let errormessage = ''
    errormessage=error.status +'\n'+ error.statusText + '\n' + error.error
    alert(errormessage)
    return throwError(errormessage)
  }
}
