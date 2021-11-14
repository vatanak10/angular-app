import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ItemService } from './services/item.service';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ItemComponent } from './item/item.component';
import { OrderComponent } from './order/order.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemListComponent } from './item-list/item-list.component';

const appRoutes: Routes = [
  {
    path: 'shop', 
    component: DashboardComponent
  },
  {
    path: 'item-list', 
    component: ItemListComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ItemComponent,
    OrderComponent,
    DashboardComponent,
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
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents: [
    ItemListComponent
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
