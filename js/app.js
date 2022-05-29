const productEl = document.querySelector(".products");
const cartItemsEl = document.getElementById("cart_body");
//console.log(cartItemsEl);
const subTotalEl = document.querySelector(".cart-subtotal");
//const cartImageEl = document.querySelector(".cart-items");





function renderProducts() {
   products.forEach( (products ) => {
      productEl.innerHTML  += `
      <div class="item">
      <div class="item-container">
          <div class="item-img">
           <img src = "${products.imgSrc}" alt = "${products.imgSrc}" class = "pro_img">
           
         </div>

         <div class="description">
         <h5>${products.name}</h5>
         <h4>Fr${products.price}</h4>
         <p>${products.desc}</p>
         </div>

      <div class="add-to-cart">
     <button  class ="cart-btn" onClick = "addToCart(${products.id})">AddToCart</button>
   </div>
</div>
</div>
      `
; 
       
    });
}

renderProducts();

let cart = [];
//JSON.parse(localStorage.getItem("CART"));
//updateCart();

function addToCart(id) {
    if( cart.some((item) => item.id ===id )){
       changeNumberOfUnits("plus", id)
      
    }else{
      let item = products.find(( products ) => products.id === id);
      cart.push({
         ...item,
         numberOfUnits : 1,
       });
    }
  
 updateCart();
}

function updateCart() {
   renderCartItems();
   renderSubTotal();

   localStorage.setItem("CART", JSON.stringify(cart));
  
  
}

function renderCartItems() {
   cartItemsEl.innerHTML = "" ;
   cart.forEach(( item ) => {
      cartItemsEl.innerHTML += `
      <div class="colunm">
      <img src="${item.imgSrc}" class="cart-img" >
      <button class =" removeItem" onClick = "removeItemFromCart(${item.id});">Delete</button>
    </div>
    <div class="colunm"><span class="item-price">Fr.  ${item.price}</span>
    </div>
    <div class="colunm"><span class="minus" onClick ="changeNumberOfUnits('minus', ${item.id} )">-</span>
      <span class="quantity" >[${item.numberOfUnits}]</span>
      <span class="plus" onClick ="changeNumberOfUnits('plus', ${item.id} )">+</span>
    </div>
  </div>
      `;
   })
}

function changeNumberOfUnits(action, id) {
   cart = cart.map((item) => {
     let numberOfUnits = item.numberOfUnits;
     if(item.id === id ){
        if(action === "minus" && numberOfUnits > 0){
           numberOfUnits--;
        }else if( action === "plus" && numberOfUnits < item.inStock){
           numberOfUnits++;
        }
     }
     return {
        ...item,
        numberOfUnits
     };
   });

   updateCart();
}

function renderSubTotal(item) {
   let totalPrice = 0, totalItems = 0;
cart.forEach((item) => {
   totalPrice += item.price * item.numberOfUnits;
   totalItems += item.numberOfUnits;
  
});

subTotalEl.innerHTML = ` SUBTOTAL: ( ${totalItems}  Item)  :   Fr. ${totalPrice.toFixed(2)}`;
   }

   updateCart();

   function removeItemFromCart(id) {
        cart = cart.filter((item) => item.id !== id);
      
        updateCart();
      }

      //cartItemsEl.addEventListener("mouseover", message);

      //function message(){
         //alert("click on cart item image to remove item from Cart");
      //}

