import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { User } from './user';

@Injectable()
export class AuthService {
  
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);



  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(
    private router: Router
  ) {}

  login(user: User) {
   if (user.userName === 'Samanta' && user.password === '2022' ) {
    //  console.log(user.userName + '  - ' + user.password);
      this.loggedIn.next(true);
      this.router.navigate(['/home']);
    }
  }

  logout() {
    this.loggedIn.next(false);
    this.router.navigate(['/login']);
  }
}
