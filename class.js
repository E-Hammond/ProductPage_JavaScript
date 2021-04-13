// // Variables declaration
//  body = document.querySelector('body');
// var divContainer = document.querySelector('.container')
// var navBar = document.createElement("div")
// var ul = document.createElement("ul")
// var men = document.createElement("li")
// var women = document.createElement("li")
// var kids = document.createElement("li")
// var row1 = document.createElement("div")
// var row2 = document.createElement("div")
// var row3 = document.createElement("div")
// var div1 = document.createElement("div")
// var div2 = document.createElement("div")
// var div3 = document.createElement("div")
// var div4 = document.createElement("div")
// var div1_column1 = document.createElement("div")
// var div1_column2 = document.createElement("div")
// var div2_column1 = document.createElement("div")
// var div2_column2 = document.createElement("div")
// var div3_column1 = document.createElement("div")
// var div3_column2 = document.createElement("div")
// var div4_column1 = document.createElement("div")
// var div4_column2 = document.createElement("div")
// var product1Tag = document.createElement("img")
// var product2Tag = document.createElement("img")
// var product3Tag = document.createElement("img")
// var product4Tag = document.createElement("img")

// var title_div1 = document.createElement("div")
// var price_div1 = document.createElement("div")
// var stock_div1 = document.createElement("div")
// var description_div1 = document.createElement("div")
// var imageURL_div1 = document.createElement("div")

// var addToCart1 = document.createElement("button")
// var removeFromCart1 = document.createElement("button")

// var title_div2 = document.createElement("div")
// var price_div2 = document.createElement("div")
// var stock_div2 = document.createElement("div")
// var description_div2 = document.createElement("div")
// var imageURL_div2 = document.createElement("div")

// var addToCart2 = document.createElement("button")
// var removeFromCart2 = document.createElement("button")

// var title_div3 = document.createElement("div")
// var price_div3 = document.createElement("div")
// var stock_div3 = document.createElement("div")
// var description_div3 = document.createElement("div")
// var imageURL_div3 = document.createElement("div")

// var addToCart3 = document.createElement("button")
// var removeFromCart3 = document.createElement("button")

// var title_div4 = document.createElement("div")
// var price_div4 = document.createElement("div")
// var stock_div4 = document.createElement("div")
// var description_div4 = document.createElement("div")
// var imageURL_div4 = document.createElement("div")

// var addToCart4 = document.createElement("button")
// var removeFromCart4 = document.createElement("button")

// var breakTag1 = document.createElement("br")
// var breakTag2 = document.createElement("br")
// var breakTag3 = document.createElement("br")
// var breakTag4 = document.createElement("br")

// var cartSection = document.createElement("span")
// var cartSectionNumber = document.createElement("button")
// var cartDetailsTitle = document.createElement("div")
// var cartColumn1 = document.createElement("div")
// var cartColumn2 = document.createElement("div")
// var cartColumn3 = document.createElement("div")
// var cartColumn4 = document.createElement("div")
// var cartDetails = document.createElement("div")

// var cartDetailsColumn1 = document.createElement("div")
// var cartDetailsColumn2 = document.createElement("div")
// var cartDetailsColumn3 = document.createElement("div")
// var cartDetailsColumn4 = document.createElement("div")


// var cartDetailsColumn1_div1 = document.createElement("div")
// var cartDetailsColumn1_div2 = document.createElement("div")
// var cartDetailsColumn1_div3 = document.createElement("div")
// var cartDetailsColumn1_div4 = document.createElement("div")
// var cartDetailsColumn1_div5 = document.createElement("div")

// var cartDetailsColumn2_div1 = document.createElement("div")
// var cartDetailsColumn2_div2 = document.createElement("div")
// var cartDetailsColumn2_div3 = document.createElement("div")
// var cartDetailsColumn2_div4 = document.createElement("div")
// var cartDetailsColumn2_div5 = document.createElement("div")

// var cartDetailsColumn3_div1 = document.createElement("div")
// var cartDetailsColumn3_div2 = document.createElement("div")
// var cartDetailsColumn3_div3 = document.createElement("div")
// var cartDetailsColumn3_div4 = document.createElement("div")
// var cartDetailsColumn3_div5 = document.createElement("div")

// var cartDetailsColumn4_div1 = document.createElement("div")
// var cartDetailsColumn4_div2 = document.createElement("div")
// var cartDetailsColumn4_div3 = document.createElement("div")
// var cartDetailsColumn4_div4 = document.createElement("div")
// var cartDetailsColumn4_div5 = document.createElement("div")

// body.insertAdjacentElement('afterbegin', navBar);

// // Append ul to navBar
// navBar.appendChild(ul)

// // Append li to ul
// ul.append(men,women,kids)

