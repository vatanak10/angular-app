import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-supplier-form',
  templateUrl: './supplier-form.component.html',
  styleUrls: ['./supplier-form.component.scss']
})
export class SupplierFormComponent implements OnInit {
  form: FormGroup;
  submitText = "Add Supplier"

  constructor(private fb: FormBuilder, private router: Router, private supplierService: SupplierService, private toastr: ToastrService) {
    this.form = this.fb.group({
      name: new FormControl(null),
      address: new FormControl(null),
      phone: new FormControl(null)
    });
  }

  ngOnInit(): void {

  }

  onCancel(): void {
    this.router.navigate(['/categories']);
  }

  onSubmit() {
    this.supplierService.addSupplier({
      name: this.form.value.name,
      address: this.form.value.address,
      phone: this.form.value.phone
    })
    .subscribe((res: any) => {
      console.log(res);
    });
    this.toastr.success("New Category Added!", "Success!");
    this.router.navigate(['/suppliers']);
  }
}
