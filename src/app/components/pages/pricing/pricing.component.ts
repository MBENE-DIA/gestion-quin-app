import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../../admin/produit/produit';
import { ProduitService } from '../../admin/produit/produit.service';


@Component({
  selector: 'app-pricing',
  templateUrl: './pricing.component.html',
  styleUrls: ['./pricing.component.scss']
  
})
export class PricingComponent implements OnInit {

  @Input() produits: Produit[];
  constructor(private produitSrv: ProduitService) { }

  
  ngOnInit(): void {
    this.getAllProduits();
    
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



}