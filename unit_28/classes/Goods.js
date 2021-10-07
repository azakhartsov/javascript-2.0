class Goods {
  constructor(name, amount, image, count) {
    this.name = name;
    this.amount = amount;
    this.image = image;
    this.count = count;
  }
  showGoods() {
    console.log(`Name: ${this.name}, Amount: ${this.amount}`);
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

    return div;
  }
}
