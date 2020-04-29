import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewplacePageRoutingModule } from './newplace-routing.module';

import { NewplacePage } from './newplace.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewplacePageRoutingModule
  ],
  declarations: [NewplacePage]
})
export class NewplacePageModule {}
