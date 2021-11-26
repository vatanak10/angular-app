import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SupplierListComponent } from './supplier-list/supplier-list.component';
import { SupplierFormComponent } from './supplier-form/supplier-form.component';
import { RouterModule } from '@angular/router';
import { AuthGuardService } from '../services/auth-guard.service';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

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
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [SupplierListComponent, SupplierFormComponent]
})
export class SupplierPageModule { }
