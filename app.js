// Variables declaration
var divContainer = document.querySelector('.container')
var row1 = document.createElement("div")
var row2 = document.createElement("div")
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




//  Append rows to divContainer
divContainer.appendChild(row1)
divContainer.appendChild(row2)

// // Append and create text nodes for each row
// row1.appendChild(document.createTextNode("row1"))
// row2.appendChild(document.createTextNode("row2"))

// Add classNames to row1 and row2
row1.className = "row1"
row2.className = "row2"

// Append div1,div2...div4 to rows
row1.appendChild(div1)
row1.appendChild(div2)
row2.appendChild(div3)
row2.appendChild(div4)


// // Append and create text nodes for each od the divs
// div1.appendChild(document.createTextNode("div1"))
// div2.appendChild(document.createTextNode("div2"))
// div3.appendChild(document.createTextNode("div3"))
// div4.appendChild(document.createTextNode("div4"))

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

// Append and create text node to div_columns
div1_column1.appendChild(document.createTextNode("div1_column1"))
div1_column2.appendChild(document.createTextNode("div1_column2"))
div2_column1.appendChild(document.createTextNode("div2_column1"))
div2_column2.appendChild(document.createTextNode("div2_column2"))
div3_column1.appendChild(document.createTextNode("div3_column1"))
div3_column2.appendChild(document.createTextNode("div3_column2"))
div4_column1.appendChild(document.createTextNode("div4_column1"))
div4_column2.appendChild(document.createTextNode("div4_column2"))





console.log(divContainer)