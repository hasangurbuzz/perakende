export class Product {
    constructor(name, image, category, price) {
        this.id = Math.floor(Math.random() * 99999);
        this.name = name;
        this.image = image;
        this.category = category;
        this.price = price;
    }

    static createFromDto = (productDto) => {
        const {name, image, category, price} = productDto;
        return new Product(name, image, category, price);
    }
}