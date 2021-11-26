import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-supplier-list',
  templateUrl: './supplier-list.component.html',
  styleUrls: ['./supplier-list.component.scss']
})
export class SupplierListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'address', 'contact', 'config'];
  suppliers: any;

  constructor(private supplierService: SupplierService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.supplierService.getAllSuppliers().subscribe((result: any) => {
      this.suppliers = result;
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
