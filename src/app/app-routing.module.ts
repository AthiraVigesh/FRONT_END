import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MainComponent } from './main/main.component';

const routes: Routes = [
  // {path:'home' , component:HomeComponent},
  // {path:'About' , component:AboutComponent},
  // {path:'contact' ,component:ContactComponent},
  // {path:'header' , component:HeaderComponent},
  // {path:'footer' ,component:FooterComponent}
  {path:"", component:MainComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
