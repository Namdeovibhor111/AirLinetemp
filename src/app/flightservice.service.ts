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
import { Iadminlogin } from './iadminlogin';
import { Ibookingdetails } from './ibookingdetails';
import { GlobalClass } from './global-class';

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
  addFlight(flight: Iflight): Observable<Iflight> {
    return this.httpclient
      .post<Iflight>(`${this.url}/flightdetail/AddFlight`, flight)
      .pipe(catchError(this.handleError));
  }

  deleteflight(fId: number): Observable<Iflight> {
    return this.httpclient
      .delete<Iflight>(`${this.url}/flightdetail/DeleteFlight/${fId}`)
      .pipe(catchError(this.handleError));
  }
  login(adminlogindata: Iadminlogin): Observable<any> {
    return this.httpclient
      .post(`${this.url}/admin/Adminlogin`, adminlogindata, {
        responseType: 'text',
      })
      .pipe(catchError(this.handleError)); //have to change the response type in text formate because from api it is coming in json.
  }
  booking(bookdata:Ibookingdetails):Observable<any>{
    return this.httpclient.post<Ibookingdetails>(this.url + '/bookingdetail/BookFlight',bookdata,this.httpOptions).pipe(catchError(this.handleError));
  }
  mybooking():Observable<any>{
    const num = GlobalClass.cid.toString()
    
    return this.httpclient.get<Ibookingdetails>(this.url+'/bookingdetail/confirmbooking/'+num).pipe(catchError(this.handleError));
  }
  cancelbooking():Observable<any>{
    const num = GlobalClass.cancelid.toString()
    return this.httpclient.put<Ibookingdetails>(this.url+'/bookingdetail/cancelbooking/'+num,this.httpOptions).pipe(catchError(this.handleError));
  }
  handleError(error:HttpErrorResponse){
    let errormessage = ''
    errormessage=error.status +'\n'+ error.statusText + '\n' + error.error
    alert(errormessage)
    return throwError(errormessage)
  }
}
