import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-menu-principal',
  templateUrl: './menu-principal.page.html',
  styleUrls: ['./menu-principal.page.scss'],
})
export class MenuPrincipalPage implements OnInit {

  constructor(
    public router:Router,
    public storage: Storage) { }

  ngOnInit() {
  }

  logout(){
    this.storage.remove('token');
    this.router.navigate(['/login']);
  }

}
