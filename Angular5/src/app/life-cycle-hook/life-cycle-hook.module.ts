import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LifeCycleHookRoutingModule } from './life-cycle-hook-routing.module';
import { LogerService } from './service/loger.service';
import { OnChangesComponent } from './on-changes/on-changes.component';

@NgModule({
  imports: [
    CommonModule,
    LifeCycleHookRoutingModule
  ],
  declarations: [OnChangesComponent],
  providers:[LogerService]
})
export class LifeCycleHookModule { }
