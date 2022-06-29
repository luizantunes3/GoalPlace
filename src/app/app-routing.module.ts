import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoMainBodyComponent } from './no-main-body/no-main-body.component';

const routes: Routes = [
  {path: "feed", component: NoMainBodyComponent},
  {path: "", redirectTo: "feed", pathMatch: "full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
