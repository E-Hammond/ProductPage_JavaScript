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

var cartSection = document.createElement("span")
var cartSectionNumber = document.createElement("button")
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
var cartDetailsColumn1_div5 = document.createElement("div")

var cartDetailsColumn2_div1 = document.createElement("div")
var cartDetailsColumn2_div2 = document.createElement("div")
var cartDetailsColumn2_div3 = document.createElement("div")
var cartDetailsColumn2_div4 = document.createElement("div")
var cartDetailsColumn2_div5 = document.createElement("div")

var cartDetailsColumn3_div1 = document.createElement("div")
var cartDetailsColumn3_div2 = document.createElement("div")
var cartDetailsColumn3_div3 = document.createElement("div")
var cartDetailsColumn3_div4 = document.createElement("div")
var cartDetailsColumn3_div5 = document.createElement("div")

var cartDetailsColumn4_div1 = document.createElement("div")
var cartDetailsColumn4_div2 = document.createElement("div")
var cartDetailsColumn4_div3 = document.createElement("div")
var cartDetailsColumn4_div4 = document.createElement("div")
var cartDetailsColumn4_div5 = document.createElement("div")

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
row3.appendChild(cartSectionNumber)
row3.appendChild(cartDetailsTitle)
row3.appendChild(cartDetails)

// ID for cartSectionNumber
cartSectionNumber.id = "cartSectionNumber"

// Append and create text node for cartSectionNumber
cartSectionNumber.appendChild(document.createTextNode("0"))


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
cartColumn1.appendChild(document.createTextNode("PRODUCT ITEM"))
cartColumn2.appendChild(document.createTextNode("QUANTITY"))
cartColumn3.appendChild(document.createTextNode("UNIT PRICE"))
cartColumn4.appendChild(document.createTextNode("TOTAL"))


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
cartDetailsColumn1.appendChild(cartDetailsColumn1_div2)
cartDetailsColumn1.appendChild(cartDetailsColumn1_div3)
cartDetailsColumn1.appendChild(cartDetailsColumn1_div4)
cartDetailsColumn1.appendChild(cartDetailsColumn1_div5)

cartDetailsColumn2.appendChild(cartDetailsColumn2_div1)
cartDetailsColumn2.appendChild(cartDetailsColumn2_div2)
cartDetailsColumn2.appendChild(cartDetailsColumn2_div3)
cartDetailsColumn2.appendChild(cartDetailsColumn2_div4)
cartDetailsColumn2.appendChild(cartDetailsColumn2_div5)

cartDetailsColumn3.appendChild(cartDetailsColumn3_div1)
cartDetailsColumn3.appendChild(cartDetailsColumn3_div2)
cartDetailsColumn3.appendChild(cartDetailsColumn3_div3)
cartDetailsColumn3.appendChild(cartDetailsColumn3_div4)
cartDetailsColumn3.appendChild(cartDetailsColumn3_div5)

cartDetailsColumn4.appendChild(cartDetailsColumn4_div1)
cartDetailsColumn4.appendChild(cartDetailsColumn4_div2)
cartDetailsColumn4.appendChild(cartDetailsColumn4_div3)
cartDetailsColumn4.appendChild(cartDetailsColumn4_div4)
cartDetailsColumn4.appendChild(cartDetailsColumn4_div5)

// Appending and creating text node to detailsColumn divs
cartDetailsColumn1_div1.appendChild(document.createTextNode("No item added yet"))
cartDetailsColumn2_div1.appendChild(document.createTextNode("NULL"))
cartDetailsColumn3_div1.appendChild(document.createTextNode("NULL"))
cartDetailsColumn4_div1.appendChild(document.createTextNode("NULL"))

// ids for cartDetailsColumn_divs
cartDetailsColumn1_div1.id = "cartDetailsColumn1_div1"
cartDetailsColumn2_div1.id = "cartDetailsColumn2_div1"
cartDetailsColumn3_div1.id = "cartDetailsColumn3_div1"
cartDetailsColumn4_div1.id = "cartDetailsColumn4_div1"

cartDetailsColumn1_div2.id = "cartDetailsColumn1_div2"
cartDetailsColumn2_div2.id = "cartDetailsColumn2_div2"
cartDetailsColumn3_div2.id = "cartDetailsColumn3_div2"
cartDetailsColumn4_div2.id = "cartDetailsColumn4_div2"

