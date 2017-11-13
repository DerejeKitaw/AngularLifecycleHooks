import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OnChangesComponent } from './on-changes/on-changes.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

const routes: Routes = [
  { path: 'onChanges', component: OnChangesComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    HttpClientModule, //add this module for angular4
  ],
  exports: [RouterModule]
})
export class LifeCycleHookRoutingModule { }
