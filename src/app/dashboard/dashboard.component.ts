import { Component } from "@angular/core";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent {
    order_items: any[] = [];
    items: any[] = [
        {
            id : '1',
            img : 'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F0x0.jpg%3FcropX1%3D790%26cropX2%3D5350%26cropY1%3D784%26cropY2%3D3349',
            name: 'Car',
            price: '$ 20000'
        },
        {
            id : '2',
            img : 'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F0x0.jpg%3FcropX1%3D790%26cropX2%3D5350%26cropY1%3D784%26cropY2%3D3349',
            name: 'Car',
            price: '$ 30000'
        },
        {
            id : '3',
            img : 'https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607',
            name: 'House',
            price: '$ 45000'
        }
    ];

    addListOrder(item: any) {
        const value = this.order_items.find((l) => l.id === item.id);
        if (value) {
          let index = this.order_items.indexOf(value);
          this.order_items[index] = { ...item, qty: value.qty + 1 };
        } else {
          this.order_items.push({ ...item, qty: 1 });
        }
      }

    onClickItem(item: any): void {
        console.log('on click item on content component');
        var obj = {
            id: item.id,
            img: item.img,    
            name: item.name,
            price: item.price
        }
        this.addListOrder(obj);
        console.log(this.order_items);
    }
}