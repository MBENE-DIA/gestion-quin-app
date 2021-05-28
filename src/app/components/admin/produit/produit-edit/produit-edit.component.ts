import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-produit-edit',
  templateUrl: './produit-edit.component.html',
  styleUrls: ['./produit-edit.component.scss']
})
export class ProduitEditComponent implements OnInit {
  produit: Produit
  @Input() produits: Produit[];
  prod=new Produit();
  submitted = false;
  selectedFile: File;
  message: String;
  categories = [
    { value: 'Materielle Construction', label: 'Materielle Construction' },
    { value: 'Plomberie', label: 'Plomberie' },
    { value: 'Materielle Sanitaire', label: 'Materielle Sanitaire' },
    { value: 'Electricité', label: 'Electricité' },
    { value: 'Eclairage', label: 'Eclairage' },
    { value: 'Fils et Cables', label: 'Fils et Cables' },
    { value: 'Prises et Interruptions', label: 'Prises' },
    { value: 'Alimentation eau', label: 'Alimentation' },
    { value: 'Protection Electrique', label: 'Protection' },
    { value: 'Chauffe Eau et accessoires', label: 'Chauffe Eau' },
    { value: 'Robinets et Accessoires', label: 'Robinets' },
    { value: 'Evacuation D\eau', label: 'Evacuation' },
    { value: 'Eviers', label: 'Eviers' },
    { value: 'Robinets Cuisine', label: 'Robinets Cuisine' },
    { value: 'Accessoires Cuisine', label: 'Cuisine' },
  ];
 


  constructor(private router: Router,public produitSrv: ProduitService) { }

  ngOnInit(): void {
  }

  update(){
    console.log(this.prod);
    console.log(this.selectedFile);
    const formData = new FormData();
  
    formData.append('imageFile', this.selectedFile, this.selectedFile.name);
    formData.append('nom',this.prod.nom);
    formData.append('prixUnitaire',this.prod.prixUnitaire);
    formData.append('quantite',this.prod.quantite);
    formData.append('categorie',this.prod.categorie);
    this.produitSrv.ajouterProduit(formData).subscribe((data: Produit) =>{
//this.toastSrv.success('Enregistrement reussi');
      this.router.navigate(['/produit']);  
    }, (error: HttpErrorResponse)=>{
      // this.message = 'Eregistrement non reussi';
      // alert(this.message);
      alert(error.message);
    })
  }
  public onFileChanged(event){
    this.selectedFile  = event.target.files[0];
  }
  onSubmit() {
    // this.submitted = true;
     this.update()   
  }

 

  

}
