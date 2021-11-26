import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {
  displayedColumns: string[] = ['order', 'total', 'date', 'config'];
  orders: any;

  constructor(private orderService: OrderService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.orderService.getAllOrders().subscribe((result: any) => {
      this.orders = result;
    });
  }

  onEdit(id: any){
    console.log(id);
    this.toastr.warning("Function Currently in Construction...", "Coming Soon!");
  }

  onDelete(id: any) {
      console.log(id);
      this.toastr.warning("Function Currently in Construction...", "Coming Soon!");
  }
}
