import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
   constructor(private router:Router){}
   home()
   { 
    this.router.navigate(['home']);
   }
  about()
  {
   this.router.navigate(['About']);
  }
  contact()
  {
   this.router.navigate(['contact']);
  }
  
}
