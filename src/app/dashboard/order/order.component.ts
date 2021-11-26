import { Component, Input, OnInit } from "@angular/core";
import { OrderService } from "src/app/services/order.service";
import { ItemService } from "../../services/item.service";

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss']
})

export class OrderComponent implements OnInit{
    @Input() list_order: any;

    ngOnInit(): void {

    }

    constructor(private itemService: ItemService, private orderService: OrderService) {
        this.list_order = this.itemService.getOrderItem();
        this.itemService.refreshListOrder.subscribe((s) => {
            this.list_order = this.itemService.getOrderItem();
        });
    }

    OnIncrease(list_order: any): void{
        this.itemService.increaseItemQty(list_order);
    }

    OnDecrease(list_order: any): void{
        this.itemService.decreaseItemQty(list_order);
    }

    OnDelete(list_order: any): void {
        this.itemService.deleteOrderItem(list_order);
    }

    addOrder() {
      console.log(this.list_order);
      this.itemService.refreshListOrder.subscribe((s) => {
          this.list_order = this.itemService.getOrderItem();
          this.orderService.addOrder(this.list_order);
      });
    }
}
