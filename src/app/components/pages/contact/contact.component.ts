import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  nom = null;
  prenom = null;
  email = null;
  message = null;
  constructor() { }

  ngOnInit(): void {
  }

}
