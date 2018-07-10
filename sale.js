var sale1;
var sale2;
var sale3;
sale1 = {price: 140, taxRate: 15};
sale2 = {price: 40, taxRate:10};
sale3 = {price: 120, taxRate:20};


var sale;
function calculateTax() {
    sale.tax = sale.price * sale.taxRate / 100;
    sale.total = sale.price + sale.tax;
};
function displaySale() {
    console.log("price = $" + sale.price);
    console.log("tox @ " + sale.taxRate + "% = $" + sale.tax);
    console.log("totalcost = $" + sale.total);
    console.log("\n \n \n");
    
};

sale = sale1;
calculateTax();
displaySale();

sale = sale2;
calculateTax();
displaySale();

sale = sale3;
calculateTax();
displaySale();