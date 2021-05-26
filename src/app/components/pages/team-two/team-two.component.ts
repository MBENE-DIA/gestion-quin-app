import { Component, Input, OnInit } from '@angular/core';
import { Produit } from '../../admin/produit/produit';
import { ProduitService } from '../../admin/produit/produit.service';

import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-team-two',
  templateUrl: './team-two.component.html',
  styleUrls: ['./team-two.component.scss']
})
export class TeamTwoComponent implements OnInit {

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