// // Append and create text nodes to li's
// men.appendChild(document.createTextNode("Men"))
// women.appendChild(document.createTextNode("Women"))
// kids.appendChild(document.createTextNode("Kids"))

// // Add className to navBar
// navBar.className = "navBar"

// // Add clasName to li 
// men.className = "li"
// women.className = "li"
// kids.className = "li"


// class ProductPage{

//     constructor(title, price, stock, description, imageURL){

//         this.title = title
//         this.price = price
//         this.stock = stock
//         this.description = description
//         this.imageURL = imageURL
//     }

//     static structureDOM(){
//         divContainer.append(row1,row2,row3);

//         // Append div1,div2...div4 and cartSection to rows
//         row1.append(div1,div2)
//         row2.append(div3,div4)
//         row3.append(cartSection,cartSectionNumber,cartDetailsTitle,cartDetails)

//         // Appending div_columns to div1,div2,...,div4
//         div1.append(div1_column1,div1_column2)
//         div2.append(div2_column1,div2_column2)
//         div3.append(div3_column1,div3_column2)
//         div4.append(div4_column1,div4_column2)

//         // Appending product images tags to div_columns and styling the product
//         div1_column1.appendChild(product1Tag)
//         div2_column1.appendChild(product2Tag)
//         div3_column1.appendChild(product3Tag)
//         div4_column1.appendChild(product4Tag)

//         // Appending product item content divs
//         div1_column2.append(title_div1,price_div1,stock_div1,breakTag1,description_div1,addToCart1,removeFromCart1)
//         div2_column2.append(title_div2,price_div2,stock_div2,breakTag2,description_div2,addToCart2,removeFromCart2)
//         div3_column2.append(title_div3,price_div3,stock_div3,breakTag3,description_div3,addToCart3,removeFromCart3)
//         div4_column2.append(title_div4,price_div4,stock_div4,breakTag4,description_div4,addToCart4,removeFromCart4)

//         // // Appending cartColumns to cartDetails
//         cartDetailsTitle.append(cartColumn1,cartColumn2,cartColumn3,cartColumn4)

//         // //Appending cartDetailsColumns to cartDetails
//         cartDetails.append(cartDetailsColumn1,cartDetailsColumn2,cartDetailsColumn3,cartDetailsColumn4) 
        
//         // // Appending detail divs to cartDetailsColumns
//         cartDetailsColumn1.appendChild(cartDetailsColumn1_div1,cartDetailsColumn1_div2,
//             cartDetailsColumn1_div3,cartDetailsColumn1_div4,cartDetailsColumn1_div5)

//         cartDetailsColumn2.append(cartDetailsColumn2_div1,cartDetailsColumn2_div2,cartDetailsColumn2_div3,
//             cartDetailsColumn2_div4,cartDetailsColumn2_div5)
        
//         cartDetailsColumn3.append(cartDetailsColumn3_div1,cartDetailsColumn3_div2,cartDetailsColumn3_div3,
//             cartDetailsColumn3_div4,cartDetailsColumn3_div5)
        
//         cartDetailsColumn4.append(cartDetailsColumn4_div1,cartDetailsColumn4_div2,cartDetailsColumn4_div3,
//             cartDetailsColumn4_div4,cartDetailsColumn4_div5)

//     }

//     static identifyTags(){
//                 // Adding Classname to cartDetailsTitle
//                 cartDetailsTitle.className = "cartDetailsTitle"

//                 // Adding className to cartDetails
//                 cartDetails.className = "cartDetails"

//                 // // Add classNames to row1 and row2
//                 row1.className = "row1"
//                 row2.className = "row2"
//                 row3.className = "row3"

//                 // Adding ids to the divs
//                 div1.id = "row1-column1"
//                 div2.id = "row1-column2"
//                 div3.id = "row2-column1"
//                 div4.id = "row2-column2"

//                 product1Tag.id = "product1Tag"
//                 product2Tag.id = "product2Tag"
//                 product3Tag.id = "product3Tag"
//                 product4Tag.id = "product4Tag"

//                 // ID for cartSectionNumber
//                 cartSectionNumber.id = "cartSectionNumber"

//                 // ID for cartSection
//                 cartSection.id = "cartSection"

//                 // // Addind className to cartDetailsColums
//                 cartDetailsColumn1.className = "cartDetailsColumn"
//                 cartDetailsColumn2.className = "cartDetailsColumn"
//                 cartDetailsColumn3.className = "cartDetailsColumn"
//                 cartDetailsColumn4.className = "cartDetailsColumn"

//                 // // Adding className to cartColumn
//                 cartColumn1.className = "cartColumn"
//                 cartColumn2.className = "cartColumn"
//                 cartColumn3.className = "cartColumn"
//                 cartColumn4.className = "cartColumn"

