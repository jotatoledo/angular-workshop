import { NgModule } from '@angular/core';
import { CovalentLayoutModule, CovalentSearchModule } from '@covalent/core';

@NgModule({
  imports: [CovalentLayoutModule, CovalentSearchModule],
  exports: [CovalentLayoutModule, CovalentSearchModule]
})
export class CovalentModule {}
