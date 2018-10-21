import { Component, OnInit } from '@angular/core';
import { AuthService } from '../security/auth.service'

@Component({
  selector: 'mt-header',
  templateUrl: './header.component.html'
  
})
export class HeaderComponent implements OnInit {

  mostrarMenu: Boolean = false;
  constructor(private authService: AuthService) { 

    
  }

  ngOnInit() {

    this.authService.isLoggedIn.subscribe(
      mostrar => this.mostrarMenu = mostrar
    );



  }

}
