import { HttpErrorResponse } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Produit } from '../produit';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-produit-new',
  templateUrl: './produit-new.component.html',
  styleUrls: ['./produit-new.component.scss']
})
export class ProduitNewComponent implements OnInit {
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


  constructor( private produitSrv: ProduitService,public toastSrv: ToastrService,
    private router: Router) { }

  ngOnInit(): void {
  
  }


public onFileChanged(event){
  this.selectedFile  = event.target.files[0];
}

save(){
  console.log(this.prod);
  console.log(this.selectedFile);
  const formData = new FormData();

  formData.append('imageFile', this.selectedFile, this.selectedFile.name);
  formData.append('nom',this.prod.nom);
  formData.append('prixUnitaire',this.prod.prixUnitaire);
  formData.append('quantite',this.prod.quantite);
  formData.append('categorie',this.prod.categorie);
  this.produitSrv.ajouterProduit(formData).subscribe((data: Produit) =>{
     this.toastSrv.success('Enregistrement reussi');
    this.router.navigate(['/produit']);  
  }, (error: HttpErrorResponse)=>{
    // this.message = 'Eregistrement non reussi';
    // alert(this.message);
    alert(error.message);
  })
}
// save() {
//   console.log(this.prod);
  
//   this.produitSrv
//   .ajouterProduit(this.prod).subscribe((data:Produit )=> {
//     console.log(data)
//    // this.prod = new Produit();
    
//   }, (error: HttpErrorResponse)=>{
//     alert(error.message);
//   }
//   );
// }
onSubmit() {
  // this.submitted = true;
   this.save()   
}

}
