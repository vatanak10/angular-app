import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { ItemService } from "../services/item.service";


@Component({
    selector: 'app-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.scss']
})

export class ItemListComponent implements OnInit {
    displayedColumns: string[] = ['id', 'name', 'category', 'price', 'config'];
    items: any;
    @Input() itemList: any;

    constructor(private itemService: ItemService, private router: Router) {
    }

    ngOnInit(): void {
        this.items = this.itemService.getAllItems();
        console.log(this.items);
    }

    onClickAddNew(): void {
        this.router.navigate(['/item-list/create']);
    }
}