cartDetailsColumn1_div3.id = "cartDetailsColumn1_div3"
cartDetailsColumn2_div3.id = "cartDetailsColumn2_div3"
cartDetailsColumn3_div3.id = "cartDetailsColumn3_div3"
cartDetailsColumn4_div3.id = "cartDetailsColumn4_div3"

cartDetailsColumn1_div4.id = "cartDetailsColumn1_div4"
cartDetailsColumn2_div4.id = "cartDetailsColumn2_div4"
cartDetailsColumn3_div4.id = "cartDetailsColumn3_div4"
cartDetailsColumn4_div4.id = "cartDetailsColumn4_div4"

cartDetailsColumn1_div5.id = "cartDetailsColumn1_div5"
cartDetailsColumn2_div5.id = "cartDetailsColumn2_div5"
cartDetailsColumn3_div5.id = "cartDetailsColumn3_div5"
cartDetailsColumn4_div5.id = "cartDetailsColumn4_div5"




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
addToCart1.appendChild(document.createTextNode("ADD TO CART"))
addToCart2.appendChild(document.createTextNode("ADD TO CART"))
addToCart3.appendChild(document.createTextNode("ADD TO CART"))
addToCart4.appendChild(document.createTextNode("ADD TO CART"))

removeFromCart1.appendChild(document.createTextNode("REMOVE"))
removeFromCart2.appendChild(document.createTextNode("REMOVE"))
removeFromCart3.appendChild(document.createTextNode("REMOVE"))
removeFromCart4.appendChild(document.createTextNode("REMOVE"))


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

title_div4.appendChild(document.createTextNode("Product title: Benter Black Tassel Sneaker"))
price_div4.appendChild(document.createTextNode("Price: GHS 120.00"))
stock_div4.appendChild(document.createTextNode("Stock: 1"))
description_div4.appendChild(document.createTextNode("Description: BENTER are known for the production of high quality footwear at affordable price. This shoe has a double sole which makes it durable and long lasting. The shoe is simple, classy and of very high quality."))
imageURL_div4.appendChild(document.createTextNode("ImageURL:"))

// IDS FOR product content_div
title_div1.id = "title_div1"








// ADD TO CART
// ADD TO CART
// ADD TO CART

counter = 0
quantityNumberCart1 = 0
quantityNumberCart2 = 0
quantityNumberCart3 = 0
quantityNumberCart4 = 0

// ADDTOCART1
// ADDTOCART1
var button1 = document.querySelector("#addToCart1")
button1.addEventListener("click",function(){
    var arr = [0]

    if(quantityNumberCart1 < 2){
        for(var x=0;x<= arr.length;x++){
            counter += x
            quantityNumberCart1 += x
            document.querySelector("#cartSectionNumber").innerHTML = counter
        }
        document.getElementById("cartDetailsColumn1_div1").style.display = "none"
        document.getElementById("cartDetailsColumn2_div1").style.display = "none"
        document.getElementById("cartDetailsColumn3_div1").style.display = "none"
        document.getElementById("cartDetailsColumn4_div1").style.display = "none"
    
        var unitPrice =  document.getElementById("cartDetailsColumn3_div2")
        var total =  document.getElementById("cartDetailsColumn4_div2")
    
        document.getElementById("cartDetailsColumn1_div2").innerHTML = "Mario Fagni Hand Weaved Black Sneaker"
        document.getElementById("cartDetailsColumn2_div2").innerHTML = quantityNumberCart1
        unitPrice.innerHTML = parseInt("100") 
        var unitPrice =  unitPrice.innerHTML
        total.innerHTML = quantityNumberCart1 * unitPrice 
    }
    
})

