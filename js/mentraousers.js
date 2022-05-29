var cartButtons = document.querySelectorAll(".btn-primary")
//console.log(cartButtons)
 for( i = 0; i < cartButtons.length; i++){
     var buttons = cartButtons[i]
      buttons.addEventListener("click", function(e){
    var button = e.target
     button.parentElement.parentElement.remove();
     cartUpdate()
 })
 
}


 function cartUpdate() {
   total = 0;
var cartProducts = document.querySelectorAll(".cart-item")
//console.log(cartProducts);
for( i = 0; i < cartProducts.length; i++ ){
 var cartRow = cartProducts[i] 
var cartPrice = cartRow.getElementsByClassName("cart-item-price")[0]
//console.log(cartPrice);
var cartQuantity = cartRow.getElementsByClassName("cart-quantity-input")[0]
// console.log(cartPrice,  cartQuantity);
var price = parseFloat(cartPrice.innerText.replace('Fr', ''));
var quantity = cartQuantity.value;

var total = total + (price * quantity)
console.log(total);
     }
    document.getElementsByClassName("cart-total-price")[0].innerText  = 'Fr' + total.toFixed(2); 
}

 cartUpdate();    

