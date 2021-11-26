import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { CategoryService } from "../../services/category.service";
import { ItemService } from "../../services/item.service";


@Component({
    selector: 'app-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.scss']
})

export class ItemListComponent implements OnInit {
    displayedColumns: string[] = ['id', 'name', 'category', 'stock', 'price', 'config'];
    items: any;
    loading = false;

    constructor(private itemService: ItemService, private router: Router, private categoryService: CategoryService, private toastr: ToastrService) {
    }

    ngOnInit(): void {
      this.getData();
    }

    getData() {
      this.loading = true;
      this.itemService.getAllItems().subscribe((result: any) => {
        this.items = result;
        this.loading = false;
      });
    }

    onClickAddNew(): void {
        this.router.navigate(['/items/create']);
    }

    onEdit(id: any){
        // this.ItemService.editItem(id);
        this.router.navigate([`/items/edit/${id}`]);
        console.log(id);
    }

    onDelete(id: any) {
      if (confirm("Are you sure about that?")) {
        this.itemService.deleteItem(id).subscribe((res: any) => {
          this.getData();
        });
        console.log(id);
        this.toastr.success("Product Deleted!", "Success!"); //Left: Des, Right: Title
      }
    }
}
