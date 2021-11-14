import { Component, OnInit } from "@angular/core";
import { ItemService } from "../services/item.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit{
    list_order: any[] = [];
  
    constructor(private itemService: ItemService) {
        this.list_order = this.itemService.getOrderItem();
    }

    ngOnInit(): void {
        
    }
    
}