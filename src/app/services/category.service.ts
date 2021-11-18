import { EventEmitter, Injectable } from "@angular/core";
import { ItemService } from "./item.service";

@Injectable()
export class CategoryService {
    current_category: any = "all";
    category: any[] = [
        {
            title: "All",
            value: "all"
        },
        {
            title: "Food",
            value: "food"
        },
        {
            title: "Property",
            value: "property"
        },
        {
            title: "Vehicle",
            value: "vehicle"
        }
    ]

    constructor(private itemService: ItemService){
        
    }

    items: any = []
    filteredItems: any = [];

    refreshItemList = new EventEmitter();

    getAllCategories() {
        return this.category;
    }

    getCurrentCategory(){
        return this.current_category;
    }

    getfilteredItems(){
        return this.filteredItems;
    }

    changeCurrentCategory(value: any) {
        this.current_category = value;
    }

    filterByCategory(value: any) {
        this.items = this.itemService.getAllItems();
        if(value != "all"){
            this.filteredItems = this.items.filter((items:any) => items.category === value); //filter function here
        } else {
            this.filteredItems = this.items
        }
        this.current_category = value;
        console.log(this.filteredItems);

    }
}