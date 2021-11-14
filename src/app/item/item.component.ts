import { Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import { ItemService } from "../services/item.service";

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})

export class ItemComponent implements OnInit{
    items: any = [];  
    @Input() itemList: any;

    constructor(private itemService: ItemService) {
      this.items = this.itemService.getAllItems();
    }
  
    ngOnInit(): void {

    }

    onClickItem(item: any): void {
      this.itemService.addOrderItem(item);
    }
}