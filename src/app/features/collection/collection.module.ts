import { NgModule } from '@angular/core';

import { CollectionRoutingModule, routedComponents } from './collection-routing.module';
import { SharedModule } from '@ws/shared';

@NgModule({
  imports: [SharedModule, CollectionRoutingModule],
  declarations: [routedComponents]
})
export class CollectionModule {}
