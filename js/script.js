// Expressions worksheet Dylan Hunter

var groceryCost = [prompt ("week one grocery cost"), prompt("week two grocery cost"), prompt("week three grocery cost"), prompt("week four grocery cost"),
prompt("week five grocery cost")];
var totalCost = groceryCost[0]  + groceryCost[1]  + groceryCost[2] + groceryCost[3]
    + groceryCost[4];

var average = totalCost/5;

alert( "you have spent " + totalCost, " on groceries over 5 weeks.", "\nyour avergage grocery cost is " + average);















