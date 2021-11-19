import { HttpClient, HttpClientModule } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { ItemService } from "./item.service";


@Injectable()
export class CategoryService {
    current_category: any = "all";
    category: any[] = [];

    constructor(private itemService: ItemService, private http: HttpClient){
        
    }

    items: any = []
    filteredItems: any = [];

    refreshItemList = new EventEmitter();

    getAllCategories() {  
        this.category = [];
        this.http
        .get(
            'http://ec2-18-141-58-241.ap-southeast-1.compute.amazonaws.com:8081/category'
        )
        .toPromise()
        .then((result: any) => {
            result.data.forEach((r: any) => {
                this.category.push({
                    id: r.id,
                    name: r.name,
                    des: r.description,
                    created_date: r.created_date
                });
            });
        });
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
        if(value !== "0"){
            this.filteredItems = this.items.filter((i:any) => i.category === value); //filter function here
        } else {
            this.filteredItems = this.items;
        }
        this.current_category = value;
        console.log(value);
        console.log(this.items);
        console.log(this.filteredItems);
        return this.filteredItems;
    }
}