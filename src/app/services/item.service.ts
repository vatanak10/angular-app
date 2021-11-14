import { EventEmitter, Injectable } from "@angular/core";

@Injectable()
export class ItemService {
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

    list_order: any[] = [];

    refreshListOrder = new EventEmitter();

    getAllItems() {
        return this.items;
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
    }
}