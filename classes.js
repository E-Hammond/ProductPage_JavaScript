
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
                <p class="price">${this.price}</p>
                <p class="stock">Availabilty : ${this.stock}</p>
                <button class="addToCart">Add to Cart</button>
                <button class="removeFromCart">Remove</button>
            </div>
        </div>
        
        `

        return row;

    }

    cartSection(){
        let sectionCard = document.createElement("div");
        sectionCard.className = "sectionCard";
        sectionCard.innerHTML = `
        <span id="cartSection">Cart Section</span>
        <button id="cartSectionNumber">0</button>
        <div class="cartDetailsTitle">
            <div class="cartColumn">PRODUCT ITEMS</div>
            <div class="cartColumn">QUANTITY</div>
            <div class="cartColumn">UNIT PRICE</div>
            <div class="cartColumn">TOTAL</div>
        </div>
        <div class="cartDetails">
            <div class="cartDetailsColumn">
                <div id="cartDetailsColumn1_div1">Not items added yet</div>
                <div id="cartDetailsColumn1_div2"></div>
                <div id="cartDetailsColumn1_div3"></div>
                <div id="cartDetailsColumn1_div4"></div>
                <div id="cartDetailsColumn1_div5"></div>
            </div>
            <div class="cartDetailsColumn">
                <div id="cartDetailsColumn2_div1">NULL</div>
                <div id="cartDetailsColumn2_div2"></div>
                <div id="cartDetailsColumn2_div3"></div>
                <div id="cartDetailsColumn2_div4"></div>
                <div id="cartDetailsColumn2_div5"></div>
            </div>
            <div class="cartDetailsColumn">
                <div id="cartDetailsColumn3_div1">NULL</div>
                <div id="cartDetailsColumn3_div2"></div>
                <div id="cartDetailsColumn3_div3"></div>
                <div id="cartDetailsColumn3_div4"></div>
                <div id="cartDetailsColumn3_div5"></div>
            </div>
            <div class="cartDetailsColumn">
                <div id="cartDetailsColumn4_div1">NULL</div>
                <div id="cartDetailsColumn4_div2"></div>
                <div id="cartDetailsColumn4_div3"></div>
                <div id="cartDetailsColumn4_div4"></div>
                <div id="cartDetailsColumn4_div5"></div>
            </div>
        </div>
        `
        return sectionCard;

    }

}

const products = [
    new ProductItems("Mario Fagni Hand Weaved Black Sneaker",100,2,
    "This sneaker is made from hand weaved calfskin leather and has an additional top leather accessories  on top of a plain leather that beautifies it.",
    "Images/boot.jpg"),
    new ProductItems("Plain And Patterned Calfskin White Nappa",150.00,4,"This shoe is made from Plain and Patterned calfskin leather.The shoe has an expandable underneath the top cover that accommodate high Upper feet",
"Images/boot1.webp"),
    new ProductItems("Rossi Toehold Sneaker - Black",250.00,4,"This Sneaker is made from Authentic Calf Skin Leather. It has a Leather Sole with additional rubber mid fit  for a firm grip of the slippers on the floor",
"Images/boot3.webp"),
    new ProductItems("Benter Black Tassel Sneaker",120.00,1,"BENTER are known for the production of high quality footwear at affordable price. This shoe has a double sole which makes it durable and long lasting.",
"Images/boot2.jpg")
]

products.map(product => {
    divContainer.append(product.rowCard());
})

const prod = new ProductItems();
divContainer.append(prod.cartSection())
