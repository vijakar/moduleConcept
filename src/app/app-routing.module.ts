import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AboutCompanyComponent } from './about/about-company/about-company.component';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./login-auth/login-auth.module').then(m => m.LoginAuthModule)
  },
  {
    path:'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {path:"about", component:AboutCompanyComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy:PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
