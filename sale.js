var sale1;
var sale2;
var sale3;
sale1 = {price: 140, taxRate: 15};
sale2 = {price: 40, taxRate:10};
sale3 = {price: 120, taxRate:20};

sale1.tax = sale1.price * sale1.taxRate;
sale2.tax = sale2.price * sale2.taxRate;
sale3.tax = sale3.price * sale3.taxRate;
sale1.total = sale1.price + sale1.tax;
sale2.total = sale2.price + sale2.tax;
sale3.total = sale3.price + sale3.tax;
console.log("price = $" + sale1.total);
console.log("tox @ " + sale1.taxRate + "% = $" + sale1.tax);
console.log("totalcost = $" + sale1.total);

console.log("price = $" + sale2.total);
console.log("tox @ " + sale2.taxRate + "% = $" + sale2.tax);
console.log("totalcost = $" + sale2.total);

console.log("price = $" + sale3.total);
console.log("tox @ " + sale3.taxRate + "% = $" + sale3.tax);
console.log("totalcost = $" + sale3.total);