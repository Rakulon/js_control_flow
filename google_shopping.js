var data = require("./products.json")

// Write your solutions below
var data = require("./products.json")

// Write your solutions below
for (i = 0; i < data.items.length; i++) {
 	if (data.items[i]["kind"] === "shopping#product") {
 		count++;
 	}
 }
console.log(count)

console.log(data["items"]);
