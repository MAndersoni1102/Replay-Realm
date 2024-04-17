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
   fetch('https://api.escuelajs.co/api/v1/products/?categoryId=2')
   .then(res=>res.json())
   .then(json=>console.log(json))

   .then(res => res.json())
 .then(json => {
   const productId = 23;
   const product = json.find(item => item.id === productId);
   console.log(product);
 });

  
  // const storeItems = function(itemsArray) {

  //   for (let index = 0; index < array.length; index++) {
  //    const element = array[index];
  // }
    
  // }

