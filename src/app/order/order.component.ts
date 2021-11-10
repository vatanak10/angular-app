import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-order',
    templateUrl: './order.component.html',
    styleUrls: ['./order.component.scss']
})

export class OrderComponent {
    @Input() list_order: any;
}