// ADDTOCART2
// ADDTOCART2
var button2 = document.querySelector("#addToCart2")
button2.addEventListener("click",function(){
    var arr = [0]
    
    if(quantityNumberCart2 < 4){
        for(var x=0;x<= arr.length;x++){
            counter += x
            quantityNumberCart2 += x
            document.querySelector("#cartSectionNumber").innerHTML = counter
        }
        document.getElementById("cartDetailsColumn1_div1").style.display = "none"
        document.getElementById("cartDetailsColumn2_div1").style.display = "none"
        document.getElementById("cartDetailsColumn3_div1").style.display = "none"
        document.getElementById("cartDetailsColumn4_div1").style.display = "none"
    
        var unitPrice =  document.getElementById("cartDetailsColumn3_div3")
        var total =  document.getElementById("cartDetailsColumn4_div3")
    
        document.getElementById("cartDetailsColumn1_div3").innerHTML = "Plain And Patterned Calfskin White Nappa"
        document.getElementById("cartDetailsColumn2_div3").innerHTML = quantityNumberCart2
        unitPrice.innerHTML = parseInt("150") 
        var unitPrice =  unitPrice.innerHTML
        total.innerHTML = quantityNumberCart2 * unitPrice 
    }
    
   
})


// ADDTOCART3
// ADDTOCART3
var button3 = document.querySelector("#addToCart3")
button3.addEventListener("click",function(){
    var arr = [0]
    
    if(quantityNumberCart3 < 4){
        for(var x=0;x<= arr.length;x++){
            counter += x
            quantityNumberCart3 += x
            document.querySelector("#cartSectionNumber").innerHTML = counter
        }
        document.getElementById("cartDetailsColumn1_div1").style.display = "none"
        document.getElementById("cartDetailsColumn2_div1").style.display = "none"
        document.getElementById("cartDetailsColumn3_div1").style.display = "none"
        document.getElementById("cartDetailsColumn4_div1").style.display = "none"
    
        var unitPrice =  document.getElementById("cartDetailsColumn3_div4")
        var total =  document.getElementById("cartDetailsColumn4_div4")
    
        document.getElementById("cartDetailsColumn1_div4").innerHTML = "Rossi Toehold Sneaker - Black"
        document.getElementById("cartDetailsColumn2_div4").innerHTML = quantityNumberCart3
        unitPrice.innerHTML = parseInt("250") 
        var unitPrice =  unitPrice.innerHTML
        total.innerHTML = quantityNumberCart3 * unitPrice 
    }
    

})


// ADDTOCART4
// ADDTOCART4
var button4 = document.querySelector("#addToCart4")
button4.addEventListener("click",function(){
    var arr = [0]



    if(quantityNumberCart4 < 1){
        for(var x=0;x<= arr.length;x++){
            counter += x
            quantityNumberCart4 += x
            document.querySelector("#cartSectionNumber").innerHTML = counter
        }
        document.getElementById("cartDetailsColumn1_div1").style.display = "none"
        document.getElementById("cartDetailsColumn2_div1").style.display = "none"
        document.getElementById("cartDetailsColumn3_div1").style.display = "none"
        document.getElementById("cartDetailsColumn4_div1").style.display = "none"
    
        var unitPrice =  document.getElementById("cartDetailsColumn3_div5")
        var total =  document.getElementById("cartDetailsColumn4_div5")
    
        document.getElementById("cartDetailsColumn1_div5").innerHTML = "Benter Black Tassel Sneaker"
        document.getElementById("cartDetailsColumn2_div5").innerHTML = quantityNumberCart4
        unitPrice.innerHTML = parseInt("120") 
        var unitPrice =  unitPrice.innerHTML
        total.innerHTML = quantityNumberCart4 * unitPrice 
    
    }
    

})


// REMOVE FROM CART1
// REMOVE FROM CART1
var remove1 = document.querySelector("#removeFromCart1")
remove1.addEventListener("click",function(){
    var arr = [0]
    
    if(!(quantityNumberCart1 < 1)){
        for(var x=0;x<= arr.length;x++){
            counter -= x
            quantityNumberCart1 -= x
            document.querySelector("#cartSectionNumber").innerHTML = counter
        }
        document.getElementById("cartDetailsColumn1_div1").style.display = "none"
        document.getElementById("cartDetailsColumn2_div1").style.display = "none"
        document.getElementById("cartDetailsColumn3_div1").style.display = "none"
        document.getElementById("cartDetailsColumn4_div1").style.display = "none"
    
        var unitPrice =  document.getElementById("cartDetailsColumn3_div2")
        var total =  document.getElementById("cartDetailsColumn4_div2")
    
        document.getElementById("cartDetailsColumn1_div2").innerHTML = "Mario Fagni Hand Weaved Black Sneaker"
        document.getElementById("cartDetailsColumn2_div2").innerHTML = quantityNumberCart1
        unitPrice.innerHTML = parseInt("100") 
        var unitPrice =  unitPrice.innerHTML
        total.innerHTML = quantityNumberCart1 * unitPrice 
    }
})


