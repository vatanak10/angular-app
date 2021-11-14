import { Component, OnInit, Input } from "@angular/core";
import { ItemService } from "../services/item.service";


@Component({
    selector: 'app-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.scss']
})

export class ItemListComponent implements OnInit {
    displayedColumns: string[] = ['id', 'name', 'category', 'price'];
    items: any = [];  
    @Input() itemList: any;

    constructor(private itemService: ItemService) {
      this.items = this.itemService.getAllItems();
    }

    ngOnInit(): void {

    }
}