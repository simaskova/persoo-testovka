toggleComponent = (className) => {
  var component = document.querySelector(className);
  component.classList.toggle("hide");
}

hideComponent = (className) => {
  var component = document.querySelector(className);
  !component.classList.contains("hide")? component.classList.add("hide") : "";
}

// add to cart
addToCart = () => {
  let fullPath = event.target.parentElement.parentElement.parentElement.style.background.slice(5, 31);
  let slicedPath = fullPath.slice(11, 19) + ".png"

  let productName = event.target.parentElement.previousElementSibling.previousElementSibling.innerText;

  let productPrice = event.target.parentElement.previousElementSibling.innerText
  
  const cartItem = document.createElement("li")
  cartItem.classList.add("shopping_cart__item");
  cartItem.innerHTML = `
    <div class="shopping_cart__item__about">
      <img src="/imgs/half/${slicedPath}" class="shopping_cart__item__picture" title="${productName}" ></img>
      <div>
        <p class="shopping_cart__item__name">${productName}</p>
          <p class="shopping_cart__item__size">Size 11</p>
       </div>
     </div>
     <p class="shopping_cart__item__price">${productPrice}</p>
  `;


  // show in cart
  const listCartItems = document.querySelector(".shopping_cart__items");
  const checkoutButton = document.querySelector(".checkout__button")
  listCartItems.append(cartItem);
}