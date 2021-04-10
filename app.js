// Variables declaration
var divContainer = document.querySelector('.container')
var row1 = document.createElement("div")
var row2 = document.createElement("div")
var row3 = document.createElement("div")
var div1 = document.createElement("div")
var div2 = document.createElement("div")
var div3 = document.createElement("div")
var div4 = document.createElement("div")
var div1_column1 = document.createElement("div")
var div1_column2 = document.createElement("div")
var div2_column1 = document.createElement("div")
var div2_column2 = document.createElement("div")
var div3_column1 = document.createElement("div")
var div3_column2 = document.createElement("div")
var div4_column1 = document.createElement("div")
var div4_column2 = document.createElement("div")
var product1Tag = document.createElement("img")
var product2Tag = document.createElement("img")
var product3Tag = document.createElement("img")
var product4Tag = document.createElement("img")

var title_div1 = document.createElement("div")
var price_div1 = document.createElement("div")
var stock_div1 = document.createElement("div")
var description_div1 = document.createElement("div")
var imageURL_div1 = document.createElement("div")

var addToCart1 = document.createElement("button")
var removeFromCart1 = document.createElement("button")

var title_div2 = document.createElement("div")
var price_div2 = document.createElement("div")
var stock_div2 = document.createElement("div")
var description_div2 = document.createElement("div")
var imageURL_div2 = document.createElement("div")

var addToCart2 = document.createElement("button")
var removeFromCart2 = document.createElement("button")

var title_div3 = document.createElement("div")
var price_div3 = document.createElement("div")
var stock_div3 = document.createElement("div")
var description_div3 = document.createElement("div")
var imageURL_div3 = document.createElement("div")

var addToCart3 = document.createElement("button")
var removeFromCart3 = document.createElement("button")

var title_div4 = document.createElement("div")
var price_div4 = document.createElement("div")
var stock_div4 = document.createElement("div")
var description_div4 = document.createElement("div")
var imageURL_div4 = document.createElement("div")

var addToCart4 = document.createElement("button")
var removeFromCart4 = document.createElement("button")

var breakTag1 = document.createElement("br")
var breakTag2 = document.createElement("br")
var breakTag3 = document.createElement("br")
var breakTag4 = document.createElement("br")

var cartSection = document.createElement("div")
var cartDetailsTitle = document.createElement("div")
var cartColumn1 = document.createElement("div")
var cartColumn2 = document.createElement("div")
var cartColumn3 = document.createElement("div")
var cartColumn4 = document.createElement("div")
var cartDetails = document.createElement("div")

var cartDetailsColumn1 = document.createElement("div")
var cartDetailsColumn2 = document.createElement("div")
var cartDetailsColumn3 = document.createElement("div")
var cartDetailsColumn4 = document.createElement("div")


var cartDetailsColumn1_div1 = document.createElement("div")
var cartDetailsColumn1_div2 = document.createElement("div")
var cartDetailsColumn1_div3 = document.createElement("div")
var cartDetailsColumn1_div4 = document.createElement("div")

var cartDetailsColumn2_div1 = document.createElement("div")
var cartDetailsColumn2_div2 = document.createElement("div")
var cartDetailsColumn2_div3 = document.createElement("div")
var cartDetailsColumn2_div4 = document.createElement("div")

var cartDetailsColumn3_div1 = document.createElement("div")
var cartDetailsColumn3_div2 = document.createElement("div")
var cartDetailsColumn3_div3 = document.createElement("div")
var cartDetailsColumn3_div4 = document.createElement("div")

var cartDetailsColumn4_div1 = document.createElement("div")
var cartDetailsColumn4_div2 = document.createElement("div")
var cartDetailsColumn4_div3 = document.createElement("div")
var cartDetailsColumn4_div4 = document.createElement("div")

//  Append rows to divContainer
divContainer.appendChild(row1)
divContainer.appendChild(row2)
divContainer.appendChild(row3)


// Add classNames to row1 and row2
row1.className = "row1"
row2.className = "row2"
row3.className = "row3"



// Append div1,div2...div4 and cartSection to rows
row1.appendChild(div1)
row1.appendChild(div2)
row2.appendChild(div3)
row2.appendChild(div4)
row3.appendChild(cartSection).style.fontSize = "40px"
row3.appendChild(cartDetailsTitle)
row3.appendChild(cartDetails)




// row3.appendChild(cartDetailsdiv1)
// row3.appendChild(cartDetailsdiv2)
// row3.appendChild(cartDetailsdiv3)
// row3.appendChild(cartDetailsdiv4)


// Appending and creating text nodes to cartSection
cartSection.appendChild(document.createTextNode("Cart Section"))

// Adding Classname to cartDetails
cartDetailsTitle.className = "cartDetailsTitle"

