import { Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
import { Router } from "@angular/router";
import { CategoryService } from "../services/category.service";
import { ItemService } from "../services/item.service";

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})

export class ItemComponent implements OnInit{
    categories: any[] = [];
    @Input() items: any = [];  

    constructor(private itemService: ItemService, private categoryService: CategoryService, private router: Router) {
      this.items = this.categoryService.getfilteredItems();
      this.categoryService.refreshItemList.subscribe((s) => {
          this.items = this.categoryService.getfilteredItems();
      });
    }
  
    ngOnInit(): void {
      this.items = this.itemService.getAllItems();
      this.categories = this.categoryService.getAllCategories();
      this.categories.push({
          id: "0",
          name: "All",
          des: "all",
          created_date: "2021-11-15T16:07:07.401Z"
      });
      console.log(this.categories);
      console.log(this.items);
    }

    onClickItem(item: any): void {
      this.itemService.addOrderItem(item);
    }

    filterCategory(value: any){
      // console.log(value);
      // console.log(this.categoryService.getfilteredItems());
      this.items = this.categoryService.filterByCategory(value);
    }
}