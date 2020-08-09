import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardsGuard implements CanActivate {
  constructor(public storage: Storage,
    public router:Router
  ){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return new Promise((resolve,reject)=>{
        this.storage.get('token').then(data =>{
          if (data){
            resolve(true);
          }else{
            this.router.navigate(['/login']);
            console.log('no tenia token');
            resolve(false);
          }
        },error=>{
          this.router.navigate(['/login']);
            console.log('no tenia token');
            resolve(false);
        })
      })
  }
  
}
