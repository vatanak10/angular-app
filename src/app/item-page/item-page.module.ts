import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemFormComponent } from './item-form/item-form.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatOptionModule } from '@angular/material/core';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';


const routes = [
  {
    path: '',
    component: ItemListComponent
  },
  {
    path: 'create',
    component: ItemFormComponent
  },
];

@NgModule({
  declarations: [ItemFormComponent, ItemListComponent],
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
    ItemFormComponent,
    ItemListComponent
  ],
  providers: []
})
export class ItemPageModule { }
