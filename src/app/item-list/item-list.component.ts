import { Component, OnInit, Input, Inject } from "@angular/core";
import { Router } from "@angular/router";
import { ItemService } from "../services/item.service";
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
    item: {
        name: string;
        category: string;
        price: string;
        img: string;
    }
}

@Component({
    selector: 'app-item-list',
    templateUrl: './item-list.component.html',
    styleUrls: ['./item-list.component.scss']
})

export class ItemListComponent implements OnInit {
    displayedColumns: string[] = ['id', 'name', 'category', 'price'];
    items: any = [];
    @Input() itemList: any;
    item: any = {
        img: "",    
        name: "",
        category: "",
        price: ""
    }

    constructor(private itemService: ItemService, private router: Router, public dialog: MatDialog) {
      this.items = this.itemService.getAllItems();
    }

    ngOnInit(): void {

    }

    onClickAddNew(): void {
        this.router.navigate(['/item-list/create']);
    }
    openDialog(): void {
        const dialogRef = this.dialog.open(ItemFormComponent, {
            width: '350px',
            data: {
                item:{
                    name: this.item.name, 
                    category: this.item.category,
                    price: this.item.price,
                    img: this.item.img
                }               
            },
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          this.item = result;
          this.items.push({ ...this.item});
        });
      }
}

@Component({
    selector: 'app-item-form',
    templateUrl: 'item-form.component.html',
    styleUrls: ['./item-list.component.scss']
  })
export class ItemFormComponent {

    constructor(
        public dialogRef: MatDialogRef<ItemFormComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData, 
        private router: Router
    ) {

    }

    onNoClick(): void {
        this.dialogRef.close();
    }
}