// Appending cartColumns to cartDetails
cartDetailsTitle.appendChild(cartColumn1)
cartDetailsTitle.appendChild(cartColumn2)
cartDetailsTitle.appendChild(cartColumn3)
cartDetailsTitle.appendChild(cartColumn4)

// Adding className to cartColumn
cartColumn1.className = "cartColumn"
cartColumn2.className = "cartColumn"
cartColumn3.className = "cartColumn"
cartColumn4.className = "cartColumn"

// Appending and creating text node to cartColumns
cartColumn1.appendChild(document.createTextNode("column1"))
cartColumn2.appendChild(document.createTextNode("column2"))
cartColumn3.appendChild(document.createTextNode("column3"))
cartColumn4.appendChild(document.createTextNode("column4"))


//Appending cartDetailsColumns to cartDetails
cartDetails.appendChild(cartDetailsColumn1) 
cartDetails.appendChild(cartDetailsColumn2) 
cartDetails.appendChild(cartDetailsColumn3) 
cartDetails.appendChild(cartDetailsColumn4) 

// Adding className to cartDetails
cartDetails.className = "cartDetails"

// Addind className to cartDetailsColums
cartDetailsColumn1.className = "cartDetailsColumn"
cartDetailsColumn2.className = "cartDetailsColumn"
cartDetailsColumn3.className = "cartDetailsColumn"
cartDetailsColumn4.className = "cartDetailsColumn"

// Appending detail divs to cartDetailsColumns
cartDetailsColumn1.appendChild(cartDetailsColumn1_div1)
cartDetailsColumn1.appendChild(cartDetailsColumn2_div1)
cartDetailsColumn1.appendChild(cartDetailsColumn3_div1)
cartDetailsColumn1.appendChild(cartDetailsColumn4_div1)



// Adding ids to the divs
div1.id = "row1-column1"
div2.id = "row1-column2"
div3.id = "row2-column1"
div4.id = "row2-column2"

// Appending div_columns to div1,div2,...,div4
div1.appendChild(div1_column1)
div1.appendChild(div1_column2)
div2.appendChild(div2_column1)
div2.appendChild(div2_column2)
div3.appendChild(div3_column1)
div3.appendChild(div3_column2)
div4.appendChild(div4_column1)
div4.appendChild(div4_column2)

// Adding ids to div_columns
div1_column1.id = "row1_div1_column1"
div1_column2.id = "row1_div1_column2"
div2_column1.id = "row1_div2_column1"
div2_column2.id = "row1_div2_column2"
div3_column1.id = "row2_div3_column1"
div3_column2.id = "row2_div3_column2"
div4_column1.id = "row2_div4_column1"
div4_column2.id = "row2_div4_column2"

// Adding ids to imageURLs
imageURL_div1.id = "imageURL_div1"
imageURL_div2.id = "imageURL_div2"
imageURL_div3.id = "imageURL_div3"
imageURL_div4.id = "imageURL_div4"

// Adding ids to Buttons
addToCart1.id = "addToCart1"
addToCart2.id = "addToCart2"
addToCart3.id = "addToCart3"
addToCart4.id = "addToCart4"

removeFromCart1.id = "removeFromCart1"
removeFromCart2.id = "removeFromCart2"
removeFromCart3.id = "removeFromCart3"
removeFromCart4.id = "removeFromCart4"

// Append and create text nodes for the buttons
addToCart1.appendChild(document.createTextNode("Add to Cart"))
addToCart2.appendChild(document.createTextNode("Add to Cart"))
addToCart3.appendChild(document.createTextNode("Add to Cart"))
addToCart4.appendChild(document.createTextNode("Add to Cart"))

removeFromCart1.appendChild(document.createTextNode("Remove from Cart"))
removeFromCart2.appendChild(document.createTextNode("Remove from Cart"))
removeFromCart3.appendChild(document.createTextNode("Remove from Cart"))
removeFromCart4.appendChild(document.createTextNode("Remove from Cart"))

// // Adding values to buttons
// addToCart1.value = "Add to Cart"
// addToCart2.value = "Add to Cart"
// addToCart3.value = "Add to Cart"
// addToCart4.value = "Add to Cart"

// removeFromCart1.value = "Remove from Cart"
// removeFromCart2.value = "Remove from Cart"
// removeFromCart3.value = "Remove from Cart"
// removeFromCart4.value = "Remove from Cart"



// // Append and create text node to div_columns
// div1_column1.appendChild(document.createTextNode("div1_column1"))
// div1_column2.appendChild(document.createTextNode("div1_column2"))
// div2_column1.appendChild(document.createTextNode("div2_column1"))
// div2_column2.appendChild(document.createTextNode("div2_column2"))
// div3_column1.appendChild(document.createTextNode("div3_column1"))
// div3_column2.appendChild(document.createTextNode("div3_column2"))
// div4_column1.appendChild(document.createTextNode("div4_column1"))
// div4_column2.appendChild(document.createTextNode("div4_column2"))


