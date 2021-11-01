import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentsModule } from '../components/components.module';
import { BaseService } from '../service/base.service';
import { IndexComponent } from './index/index.component';

@NgModule({
  declarations: [
    IndexComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  providers: [
    BaseService
  ]
})
export class PagesModule {}