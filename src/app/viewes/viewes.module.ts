import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewesRoutingModule } from './viewes-routing.module';
import { VieweshomeComponent } from './vieweshome/vieweshome.component';
import { StatisticsComponent } from './statistics/statistics.component';

import { SharedModule } from '../shared/shared.module';
import { ItemListComponent } from './item-list/item-list.component';


@NgModule({
  declarations: [VieweshomeComponent, StatisticsComponent, ItemListComponent],
  imports: [
    CommonModule,
    ViewesRoutingModule,
    SharedModule
  ]
})
export class ViewesModule { }
