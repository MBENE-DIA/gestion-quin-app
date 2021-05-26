import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';
import {
  produitFieldsForFilter,
  produitColumns,
} from "../produit.columns";
import { ClientService } from '../../client/client.service';
import { Client } from 'src/app/components/client/client';

@Component({
  selector: 'app-produit-list',
  templateUrl: './produit-list.component.html',
  styleUrls: ['./produit-list.component.scss']
})
export class ProduitListComponent implements OnInit {
  @Input() produits: Produit[];
  @Output() productAdded = new EventEmitter();
  
   selectedPoduits: Produit[] = [];
  selectedPoduit: Produit;
  cols: any[];
  tableColumns= produitColumns;
  email: string | any;

    selectedProduct: Produit;
    private shoppingCartOrders: Produit;
    // sub: Subscription;
    // productSelected: boolean = fal
    roductSelected: boolean = false;
    cartProductList = []; 
    client: Client | any;

  constructor(private produitSrv: ProduitService, public cliSrv: ClientService)
 { }

  ngOnInit(): void {
    this.getAllProduits();
    this.email = localStorage.getItem('email');

    this.cliSrv
      .getClientByEmail(this.email)
      .toPromise<Client>()
      .then((data) => {
        this.client = data;
        console.log(this.client);
      });

   
    }
    getAllProduits(){
      this.produitSrv.getAllProduit().subscribe((response: Produit[])=>{
        this.produits = response;
        JSON.stringify(response);
        for( var i= 0; i<this.produits.length;i++){
          this.produits[i].picByte='data:image/jpeg;base64,' + this.produits[i].picByte;
        }
        console.log(this.produits);
      }, (error: HttpErrorResponse) => {
        alert (error.message);
      }
      );
    }

    deleteProduit(id:number): void {
      this.produitSrv.deleteProduit(id).subscribe(
        (response: void) => {
          console.log(response);
          this.getAllProduits();
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        }
      );
    }
    addProductToCart(produit) {
      this.productAdded.emit(produit);
    }
 




}
