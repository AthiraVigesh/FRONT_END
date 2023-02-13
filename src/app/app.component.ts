import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FRONT-END';
  faFacebook = faFacebook;
  
  constructor(private router:Router){}
 home()
 {
     this.router.navigate(['/home']);
 }

 contact()
 {
   this.router.navigate(['/contact']);
 }

}
