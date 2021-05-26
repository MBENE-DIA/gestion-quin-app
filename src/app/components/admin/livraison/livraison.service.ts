import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Livraison } from './livraison';

@Injectable({
  providedIn: 'root'
})
export class LivraisonService {
  private urlSrvApi = environment.urlSrvApi;

  private baseUrl = this.urlSrvApi+'/api/livraisons';
  private base1 = this.urlSrvApi+'/api/livraison'
  host = 'http://localhost:9898';
  public dataForm: FormGroup | any;

  constructor(private http: HttpClient) {}
  getData(id: number): Observable<any> {
    return this.http.get(`${this.base1}/${id}`);
  }

  getAll(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
  // getEmployerByEmail(email: string): Observable<any> {
  //   return this.http.get(`${this.baseUrl}/user/${email}`);
  // }
  // public deleteEmp(idRv:number):Observable<void> {
  //   return this.http.delete<void>(`${this.urlSrvApi}/api/employers/${idRv}`);
  // }
}
