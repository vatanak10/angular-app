import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { ItemService } from './services/item.service';
import { CategoryService } from './services/category.service';
import { AuthService } from './services/auth.service';

import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from "@angular/material/input";
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';

import { ShopModule } from './dashboard/shop.module';
import { ItemPageModule } from './item-page/item-page.module';
import { HeaderService } from './services/header.service';
import { AuthGuardService } from './services/auth-guard.service';
import { ToastrModule } from 'ngx-toastr';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import("./dashboard/shop.module").then((m) => m.ShopModule)
  },
  {
    path: 'items',
    loadChildren: () => import("./item-page/item-page.module").then((m) => m.ItemPageModule)
  },
  {
    path: 'login',
    component: LoginComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NotFoundComponent,
    LoginComponent
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
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents: [

  ],
  providers: [ItemService, CategoryService, AuthService, HeaderService, AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
