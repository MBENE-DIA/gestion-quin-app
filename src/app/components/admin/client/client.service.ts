import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Client } from './client';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private urlSrvApi = environment.urlSrvApi;

  private baseUrl = this.urlSrvApi+'/api/clients';
  host = 'http://localhost:8080';
  choixmenu = 'A';
  list: Client[] | any;
  client: Client [] |any;
  tokenStr = localStorage.getItem('token');
  public dataForm: FormGroup | any;

  constructor(private http: HttpClient) {}
  getData(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createData(formData: FormData): Observable<any> {
    return this.http.post(`${this.baseUrl}`, formData);
  }

  updatedata(id: number, value: any): Observable<any> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteData(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  getClientByEmail(email: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/${email}`);
  }
}
