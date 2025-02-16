import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './components/homepage/homepage.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {LoginComponent} from './components/login/login.component';
import {RegisterComponent} from './components/register/register.component';


export const routes: Routes = [
  {path:'',redirectTo:'/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'dash', component:DashboardComponent},
  {path:'loginIN', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  { path: '**', redirectTo: '' },

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutes{ }
