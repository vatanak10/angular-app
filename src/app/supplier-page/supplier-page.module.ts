import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SupplierFormComponent } from './supplier-form/supplier-form.component';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';

const routes = [
  {
    path: '',
    canActivate: [AuthGuardService],
    component: SupplierListComponent
  },
  {
    path: 'create',
    canActivate: [AuthGuardService],
    component: SupplierFormComponent
  },
];

@NgModule({
  declarations: [SupplierListComponent, SupplierFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [SupplierListComponent, SupplierFormComponent]
})
export class SupplierPageModule { }
