import { Component, OnInit } from '@angular/core';
import { Livraison } from '../livraison';
import { LivraisonService } from '../livraison.service';

@Component({
  selector: 'app-livraison-list',
  templateUrl: './livraison-list.component.html',
  styleUrls: ['./livraison-list.component.scss']
})
export class LivraisonListComponent implements OnInit {
  lives: Livraison[];
  constructor(public livSrv: LivraisonService) { }

  ngOnInit(): void {
    this.getAllLivraison();
  }
  getAllLivraison(){
    this.livSrv.getAll().subscribe((data: any)=>{
      this.lives= data;
      JSON.stringify(data);
      console.log(this.lives);
      
    })

  }

}
