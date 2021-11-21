import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { ItemService } from "../services/item.service";
import { CategoryService } from "../services/category.service";

@Component({
    selector: 'app-item-form',
    templateUrl: './item-form.component.html',
    styleUrls: ['./item-form.component.scss']
})

export class ItemFormComponent {
    categories: any = [];
    form: FormGroup;
    
    constructor(private router: Router, private fb: FormBuilder, private itemService: ItemService, private categoryService: CategoryService) {
        this.form = fb.group({
            name: new FormControl(null),
            category: new FormControl(null),
            price: new FormControl(null),
            image: new FormControl(null)
          });
        this.categories = categoryService.getAllCategories();
        console.log(this.categories);
    }

    onCancel(): void {
        this.router.navigate(['/item-list']);
      }
    
    onSubmit(): void {
        console.log(this.form.value);
        this.itemService.addItem({
            title: this.form.value.name,
            category_id: this.form.value.category,
            price: this.form.value.price,
            pic: this.form.value.image
        });
        this.router.navigate(['/shop']);
    }
    
}