// REMOVE FROM CART2
// REMOVE FROM CART2
var remove2 = document.querySelector("#removeFromCart2")
remove2.addEventListener("click",function(){
    var arr = [0]
    if(!(quantityNumberCart2 < 1)){
        for(var x=0;x<= arr.length;x++){
            counter -= x
            quantityNumberCart2 -= x
            document.querySelector("#cartSectionNumber").innerHTML = counter
        }
        document.getElementById("cartDetailsColumn1_div1").style.display = "none"
        document.getElementById("cartDetailsColumn2_div1").style.display = "none"
        document.getElementById("cartDetailsColumn3_div1").style.display = "none"
        document.getElementById("cartDetailsColumn4_div1").style.display = "none"
    
        var unitPrice =  document.getElementById("cartDetailsColumn3_div3")
        var total =  document.getElementById("cartDetailsColumn4_div3")
    
        document.getElementById("cartDetailsColumn1_div3").innerHTML = "Plain And Patterned Calfskin White Nappa"
        document.getElementById("cartDetailsColumn2_div3").innerHTML = quantityNumberCart2
        unitPrice.innerHTML = parseInt("150") 
        var unitPrice =  unitPrice.innerHTML
        total.innerHTML = quantityNumberCart2 * unitPrice 
    }
})

// REMOVE FROM CART3
// REMOVE FROM CART3
var remove3 = document.querySelector("#removeFromCart3")
remove3.addEventListener("click",function(){
    var arr = [0]
    if(!(quantityNumberCart3 < 1)){
        for(var x=0;x<= arr.length;x++){
            counter -= x
            quantityNumberCart3 -= x
            document.querySelector("#cartSectionNumber").innerHTML = counter
        }
    document.getElementById("cartDetailsColumn1_div1").style.display = "none"
    document.getElementById("cartDetailsColumn2_div1").style.display = "none"
    document.getElementById("cartDetailsColumn3_div1").style.display = "none"
    document.getElementById("cartDetailsColumn4_div1").style.display = "none"

    var unitPrice =  document.getElementById("cartDetailsColumn3_div4")
    var total =  document.getElementById("cartDetailsColumn4_div4")

    document.getElementById("cartDetailsColumn1_div4").innerHTML = "Rossi Toehold Sneaker - Black"
    document.getElementById("cartDetailsColumn2_div4").innerHTML = quantityNumberCart3
    unitPrice.innerHTML = parseInt("250") 
    var unitPrice =  unitPrice.innerHTML
    total.innerHTML = quantityNumberCart3 * unitPrice 
    }

})

// REMOVE FROM CART4
// REMOVE FROM CART4
var remove4 = document.querySelector("#removeFromCart4")
remove4.addEventListener("click",function(){
    var arr = [0]
    if(!(quantityNumberCart4 < 1)){
        for(var x=0;x<= arr.length;x++){
            counter -= x
            quantityNumberCart4 -= x
            document.querySelector("#cartSectionNumber").innerHTML = counter
        }
        document.getElementById("cartDetailsColumn1_div1").style.display = "none"
        document.getElementById("cartDetailsColumn2_div1").style.display = "none"
        document.getElementById("cartDetailsColumn3_div1").style.display = "none"
        document.getElementById("cartDetailsColumn4_div1").style.display = "none"
    
        var unitPrice =  document.getElementById("cartDetailsColumn3_div5")
        var total =  document.getElementById("cartDetailsColumn4_div5")
    
        document.getElementById("cartDetailsColumn1_div5").innerHTML = "Benter Black Tassel Sneaker"
        document.getElementById("cartDetailsColumn2_div5").innerHTML = quantityNumberCart4
        unitPrice.innerHTML = parseInt("120") 
        var unitPrice =  unitPrice.innerHTML
        total.innerHTML = quantityNumberCart4 * unitPrice 
    }
    
})









// Computation to add an item to Cart
// Algorithm

//  creat cart button
// add event listeners click
// add a function to add items to cart


