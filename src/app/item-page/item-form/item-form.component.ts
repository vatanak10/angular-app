import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ItemService } from "../../services/item.service";
import { CategoryService } from "../../services/category.service";

@Component({
    selector: 'app-item-form',
    templateUrl: './item-form.component.html',
    styleUrls: ['./item-form.component.scss']
})

export class ItemFormComponent implements OnInit{
    hide = false;
    categories: any = [];
    form: FormGroup;

    constructor(private router: Router, private fb: FormBuilder, private itemService: ItemService, private categoryService: CategoryService) {
        this.form = fb.group({
            name: new FormControl(null),
            category: new FormControl(null),
            price: new FormControl(null),
            image: new FormControl(null),
            is_stock: new FormControl(null),
            stock: new FormControl({value: null, disabled: true}),
            supplier: new FormControl({value: null, disabled: true})
          });
        this.categoryService.getAllCategories().subscribe((result: any) => {
          this.categories = result;
        });
    }
    ngOnInit(): void {
    }

    onToggle(): void {
      if (this.form.controls['stock'].disabled) {
        this.hide = !this.hide;
        this.form.controls['stock'].enable();
        this.form.controls['supplier'].enable();
      } else {
        this.hide = !this.hide;
        this.form.controls['stock'].disable();
        this.form.controls['supplier'].disable();
      }
    }

    onCancel(): void {
        this.router.navigate(['/items']);
      }

    onSubmit(): void {
        console.log({
          title: this.form.value.name,
          category_id: this.form.value.category,
          price: this.form.value.price,
          pic: this.form.value.image,
          is_stock: this.hide,
          stock: this.form.value.stock,
          supplier_id: this.form.value.supplier
      });
        this.itemService.addItem({
            title: this.form.value.name,
            category_id: this.form.value.category,
            price: this.form.value.price,
            pic: this.form.value.image,
            is_stock: this.hide,
            stock: this.form.value.stock,
            supplier_id: this.form.value.supplier
        });
        this.router.navigate(['/items']);
    }

}
