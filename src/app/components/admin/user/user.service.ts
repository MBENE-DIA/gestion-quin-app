import { DatePipe } from '@angular/common';
import {  HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private urlSrvApi = environment.urlSrvApi;
  //this.urlSrvApi+'/api/produit/tous');
  private baseUrl = this.urlSrvApi+'/api/User';
  private findByEmail = this.urlSrvApi+'/api/User/email';
  private baseUrl1 = this.urlSrvApi+'/api/authenticate';
  private baseUrl3 = this.urlSrvApi+'/api/User/login';
  islogin = false;
  admin = false;
  client = false;
  employer = false;
  choixmenu = 'A';
  user: User| any;
  listData: User[] = [];
  public dataForm: FormGroup | any;

  constructor(private http: HttpClient ,private datePipe: DatePipe) { }
login(email: string, password: string) {
    return this.http.post(`${this.baseUrl3}`, { email, password });
  }

  getData(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getUserEmail(email: string): Observable<any> {
      return this.http.get(`${this.findByEmail}/${email}`);
  }
  createData(email: string, password: string, role : string ): Observable<any> {
    return this.http.post(`${this.baseUrl}`, { email, password, role});
  }

  updatedata(id: number, value: User): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  transformDate(date: Date) {
    return this.datePipe.transform(date, 'yyyy-MM-dd');
  }
  

  
}

