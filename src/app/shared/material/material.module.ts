import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatTooltipModule,
  MatIconModule,
  MatListModule
} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatCardModule, MatToolbarModule, MatTooltipModule, MatIconModule, MatListModule],
  exports: [MatButtonModule, MatCardModule, MatToolbarModule, MatTooltipModule, MatIconModule, MatListModule]
})
export class MaterialModule {}
