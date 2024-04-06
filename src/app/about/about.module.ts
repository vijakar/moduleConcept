import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutCompanyComponent } from './about-company/about-company.component';



@NgModule({
  declarations: [
    AboutCompanyComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
AboutCompanyComponent
  ]
})
export class AboutModule { }
