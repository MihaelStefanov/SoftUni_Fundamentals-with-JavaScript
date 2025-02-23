function orders(product, qty) {
    product = product.toLowerCase();

    let productObj = {
        water: 1.00,
        coffee: 1.50,
        coke: 1.40,
        snacks: 2.00,
        redbull: 3.50
    }

    let calc = (product, qty) => (productObj[product] * qty).toFixed(2);

    return calc(product, qty);

}

console.log(orders("Water", 5));
console.log(orders("CoFfEe", 2));
console.log(orders("RedBull", 2));
