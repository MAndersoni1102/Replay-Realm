// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
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