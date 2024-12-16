import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StructdircetiveComponent } from './structdircetive/structdircetive.component';
import { AttributedircetiveComponent } from './attributedircetive/attributedircetive.component';

const routes: Routes = [
  {path:"struct",component:StructdircetiveComponent},
  {path:"attrib",component:AttributedircetiveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
