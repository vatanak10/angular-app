import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { CategoryService } from "../services/category.service";
import { ItemService } from "../services/item.service";


@Component({
    selector: 'app-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.scss']
})

export class ItemListComponent implements OnInit {
    displayedColumns: string[] = ['id', 'name', 'category', 'price', 'config'];
    items: any;

    constructor(private itemService: ItemService, private router: Router, private categoryService: CategoryService) {
    }

    ngOnInit(): void {
        this.itemService.getAllItems().subscribe((result: any) => {
            this.items = result.data;
        });
    }

    onClickAddNew(): void {
        this.router.navigate(['/items/create']);
    }

    onEdit(id: any){
        // this.ItemService.editItem(id);
        console.log(id);
    }

    onDelete(id: any) {
        // this.itemService.deleteItem(id);
        console.log(id);
    }
}
