import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifeCycleHookRoutingModule } from './life-cycle-hook-routing.module';
import { LoggerService } from './service/loger.service';

@NgModule({
  imports: [
    CommonModule,
    LifeCycleHookRoutingModule
  ],
  declarations: [],
  providers:[LoggerService]
})
export class LifeCycleHookModule { }
