import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ItemService } from './services/item.service';
import { CategoryService } from './services/category.service';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ItemComponent } from './item/item.component';
import { OrderComponent } from './order/order.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { ItemListComponent } from './item-list/item-list.component';

const appRoutes: Routes = [
  {
    path: 'shop', 
    component: DashboardComponent
  },
  {
    path: 'item-list', 
    component: ItemListComponent
  },
  {
    path: 'item-list/create', 
    component: ItemFormComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemComponent,
    OrderComponent,
    DashboardComponent,
    ItemFormComponent,
    ItemListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatDialogModule,
    MatButtonToggleModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents: [
    
  ],
  providers: [ItemService, CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
