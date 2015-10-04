// Expressions worksheet Dylan Hunter

var originalPrice = prompt ( "original price of item");
var discount = prompt("enter the discount on the item, enter as desimal");
var description = prompt("describe the item here to give me some more information");
var salesTax = prompt("finally enter the sales tax, enter as desimal");

var discountPrice = Number(originalPrice) * Number(discount);
var newPrice = Number(originalPrice) - discountPrice;
var price = newPrice * Number(salesTax);
var finallPrice = newPrice - price;

alert("the price of " + description + " is " + newPrice + " after discount and without tax. with discount and tax the finall price is " + finallPrice);




