//                 // // ids for cartDetailsColumn_divs
//                 cartDetailsColumn1_div1.id = "cartDetailsColumn1_div1"
//                 cartDetailsColumn2_div1.id = "cartDetailsColumn2_div1"
//                 cartDetailsColumn3_div1.id = "cartDetailsColumn3_div1"
//                 cartDetailsColumn4_div1.id = "cartDetailsColumn4_div1"

//                 cartDetailsColumn1_div2.id = "cartDetailsColumn1_div2"
//                 cartDetailsColumn2_div2.id = "cartDetailsColumn2_div2"
//                 cartDetailsColumn3_div2.id = "cartDetailsColumn3_div2"
//                 cartDetailsColumn4_div2.id = "cartDetailsColumn4_div2"

//                 cartDetailsColumn1_div3.id = "cartDetailsColumn1_div3"
//                 cartDetailsColumn2_div3.id = "cartDetailsColumn2_div3"
//                 cartDetailsColumn3_div3.id = "cartDetailsColumn3_div3"
//                 cartDetailsColumn4_div3.id = "cartDetailsColumn4_div3"

//                 cartDetailsColumn1_div4.id = "cartDetailsColumn1_div4"
//                 cartDetailsColumn2_div4.id = "cartDetailsColumn2_div4"
//                 cartDetailsColumn3_div4.id = "cartDetailsColumn3_div4"
//                 cartDetailsColumn4_div4.id = "cartDetailsColumn4_div4"

//                 cartDetailsColumn1_div5.id = "cartDetailsColumn1_div5"
//                 cartDetailsColumn2_div5.id = "cartDetailsColumn2_div5"
//                 cartDetailsColumn3_div5.id = "cartDetailsColumn3_div5"
//                 cartDetailsColumn4_div5.id = "cartDetailsColumn4_div5"

//                 // Adding ids to div_columns
//                 div1_column1.id = "row1_div1_column1"
//                 div1_column2.id = "row1_div1_column2"
//                 div2_column1.id = "row1_div2_column1"
//                 div2_column2.id = "row1_div2_column2"
//                 div3_column1.id = "row2_div3_column1"
//                 div3_column2.id = "row2_div3_column2"
//                 div4_column1.id = "row2_div4_column1"
//                 div4_column2.id = "row2_div4_column2"

//                 // Adding ids to imageURLs
//                 imageURL_div1.id = "imageURL_div1"
//                 imageURL_div2.id = "imageURL_div2"
//                 imageURL_div3.id = "imageURL_div3"
//                 imageURL_div4.id = "imageURL_div4"

//                 // Adding ids to Buttons
//                 addToCart1.id = "addToCart1"
//                 addToCart2.id = "addToCart2"
//                 addToCart3.id = "addToCart3"
//                 addToCart4.id = "addToCart4"

//                 removeFromCart1.id = "removeFromCart1"
//                 removeFromCart2.id = "removeFromCart2"
//                 removeFromCart3.id = "removeFromCart3"
//                 removeFromCart4.id = "removeFromCart4"

//     }

// }

// class ProductItems extends ProductPage{

//     constructor(title, price, stock, description, imageURL){
//         super(title, price, stock, description, imageURL);
//     }

//         appendProductDetails(){
//             // Setting attribute of the product image tag
//             product1Tag.setAttribute("src",this.imageURL)
//             product2Tag.setAttribute("src",this.imageURL)
//             product3Tag.setAttribute("src",this.imageURL)
//             product4Tag.setAttribute("src",this.imageURL)

//             product1Tag.setAttribute("alt","Image of product")
//             product2Tag.setAttribute("alt","Image of product")
//             product3Tag.setAttribute("alt","Image of product")
//             product4Tag.setAttribute("alt","Image of product")

//             // // Appending and creating text nodes to product item content
//             title_div1.appendChild(document.createTextNode(` Product Title : ${this.title}`))
//             price_div1.appendChild(document.createTextNode(` Price : GHS ${this.price}`))
//             stock_div1.appendChild(document.createTextNode(`Stock : ${this.stock}`))
//             description_div1.appendChild(document.createTextNode(` Description : ${this.description}`))
//             // imageURL_div1.appendChild(document.createTextNode(this.imageURL))

//             title_div2.appendChild(document.createTextNode(`Product title :  ${this.title}`))
//             price_div2.appendChild(document.createTextNode(`Price: GHS ${this.price}`))
//             stock_div2.appendChild(document.createTextNode(`Stock : ${this.stock}`))
//             description_div2.appendChild(document.createTextNode(`Description: ${this.description}`))
//             // imageURL_div2.appendChild(document.createTextNode("ImageURL:"))

