import { Component, Input, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Produit } from '../../admin/produit/produit';
import { ProduitService } from '../../admin/produit/produit.service';


@Component({
  selector: 'app-blog-right-sidebar',
  templateUrl: './blog-right-sidebar.component.html',
  styleUrls: ['./blog-right-sidebar.component.scss']
})
export class BlogRightSidebarComponent implements OnInit {
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
