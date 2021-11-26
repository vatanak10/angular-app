import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ItemService } from "../../services/item.service";
import { CategoryService } from "../../services/category.service";
import { SupplierService } from "src/app/services/supplier.service";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: 'app-item-form',
    templateUrl: './item-form.component.html',
    styleUrls: ['./item-form.component.scss']
})

export class ItemFormComponent implements OnInit{
    submitText = "Add Product";
    hide = false;
    categories: any = [];
    suppliers: any = [];
    form: FormGroup;

    constructor(
      private router: Router,
      private fb: FormBuilder,
      private itemService: ItemService,
      private categoryService: CategoryService,
      private supplierService: SupplierService,
      private toastr: ToastrService,
      private route: ActivatedRoute
    ) {
        this.form = fb.group({
            name: new FormControl(null),
            category: new FormControl(null),
            price: new FormControl(null),
            image: new FormControl(null),
            is_stock: new FormControl(null),
            stock: new FormControl("0"),
            supplier: new FormControl("")
            // stock: new FormControl({value: null, disabled: true}),
            // supplier: new FormControl({value: null, disabled: true})
          });
    }
    ngOnInit(): void {
      this.categoryService.getAllCategories().subscribe((result: any) => {
        this.categories = result;
      });
      this.supplierService.getAllSupplier().subscribe((result: any) => {
        this.suppliers = result;
      });

      if (this.route.snapshot.params['id']) {
        this.itemService.getAllItems().subscribe((res: any) => {
          const item = res.find(
            (d: { id: any}) => d.id === this.route.snapshot.params['id']
          );
          if (item !== undefined) {
            this.submitText = "Update Product";
            this.form.patchValue({
              name: item.title,
              category: item.category_id,
              price: item.price,
              image: item.pic,
              is_stock: item.is_stock,
              stock: item.stock,
              supplier: item.suppplier_id
            });
          }
        });
      }
    }

    onToggle(): void {
      this.hide = !this.hide;
      // if (this.form.controls['stock'].disabled) {
      //   this.hide = !this.hide;
      //   this.form.controls['stock'].enable();
      //   this.form.controls['supplier'].enable();
      // } else {
      //   this.hide = !this.hide;
      //   this.form.controls['stock'].disable();
      //   this.form.controls['supplier'].disable();
      // }
    }

    onCancel(): void {
        this.router.navigate(['/items']);
      }

    onSubmit(): void {
      if (this.route.snapshot.params['id']) {
        this.itemService.editItem({
          id: this.route.snapshot.params['id'],
          title: this.form.value.name,
          category_id: this.form.value.category,
          price: this.form.value.price,
          pic: this.form.value.image,
          is_stock: this.hide,
          stock: this.form.value.stock,
          supplier_id: this.form.value.supplier
        })
        .subscribe((res: any) => {
          console.log(res);
        });
        this.toastr.success("Product Updated!", "Success!");
        this.router.navigate(['/items']);
      } else {
        this.itemService.addItem({
          title: this.form.value.name,
          category_id: this.form.value.category,
          price: this.form.value.price,
          pic: this.form.value.image,
          is_stock: this.hide,
          stock: this.form.value.stock,
          supplier_id: this.form.value.supplier
        })
        .subscribe((res: any) => {
          console.log(res);
        });
        this.toastr.success("Product Added!", "Success!");
        this.router.navigate(['/items']);
      }
    }

}
