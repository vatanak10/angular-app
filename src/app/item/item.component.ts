import { Component, EventEmitter, Input, Output} from "@angular/core";

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})

export class ItemComponent {
    @Input() itemList: any;
    @Output() clickItem = new EventEmitter();

    constructor() {
      console.log(this.itemList);
    }

    onClickItem(item: any): void {
      console.log(item);
      console.log('stnd on list item');
      this.clickItem.emit(item);
    }
}