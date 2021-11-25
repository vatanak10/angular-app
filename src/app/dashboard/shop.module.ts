import "@angular/compiler"

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MatButtonToggleModule } from "@angular/material/button-toggle";
import { RouterModule } from "@angular/router";
import { ItemService } from "../services/item.service";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ItemComponent } from "./item/item.component";
import { OrderComponent } from "./order/order.component";
import { AuthGuardService } from "../services/auth-guard.service";

const routes = [
  {
    path: '',
    canActivate: [AuthGuardService],
    component: DashboardComponent
  },
]

@NgModule({
  declarations: [
    DashboardComponent,
    ItemComponent,
    OrderComponent
  ],
  imports: [
    CommonModule,
    MatButtonToggleModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    DashboardComponent,
    ItemComponent,
    OrderComponent
  ],
  providers: [ItemService]
})

export class ShopModule {}
