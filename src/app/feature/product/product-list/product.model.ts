export class Product {
    name: string;
    price: number | null;
    expectedDeliveryDate: number;
    outOfStock: boolean;

    constructor(name: string, price: number | null, expectedDeliveryDate: number, outOfStock: boolean) {
        this.name = name;
        this.price = price;
        this.expectedDeliveryDate = expectedDeliveryDate;
        this.outOfStock = outOfStock;
    }

    get deliveryDate(): Date {
        const result = new Date();
        result.setDate(result.getDate() + this.expectedDeliveryDate);
        return result;
    }
}