// Setting attribute of the product image tag
product1Tag.setAttribute("src","Images/boot.jpg")
product2Tag.setAttribute("src","Images/boot1.webp")
product3Tag.setAttribute("src","Images/boot3.webp")
product4Tag.setAttribute("src","Images/boot2.jpg")

product1Tag.setAttribute("alt","Image of product")
product2Tag.setAttribute("alt","Image of product")
product3Tag.setAttribute("alt","Image of product")
product4Tag.setAttribute("alt","Image of product")



// Appending product images tags to div_columns and styling the product
div1_column1.appendChild(product1Tag).style.width = "200px"
div1_column1.appendChild(product1Tag).style.height = "200px"
div1_column1.appendChild(product1Tag).style.marginLeft = "35px"

div2_column1.appendChild(product2Tag).style.height = "200px"
div2_column1.appendChild(product2Tag).style.height = "200px"
div2_column1.appendChild(product2Tag).style.marginLeft = "30px"


div3_column1.appendChild(product3Tag).style.height = "200px"
div3_column1.appendChild(product3Tag).style.height = "200px"
div3_column1.appendChild(product3Tag).style.marginLeft = "35px"


div4_column1.appendChild(product4Tag).style.height = "200px"
div4_column1.appendChild(product4Tag).style.height = "200px"
div4_column1.appendChild(product4Tag).style.marginLeft = "30px"

// Appending product item content
div1_column2.appendChild(title_div1)
div1_column2.appendChild(price_div1)
div1_column2.appendChild(stock_div1)
div1_column2.appendChild(breakTag1)
div1_column2.appendChild(description_div1)
div1_column2.appendChild(imageURL_div1)
div1_column2.appendChild(addToCart1)
div1_column2.appendChild(removeFromCart1)

div2_column2.appendChild(title_div2)
div2_column2.appendChild(price_div2)
div2_column2.appendChild(stock_div2)
div2_column2.appendChild(breakTag2)
div2_column2.appendChild(description_div2)
div2_column2.appendChild(imageURL_div2)
div2_column2.appendChild(addToCart2)
div2_column2.appendChild(removeFromCart2)

div3_column2.appendChild(title_div3)
div3_column2.appendChild(price_div3)
div3_column2.appendChild(stock_div3)
div3_column2.appendChild(breakTag3)
div3_column2.appendChild(description_div3)
div3_column2.appendChild(imageURL_div3)
div3_column2.appendChild(addToCart3)
div3_column2.appendChild(removeFromCart3)

div4_column2.appendChild(title_div4)
div4_column2.appendChild(price_div4)
div4_column2.appendChild(stock_div4)
div4_column2.appendChild(breakTag4)
div4_column2.appendChild(description_div4)
div4_column2.appendChild(imageURL_div4)
div4_column2.appendChild(addToCart4)
div4_column2.appendChild(removeFromCart4)


// Appending and creating text nodes to product item content
title_div1.appendChild(document.createTextNode("Product title: Mario Fagni Hand Weaved Black Sneaker"))
price_div1.appendChild(document.createTextNode("Price:GHS 100.00"))
stock_div1.appendChild(document.createTextNode("Stock: 2"))
description_div1.appendChild(document.createTextNode("Description: This sneaker is made from hand weaved calfskin leather and has an additional top leather accessories  on top of a plain leather that beautifies it."))
imageURL_div1.appendChild(document.createTextNode("ImageURL:"))

title_div2.appendChild(document.createTextNode("Product title:  Plain And Patterned Calfskin White Nappa"))
price_div2.appendChild(document.createTextNode("Price: GHS 150.00"))
stock_div2.appendChild(document.createTextNode("Stock: 4"))
description_div2.appendChild(document.createTextNode("Description: This shoe is made from Plain and Patterned calfskin leather.The shoe has an expandable underneath the top cover that accommodate high Upper feet"))
imageURL_div2.appendChild(document.createTextNode("ImageURL:"))

title_div3.appendChild(document.createTextNode("Product title: Rossi Toehold Sneaker - Black"))
price_div3.appendChild(document.createTextNode("Price: GHS 250.00"))
stock_div3.appendChild(document.createTextNode("Stock: 4"))
description_div3.appendChild(document.createTextNode("Description: This Sneaker is made from Authentic Calf Skin Leather. It has a Leather Sole with additional rubber mid fit  for a firm grip of the slippers on the floor"))
imageURL_div3.appendChild(document.createTextNode("ImageURL:"))

title_div4.appendChild(document.createTextNode("Product title:"))
price_div4.appendChild(document.createTextNode("Price:"))
stock_div4.appendChild(document.createTextNode("Stock:"))
description_div4.appendChild(document.createTextNode("Description: "))
imageURL_div4.appendChild(document.createTextNode("ImageURL:"))













// Computation to add an item to Cart
// Algorithm

//  creat cart button
// add event listeners click
// add a function to add items to cart


