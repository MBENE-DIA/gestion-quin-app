import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.scss']
})
export class ProduitDetailComponent implements OnInit {
  produit: Produit
  @Input() produits: Produit[];

  constructor( private activatedRoute: ActivatedRoute,public produitSrv: ProduitService) { }

  ngOnInit(): void {
    this.find();
    // console.log(this.activatedRoute.snapshot.params.id);
    
  }

  find(){
    this.produitSrv.findById(this.activatedRoute.snapshot.params.id).subscribe((data:Produit)=>{
      this.produit = data;
      JSON.stringify(data);
    console.log(this.produit);
    this.produit.picByte='data:image/jpeg;base64,' + this.produit.picByte;
    
    })
}
// getAllProduits(){
//   this.produitSrv.getAllProduit().subscribe((response: Produit[])=>{
//     this.produits = response;
//     JSON.stringify(response);
//     var i;
//     for( i= 0; i<this.produits.length;i++){
//       this.produits[i].picByte='data:image/jpeg;base64,' + this.produits[i].picByte;
//     }
//     console.log(this.produits);
//     for(i = 0; i< this.produits.length; i++){
//       if(this.produits[i].picByte.)
//     }


//   }, (error: HttpErrorResponse) => {
//     alert (error.message);
//   }
//   );
// }
}
