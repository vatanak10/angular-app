import { EventEmitter, Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable()
export class ItemService {
    items: any[] = [
        {
            id : '1',
            img : 'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F0x0.jpg%3FcropX1%3D790%26cropX2%3D5350%26cropY1%3D784%26cropY2%3D3349',
            name: 'Car',
            category: 'vehicle',
            price: '20000'
        },
        {
            id : '2',
            img : 'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F5d35eacaf1176b0008974b54%2F0x0.jpg%3FcropX1%3D790%26cropX2%3D5350%26cropY1%3D784%26cropY2%3D3349',
            name: 'Car',
            category: 'vehicle',
            price: '30000'
        },
        {
            id : '3',
            img : 'https://images.adsttc.com/media/images/5ecd/d4ac/b357/65c6/7300/009d/large_jpg/02C.jpg?1590547607',
            name: 'House',
            category: 'property',
            price: '45000'
        }
    ];

    list_order: any[] = [];

    refreshListOrder = new EventEmitter();

    constructor(private http: HttpClient, private router: Router) {}

    getAllItems() {
        this.items = [];
        return this.http.get(
        'http://ec2-18-141-58-241.ap-southeast-1.compute.amazonaws.com:8081/item'
        );
        // this.items = [];
        // this.http
        // .get(
        //     'http://ec2-18-141-58-241.ap-southeast-1.compute.amazonaws.com:8081/item'
        // )
        // .toPromise()
        // .then((result: any) => {
        //     result.data.forEach((r: any) => {
        //         this.items.push({
        //             id: r.id,
        //             img: r.pic,
        //             name: r.title,
        //             category: r.category_id,
        //             price: r.price 
        //         });
        //     });
        // });
        // return this.items;
    }

    getOrderItem() {
        return this.list_order;
    }

    addOrderItem(item: any) {
        const value = this.list_order.find((i) => i.id == item.id);
        if(value) {
            let index = this.list_order.indexOf(value);
            this.list_order[index] = { ...item, qty: value.qty + 1 };
        } else {
            this.list_order.push({ ...item, qty: 1 });
        }
    }

    increaseItemQty(item: any) {
        const value = this.list_order.find((i) => i.id === item.id);
        if(value) {
            let index = this.list_order.indexOf(value);
            this.list_order[index] = { ...item, qty: value.qty + 1 };
        }
    }

    decreaseItemQty(item: any) {
        const value = this.list_order.find((i) => i.id === item.id);
        if(value && value.qty > 1) {
            let index = this.list_order.indexOf(value);
            this.list_order[index] = { ...item, qty: value.qty - 1 };
        }
    }

    deleteOrderItem(item: any) {
        this.list_order = this.list_order.filter((i) => i.id !== item.id);
        this.refreshListOrder.emit();
    }

    addItem(item: any) {
        // this.items.push(({ ...item, id: this.items.length + 1 }));
        // console.log(this.items);
        this.http
        .post(
            'http://ec2-18-141-58-241.ap-southeast-1.compute.amazonaws.com:8081/item',
            item
        )
        .toPromise()
        .then((result: any) => {
            console.log(result);
            this.router.navigate(['/item-list']);
        });
    }

    deleteItem(id: any) {
        this.http
          .post(
            'http://ec2-18-141-58-241.ap-southeast-1.compute.amazonaws.com:8081/item/delete',
            {id: id}
          )
          .toPromise()
          .then((result: any) => {
            console.log(result);
          });
      }
}