//             title_div3.appendChild(document.createTextNode(`Product title : ${this.title}`))
//             price_div3.appendChild(document.createTextNode(`Price : GHS ${this.price}`))
//             stock_div3.appendChild(document.createTextNode(`Stock : ${this.stock}`))
//             description_div3.appendChild(document.createTextNode(`Description : ${this.description}`))
//             // imageURL_div3.appendChild(document.createTextNode("ImageURL:"))

//             title_div4.appendChild(document.createTextNode(`Product title: ${this.title}`))
//             price_div4.appendChild(document.createTextNode(`Price : GHS ${this.price}`))
//             stock_div4.appendChild(document.createTextNode(`Stock :  ${this.stock}`))
//             description_div4.appendChild(document.createTextNode(`Description : ${this.description}`))
//             // imageURL_div4.appendChild(document.createTextNode("ImageURL:"))

//         }


//     CreateTextNode(){
//         // Append and create text nodes for the buttons
//         addToCart1.appendChild(document.createTextNode("ADD TO CART"))
//         addToCart2.appendChild(document.createTextNode("ADD TO CART"))
//         addToCart3.appendChild(document.createTextNode("ADD TO CART"))
//         addToCart4.appendChild(document.createTextNode("ADD TO CART"))

//         removeFromCart1.appendChild(document.createTextNode("REMOVE"))
//         removeFromCart2.appendChild(document.createTextNode("REMOVE"))
//         removeFromCart3.appendChild(document.createTextNode("REMOVE"))
//         removeFromCart4.appendChild(document.createTextNode("REMOVE"))


//         // Appending and creating text nodes to cartSection
//         cartSection.appendChild(document.createTextNode("Cart Section"))

//         // Appending and creating text node to cartColumns
//         cartColumn1.appendChild(document.createTextNode("PRODUCT ITEM"))
//         cartColumn2.appendChild(document.createTextNode("QUANTITY"))
//         cartColumn3.appendChild(document.createTextNode("UNIT PRICE"))
//         cartColumn4.appendChild(document.createTextNode("TOTAL"))

//         // Appending and creating text node to detailsColumn divs
//         cartDetailsColumn1_div1.appendChild(document.createTextNode("No item added yet"))
//         cartDetailsColumn2_div1.appendChild(document.createTextNode("NULL"))
//         cartDetailsColumn3_div1.appendChild(document.createTextNode("NULL"))
//         cartDetailsColumn4_div1.appendChild(document.createTextNode("NULL"))

//         // Append and create text node for cartSectionNumber
//         cartSectionNumber.appendChild(document.createTextNode("0"))

//     }

// }

// const products = [
//     new ProductItems("Mario Fagni Hand Weaved Black Sneaker",100,2,
//     "This sneaker is made from hand weaved calfskin leather and has an additional top leather accessories  on top of a plain leather that beautifies it.",
//     "Images/boot.jpg"),
//     new ProductItems("Plain And Patterned Calfskin White Nappa",150.00,4,"This shoe is made from Plain and Patterned calfskin leather.The shoe has an expandable underneath the top cover that accommodate high Upper feet",
// "Images/boot1.webp"),
//     new ProductItems("Rossi Toehold Sneaker - Black",250.00,4,"This Sneaker is made from Authentic Calf Skin Leather. It has a Leather Sole with additional rubber mid fit  for a firm grip of the slippers on the floor",
// "Images/boot3.webp"),
//     new ProductItems("Benter Black Tassel Sneaker",120.00,1,"BENTER are known for the production of high quality footwear at affordable price. This shoe has a double sole which makes it durable and long lasting.",
// "Images/boot2.jpg")
// ]

// products.map(product => {
//     console.log(product.title)
// })



// // const product1 = new ProductItems("Mario Fagni Hand Weaved Black Sneaker",100,2,
// // "This sneaker is made from hand weaved calfskin leather and has an additional top leather accessories  on top of a plain leather that beautifies it.",
// // "Images/boot.jpg");

// // const product2 = new ProductItems("Plain And Patterned Calfskin White Nappa",150.00,4,"This shoe is made from Plain and Patterned calfskin leather.The shoe has an expandable underneath the top cover that accommodate high Upper feet",
// // "Images/boot1.webp");
// // const product3 = new ProductItems("Rossi Toehold Sneaker - Black",250.00,4,"This Sneaker is made from Authentic Calf Skin Leather. It has a Leather Sole with additional rubber mid fit  for a firm grip of the slippers on the floor",
// // "Images/boot3.webp");
// // const product4 = new ProductItems("Benter Black Tassel Sneaker",120.00,1,"BENTER are known for the production of high quality footwear at affordable price. This shoe has a double sole which makes it durable and long lasting.",
// // "Images/boot2.jpg");

// // console.log(product)
// ProductItems.structureDOM();
// ProductItems.identifyTags();
// product.appendProductDetails();
// product.CreateTextNode();
// // product2.appendProductDetails();