// Expressions worksheet Dylan Hunter

var numberOfPeople = prompt ("how many people are at the party eating pizza");
var numberOfPizzasOrdered = prompt("how many pizzas will be ordered");
var numberOfSlicesInEachPizza = prompt ("how mnay slices are in each pizza");

var sparkysSlices = numberOfPizzasOrdered * numberOfSlicesInEachPizza % numberOfPeople;

console.log(sparkysSlices);

alert ("sparky got to eat " + sparkysSlices + " slices");











