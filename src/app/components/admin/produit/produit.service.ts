import {Produit} from './produit';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
//import { networkInterfaces } from 'os';
@Injectable({
  providedIn: 'root'
})
export class ProduitService {
  
  private urlSrvApi = environment.urlSrvApi;
  constructor(private http: HttpClient){

  }
  public getAllProduit():Observable<Produit[]>{
    return this.http.get<Produit[]>(this.urlSrvApi+'/api/produit/tous');
    
  }
  public ajouterProduit(formData: FormData):Observable<Produit>{

    return this.http.post<Produit>(this.urlSrvApi+'/api/produit/ajouter',formData);
  }
  public updateProduit(formData: FormData):Observable<Produit>{
    return this.http.put<Produit>(this.urlSrvApi+'/api/produit/update/',formData);
  }
  public findById(id:number):Observable<Produit>{
    return this.http.get<Produit>(this.urlSrvApi+'/api/produit/find/'+id);
  }

  public deleteProduit(id:number):Observable<void>{
    return this.http.delete<void>(`${this.urlSrvApi}/api/produit/supprimer/${id}`);
  }
  httpOptions={
    headers:new HttpHeaders({
      'Content-Type':"application/json"
    })
  }
}
