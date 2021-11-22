import { Component, OnInit} from "@angular/core";
import { Router } from "@angular/router";
import { CategoryService } from "../../services/category.service";
import { ItemService } from "../../services/item.service";

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})

export class ItemComponent implements OnInit{
    categories: any[] = [
      {
        id: "0",
        name: "All",
        des: "all",
        created_date: "2021-11-15T16:07:07.401Z"
      }
    ];
    items: any = [];
    itemFilter: any[] = [];

    constructor(private itemService: ItemService, private categoryService: CategoryService, private router: Router) {

    }

    ngOnInit(): void {
      this.itemService.getAllItems().subscribe((result: any) => {
        this.items = result;
        this.itemFilter = this.items;
      });
      this.categoryService.getAllCategories().subscribe((result: any) => {
        result.forEach((e: any) => {
          this.categories.push(e);
        });
      });
    }

    onClickItem(item: any): void {
      this.itemService.addOrderItem(item);
    }

    filterCategory(value: any){
      if (value === '0') {
        this.itemFilter = this.items;
      } else {
        this.itemFilter = this.items.filter((i:any) => i.category_id === value);
      }
    }
}
