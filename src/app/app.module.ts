import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ItemService } from './services/item.service';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
