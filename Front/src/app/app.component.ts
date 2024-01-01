import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private router: Router) {}

  isLoginPage(): boolean {
    const url = this.router.url;
    return url.includes('/Login') || url.includes('/Admin') || url.includes('/User');
  }
  

}
