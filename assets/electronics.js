fetch("https://api.escuelajs.co/api/v1/products")
  .then((res) => res.json())
  .then((json) => {
    const startingId = 22;
    const numberOfItems = 6;
    for (let i = startingId; i < startingId + numberOfItems; i++) {
      const product = json.find((item) => item.id === i);
      displayStoreItem(product);
    }
  });

// Function to display API Product, Price, Description in cards
function displayStoreItem(product) {
  document.getElementById("panel-heading" + product.id).textContent =
    product.title + " - $" + product.price;

  description = product.description;
  if (description.length > 30) {
    description = description.substring(0, 100) + "...";
  }
  document.getElementById("panel-footer" + product.id).textContent =
    description;
}

// LOCAL STORAGE
function saveProductToLocal(event) {
  let eventNode =
    event.target.parentElement.previousElementSibling.previousElementSibling;
  var productTitle = eventNode.textContent.split("-")[0];
  var productPrice = eventNode.textContent.split("$")[1];
  // console.log({eventNode}, eventNode.textContent.split("$")[1]);
  var product = {
    title: productTitle,
    price: productPrice,
  };

  localStorage.setItem("product", JSON.stringify(product));
  alert("Product has been added to your cart!");
}

var buttons = document.querySelectorAll(".saveButton");
buttons.forEach(function (button) {
  button.addEventListener("click", saveProductToLocal);
});

// SHOPPING CART
function displayProductInCart(title, price) {
  const productList = document.getElementById("productList");

  const productCard = document.createElement("div");
  productCard.className = "bg-white p-4 shadow-md rounded-lg";
  productCard.innerHTML = `
        <h2 class="text-xl font-semibold mb-2">${title}</h2>
        <p class="text-gray-600">Price: $${price}</p>
    `;
  productList.appendChild(productCard);
}

function populateCartFromLocalStorage() {
  const productJSON = localStorage.getItem("product");
  if (productJSON) {
    const product = JSON.parse(productJSON);
    displayProductInCart(product.title, product.price);
  }
}
populateCartFromLocalStorage();

// MODAL
const checkoutButton = document.getElementById("checkoutButton");
const modalOverlay = document.getElementById("modalOverlay");
const modal = document.getElementById("modal");
checkoutButton.addEventListener("click", function () {
  modalOverlay.classList.remove("hidden");
  modal.classList.remove("hidden");
});

const closeModalButton = document.getElementById("closeModalButton");
closeModalButton.addEventListener("click", function () {
  modalOverlay.classList.add("hidden");
  modal.classList.add("hidden");
  window.close();
});
