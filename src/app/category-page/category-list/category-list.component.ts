import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
export class CategoryListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'description', 'config'];
  categories: any;

  constructor(private categoryService: CategoryService, private router: Router) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe((result: any) => {
      this.categories = result;
    });
  }

  onClickAddNew(): void {
    this.router.navigate(['/items/create']);
  }

  onEdit(id: any){
    // this.ItemService.editItem(id);
      console.log(id);
  }

  onDelete(id: any) {
      this.categoryService.deleteCategory(id);
      console.log(id);
  }

}
