import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { ProductsComponent } from './components/products/products.component';
import { RegisterComponent } from './components/register/register.component';
import { AuthguardGuard } from './services/authguard.guard';

const routes: Routes = [
  {
    path : 'login',
    component : LoginComponent
  },
  {
    path : "register",
    component : RegisterComponent
  },
  {
    path : "products",
    component : ProductsComponent
  },
  {
    path : "cart",
    component : CartComponent
  },
  {
    path : '',
    redirectTo : 'login',
    pathMatch : 'full'
  },
  {
    path: 'home',
    component : HomeComponent,
    canActivate : [AuthguardGuard]
  },
  {
    path: '**',
    component : PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
