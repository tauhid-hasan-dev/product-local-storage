const getInputValueById = id =>{
    const inputField = document.getElementById(id);
    const inputValue = inputField.value;
    inputField.value = '';
    return inputValue;
}

const addProduct = () =>{
    const productName = getInputValueById('product-name');
    const productQuantityString = getInputValueById('product-quantity');
    const productQuantity = Number(productQuantityString);
    //handling error
    if(!isNaN(productName) || !Number.isInteger(productQuantity)){
       alert('Product name should be written by letters and Product quantity should be a number');
       return
    }
   
    setItemsToLocalStorage(productName, productQuantity);
    displayProductToUI();
    
}

const getItemsFromLocalStorage = ()=>{
    const products = localStorage.getItem('All-Products');
    const parseProducts = JSON.parse(products);
    return parseProducts;
}

const setItemsToLocalStorage = (name, quantity) => {
    let products = getItemsFromLocalStorage();

    if(!products){
        products = [];
    }

    let obj = {}
    obj[name] = quantity;
    products.push(obj)
    localStorage.setItem('All-Products', JSON.stringify(products));  
}

const allProducts = document.getElementById('all-products');

const displayProductToUI = () =>{
    allProducts.textContent = '';
    let products = getItemsFromLocalStorage();
    products.forEach(product => {
         for(const property in product){
            const key = property;
            const value = product[property]
            console.log(key, value);
            console.log(allProducts);
            let productCard = document.createElement('div');
            productCard.innerHTML = `
            <div class="shadow-sm p-3 mb-2 bg-body rounded">
                <span class="fs-1">${key}</span>
                Quantity:<small class="fw-bold">
                    ${value}
                </small>
            </div>
            `
            allProducts.appendChild(productCard)
         }
    });
}

displayProductToUI()