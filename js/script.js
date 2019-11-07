console.log('Have some greens');

// var food = [
// 	{
// 		category: grapes,
// 		id: food,
// 		color: green,
// 		kilograms: 25,
// 		expires: december 2019
// 	}
// ];	

var food = "alvocado";
document.getElementById("food").innerHTML = food.length;


var str = "cheese, watermelon, oranges";
var res = str.slice(-19,-9);
document.getElementById("food").innerHTML = res;


function myFunction() {
  document.getElementById("demo").innerHTML = 10 > 9;
}