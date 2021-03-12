import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EelementsHomeComponent } from './elements-home/elements-home.component';
// import { PlaceholderComponent } from './placeholder/placeholder.component';


const routes: Routes = [
  { path: '', component: EelementsHomeComponent },
  // { path: '', component: PlaceholderComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElementsRoutingModule { }
