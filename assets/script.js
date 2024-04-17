// Modal Start
var modal = document.getElementById('myModal');

var btn = document.getElementById("openModalBtn");

var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
// Modal End

 //This is the section that adds the tax rate to the calculated total in the cart
 fetch('https://fakestoreapi.com/products/category/electronics')
 .then(res=>res.json())
 .then(json=>console.log(json))
