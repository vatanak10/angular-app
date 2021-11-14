import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    selector: 'app-item-form',
    templateUrl: './item-form.component.html',
    styleUrls: ['./item-form.component.scss']
})

export class ItemFormComponent {
    constructor(private router: Router) {

    }
    
}