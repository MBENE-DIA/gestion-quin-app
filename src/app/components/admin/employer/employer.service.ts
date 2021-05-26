import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Employer } from './employer';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {
  private urlSrvApi = environment.urlSrvApi;

  private baseUrl = this.urlSrvApi+'/api/employers';
  private base1 = this.urlSrvApi+'/api/employer'
  host = 'http://localhost:9898';
  choixmenu = 'A';
  list: Employer[] | any;
  tokenStr = localStorage.getItem('token');
  public dataForm: FormGroup | any;

  constructor(private http: HttpClient) {}
  getData(id: number): Observable<any> {
    return this.http.get(`${this.base1}/${id}`);
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
  getEmployerByEmail(email: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/${email}`);
  }
  public deleteEmp(idRv:number):Observable<void> {
    return this.http.delete<void>(`${this.urlSrvApi}/api/employers/${idRv}`);
  }
}
