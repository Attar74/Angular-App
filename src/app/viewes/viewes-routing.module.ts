import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VieweshomeComponent } from './vieweshome/vieweshome.component';

const routes: Routes = [
  {path: '', component: VieweshomeComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewesRoutingModule { }
