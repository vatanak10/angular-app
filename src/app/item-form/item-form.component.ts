import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
    selector: 'app-item-form',
    templateUrl: './item-form.component.html',
    styleUrls: ['./item-form.component.scss']
})

export class ItemFormComponent {
    form: FormGroup;
    
    constructor(private router: Router, private fb: FormBuilder) {
        this.form = fb.group({
            name: new FormControl(null),
            category: new FormControl(null),
            price: new FormControl(null),
            image: new FormControl(null)
          });
    }

    onCancel(): void {
        this.router.navigate(['/item-list']);
      }
    
    onSubmit(): void {
    console.log(this.form.value);
    this.router.navigate(['/item-list']);
    }
    
}