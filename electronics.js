fetch('https://api.escuelajs.co/api/v1/products') 
  .then(res => res.json())
  .then(json => {
    
    const startingId = 22;
    const numberOfItems = 6;
    for (let i = startingId; i < startingId + numberOfItems; i++) {
      const product = json.find(item => item.id === i);
      if (product) {
        console.log(product);
      }
    }
  });