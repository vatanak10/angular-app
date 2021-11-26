import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CategoryFormComponent } from './category-form/category-form.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { AuthGuardService } from '../services/auth-guard.service';
import { MatFormFieldModule } from '@angular/material/form-field';

const routes = [
  {
    path: '',
    canActivate: [AuthGuardService],
    component: CategoryListComponent
  },
  {
    path: 'create',
    canActivate: [AuthGuardService],
    component: CategoryFormComponent
  },
];

@NgModule({
  declarations: [
    CategoryFormComponent,
    CategoryListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatTableModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CategoryFormComponent,
    CategoryListComponent
  ],
  providers: []
})
export class CategoryPageModule { }
