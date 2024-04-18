fetch('https://api.escuelajs.co/api/v1/products') 
  .then(res => res.json())
  .then(json => {
    
    const startingId = 22;
    const numberOfItems = 6;
    for (let i = startingId; i < startingId + numberOfItems; i++) {
      const product = json.find(item => item.id === i);
      displayStoreItem(product);

      if (product) {
        console.log(product);
      }
    }
  });

  function displayStoreItem(product){
    document.getElementById('panel-heading'+product.id).textContent = product.title+' - $'+product.price;

    description=product.description
    if(description.length>30){
      description=description.substring(0,100)+'...'
    }
    document.getElementById('panel-footer'+product.id).textContent = description;
  }