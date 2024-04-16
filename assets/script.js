// MODAL BEGINS
var modal = document.getElementById("myModal");

var btn = document.getElementById("myBtn");

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
// MODAL ENDS
 // This is the TaxData API fetch request
 var myHeaders = new Headers();
 myHeaders.append("apikey", "fhn70i9DnfuXlXusBv2j1N2TjSIOcKyM");
 
 var requestOptions = {
   method: 'GET',
   redirect: 'follow',
   headers: myHeaders
 };
 
 fetch("https://api.apilayer.com/tax_data/canada_rate_list", requestOptions)
   .then(response => response.text())
   .then(result => console.log(result))
   .catch(error => console.log('error', error));
 
 //This is the section that adds the tax rate to the calculated total in the cart
 fetch('https://fakestoreapi.com/products/1')
 .then(res=>res.json())
 .then(json=>console.log(json))