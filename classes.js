
body = document.querySelector('body');
let ul = document.createElement("ul")
let men = document.createElement("li")
let women = document.createElement("li")
let kids = document.createElement("li")
let navBar = document.createElement("div")


body.insertAdjacentElement('afterbegin', navBar);

// Append ul to navBar
navBar.appendChild(ul)

// Append li to ul
ul.append(men,women,kids)

// Append and create text nodes to li's
men.appendChild(document.createTextNode("Men"))
women.appendChild(document.createTextNode("Women"))
kids.appendChild(document.createTextNode("Kids"))

// Add className to navBar
navBar.className = "navBar"

// Add clasName to li 
men.className = "li"
women.className = "li"
kids.className = "li"


let divContainer = document.querySelector('.container')

class ProductPage{

    constructor(title, price, stock, description, imageURL,ID){

        this.title = title;
        this.price = price;
        this.stock = stock;
        this.description = description;
        this.imageURL = imageURL;
        this.ID = ID;
    }
}

class ProductItems extends ProductPage{

    constructor(title, price, stock, description, imageURL,ID){
        super(title, price, stock, description, imageURL,ID);
    }

    // row cards
    rowCard(){
        let row = document.createElement("div");
        row.className = "rowcard";
        row.innerHTML = `
        <div class="row1-column1">
            <div><img class="img-container" src="${this.imageURL}" alt=""></div>
            <div class = "product-details">
                <h2 class="product-title">${this.title}</h2>
                <p class="description">${this.description}</p>
                <p>
                <span>GHS :</span><span class="price"> ${this.price}</span>
<p>
                <span>Availability : </span> <span id="stock">${this.stock}</span>
                <p>
                <button id = "addToCart">Add to Cart</button>
                <button id="removeFromCart">Remove</button>
            </div>
        </div>
        
        `

        return row;

    }

    cartSection(){
        let sectionCard = document.createElement("div");
        sectionCard.className = "sectionCard";
        sectionCard.innerHTML = `
        <span id="cartSection">Add To Cart</span>
        <button id="cartSectionNumber">0</button>
        <hr style="margin-top:15px;background-color:tomato"><hr style="background-color:red;">
        
        `
        return sectionCard;

    }



}

const products = [
    new ProductItems("Mario Fagni Hand Weaved Black Sneaker",100,1,
    "This sneaker is made from hand weaved calfskin leather and has an additional top leather accessories  on top of a plain leather that beautifies it.",
    "Images/boot.jpg"),
    new ProductItems("Plain And Patterned Calfskin White Nappa",150.00,1,"This shoe is made from Plain and Patterned calfskin leather.The shoe has an expandable underneath the top cover that accommodate high Upper feet",
"Images/boot1.webp"),
    new ProductItems("Rossi Toehold Sneaker - Black",250.00,1,"This Sneaker is made from Authentic Calf Skin Leather. It has a Leather Sole with additional rubber mid fit  for a firm grip of the slippers on the floor",
"Images/boot3.webp"),
    new ProductItems("Benter Black Tassel Sneaker",120.00,1,"BENTER are known for the production of high quality footwear at affordable price. This shoe has a double sole which makes it durable and long lasting.",
"Images/boot2.jpg")
]

const prod = new ProductItems();
divContainer.append(prod.cartSection())

products.map(product => {
    divContainer.append(product.rowCard());
})


// prod.addToCart();



const addCart = document.querySelectorAll("#addToCart");
const quantity = document.querySelector("#cartSectionNumber")
const stock = document.querySelector("#stock")

for(const  product of addCart){
    product.addEventListener("click", function(){
        if(quantity.textContent == 4){
            alert("You can no longer add to Cart")
        }

        else if(!(Number(stock.textContent)<= 0)){
            // stock.textContent = Numberstock.textContent -1;
            quantity.textContent = Number(quantity.textContent)+1;
            stock.textContent = Number(stock.textContent) -1;
            
        }
    })
}



const removeCart = document.querySelectorAll("#removeFromCart");
const quantityy = document.querySelector("#cartSectionNumber")
const stockk = document.querySelector("#stock")

for(const  product of addCart){
    product.addEventListener("click", function(){
        if(quantityy.textContent == 4){
            alert("You can no longer add to Cart")
        }

        else if(!(Number(stockk.textContent)<=0)){
            // stock.textContent = Numberstock.textContent -1;
            quantityy.textContent = Number(quantityy.textContent)-1;
            stockk.textContent = Number(stockk.textContent) +1;
            
            
        }
    })
}

