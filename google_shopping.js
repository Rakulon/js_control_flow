

// Write your solutions below
var data = require("./products.json")
var count = 0; 
var backOrderCount = 0;
var imageCount = 0;
var canonCount = 0;
var ebayCanonCount = 0;
// Write your solutions below
for (i = 0; i < data.items.length; i++) {
	var b = data.items[i] 
 	if (b["kind"] === "shopping#product") {
 		count++;
 	}
 	if (b["product"]["inventories"][0]["availability"] === "backorder") {
 		backOrderCount++;
 	}
 	if (b["product"]["images"].length > 1){
 		imageCount++;
 	}
 	if (b["product"]["brand"] === "Canon"){
 		canonCount++;
 	}
 	if (b["product"]["brand"] === "Canon" && b["product"]["author"]["name"].toLowerCase() === "ebay" )  { 
 		ebayCanonCount++;
 	}
 }
console.log("The count of shopping product is", count);
console.log("The count of backorders is", backOrderCount);
console.log("The count of items with more than one image is", imageCount);
console.log("There are ", canonCount, "canon products on this page")
console.log("There are ", ebayCanonCount, "canon products on this page from ebay")

for (i = 0; i < data.items.length; i++) {
	var b = data.items[i]
	var brand = b["product"]["brand"]
	var price = b["product"]["inventories"][0]["price"]
	var image = b["product"]["images"][0]["link"]

	console.log(brand, image, ("$"+price))  
}