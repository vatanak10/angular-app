import { Component, EventEmitter, Input, OnInit, Output} from "@angular/core";
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

    constructor(private itemService: ItemService, private categoryService: CategoryService) {
      this.items = this.categoryService.getfilteredItems();
      this.categoryService.refreshItemList.subscribe((s) => {
          this.items = this.categoryService.getfilteredItems();
      });
    }
  
    ngOnInit(): void {
      this.items = this.itemService.getAllItems();
      this.categories = this.categoryService.getAllCategories();
    }

    onClickItem(item: any): void {
      this.itemService.addOrderItem(item);
    }

    filterCategory(value: any){
      this.categoryService.filterByCategory(value);
      // console.log(value);
      // console.log(this.items);
      // console.log(this.categoryService.getfilteredItems());
      this.items = this.categoryService.getfilteredItems();
    }
}