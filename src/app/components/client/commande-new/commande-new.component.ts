import { Component, OnInit } from '@angular/core';
import { Commande } from '../../admin/commande/commande';

@Component({
  selector: 'app-commande-new',
  templateUrl: './commande-new.component.html',
  styleUrls: ['./commande-new.component.scss']
})
export class CommandeNewComponent implements OnInit {
  com=new Commande();
  submitted = false;
  selectedFile: File;
 
  constructor() { }

  ngOnInit(): void {
  }

}
