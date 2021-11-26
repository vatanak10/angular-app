import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {
  form: FormGroup;
  submitText = "Add Category"

  constructor(private fb: FormBuilder, private toastr: ToastrService, private router: Router, private categoryService: CategoryService, private route: ActivatedRoute) {
    this.form = fb.group({
      name: new FormControl(null),
      description: new FormControl(null),
    });
  }

  ngOnInit(): void {

  }

  onCancel(): void {
    this.router.navigate(['/categories']);
  }

  onSubmit() {
    this.categoryService.addCategory({
      name: this.form.value.name,
      description: this.form.value.description
    })
    .subscribe((res: any) => {
      console.log(res);
    });
    this.toastr.success("New Category Added!", "Success!");
    this.router.navigate(['/categories']);
  }

}
