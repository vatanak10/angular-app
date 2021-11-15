import { Injectable } from "@angular/core";
import { ItemService } from "./item.service";

@Injectable()
export class CategoryService {
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

    getAllCategories() {
        return this.category;
    }
}