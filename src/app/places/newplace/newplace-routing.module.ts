import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewplacePage } from './newplace.page';

const routes: Routes = [
  {
    path: '',
    component: NewplacePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewplacePageRoutingModule {}
