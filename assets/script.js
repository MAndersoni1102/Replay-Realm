
 
 //This is the section that adds the tax rate to the calculated total in the cart
 fetch('https://fakestoreapi.com/products/category/electronics')
 .then(res=>res.json())
 .then(json=>console.log(json))