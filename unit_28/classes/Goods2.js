class Goods2 extends Goods {
  constructor(name, amount, image, count, sale) {
    super(name, amount, image, count);
    this.sale = sale;
  }
  draw() {
    const div = document.createElement("div");
    const item_name = document.createElement("p");
    item_name.innerHTML = `Name: ${this.name}`;
    div.append(item_name);

    const item_amount = document.createElement("p");
    item_amount.innerHTML = `Amount: ${this.amount}`;
    div.append(item_amount);

    const item_count = document.createElement("p");
    item_count.innerHTML = `In stock: ${this.count}`;
    div.append(item_count);

    const img = document.createElement("img");
    img.src = this.image;
    div.append(img);

    const item_sale = document.createElement("p");
    item_sale.innerHTML = `Onsale: ${this.sale}`;
    div.append(item_sale);

    return div;
  }
}
