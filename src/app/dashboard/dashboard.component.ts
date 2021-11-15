import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CategoryService } from "../services/category.service";
import { ItemService } from "../services/item.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit{
    categories: any[] = [];
    list_order: any[] = [];
  
    constructor(private itemService: ItemService, private router: Router, private categoryService: CategoryService) {
        
    }

    ngOnInit(): void {
        this.list_order = this.itemService.getOrderItem();
        this.categories = this.categoryService.getAllCategories();
        console.log(this.categories);
    }
    
}