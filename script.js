toggleComponent = (className) => {
  var component = document.querySelector(className);
  component.classList.toggle("hide");
}

hideComponent = (className) => {
  var component = document.querySelector(className);
  !component.classList.contains("hide")? component.classList.add("hide") : "";
}

showComponent = (className) => {
  var component = document.querySelector(className);
  component.classList.contains("hide")? component.classList.remove("hide") : "";
}

let countItems = 0;

// add to cart
addToCart = () => {
  let fullPath = event.target.classList.contains("add_to_cart__button")? event.target.parentElement.parentElement.style.background.slice(5, 31) : event.target.parentElement.parentElement.parentElement.style.background.slice(5, 31);
  let slicedPath = fullPath.slice(11, 19) + ".png"

  let productName =  event.target.classList.contains("add_to_cart__button")? event.target.previousElementSibling.previousElementSibling.innerText : event.target.parentElement.previousElementSibling.previousElementSibling.innerText;

  let productPrice = event.target.classList.contains("add_to_cart__button")? event.target.previousElementSibling.innerText : event.target.parentElement.previousElementSibling.innerText
  
  console.log(slicedPath + " " + productName + " " + productPrice)

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

  // notify cart
  const cartNotification = document.querySelector(".countItems");
  countItems++;
  cartNotification.innerText = countItems;


  // show in cart
  const listCartItems = document.querySelector(".shopping_cart__items");
  const checkoutButton = document.querySelector(".checkout__button")
  listCartItems.append(cartItem);
}

cartEmpty = () => { 
  countItems === 0? (
    hideComponent(".checkout__button"), showComponent(".empty_cart")
  ) : (
    showComponent(".checkout__button"), hideComponent(".empty_cart")
  )
}