import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
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
    MatOptionModule,
    MatSelectModule,
    MatTableModule,
    MatSlideToggleModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    CategoryFormComponent,
    CategoryListComponent
  ],
  providers: []
})
export class CategoryPageModule { }
