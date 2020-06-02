//1. constructor(price,city,date)++
//2. id retun Math.random++
//3. price price++
//4. dateCreated new Date()++
//5. isConfirmed bollean++
//6. dateConfirmed null++
//7. city city++
//8. type type++
//9. checkPrice if price > 1000 return true else false++
//10. if confirmOrder isConfirmed true dateConfirmed = new Date()  (if product has not been confirmed before) ++
//11. isValidType if type buy === true and sell === true return true and false another moment ++

export class Order {
    constructor(price, city, type) {
        this.id = `${Math.random()}`;
        this.price = price;
        this.dateCreated = new Date();
        this.isConfirmed = false;
        this.dateConfirmed = null;
        this.city = city;
        this.type = type;
    }

    checkPrice() {
        if (this.price > 1000) return true;
        else {
            return false;
        }
    }

    confirmOrder() {
        this.isConfirmed = true;
        this.dateConfirmed = new Date();
    }

    isValidType() {
        if (this.type === 'Buy' || this.type === 'Sell') return true;
        else {
            return false;
        }
    }
}

// const order1 = new Order(100, 'Odessa', 'Buy');
// const order2 = new Order(150, 'Kiev', 'false');
// console.log(order1);
// console.log(order2);