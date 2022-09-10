function getInputValueById(id){
   const inputField = document.getElementById(id);
   const inputValue = inputField.value;
   return inputValue;
}

function addProduct(){
    const productName = getInputValueById('product-name');
    const productQuantityString = getInputValueById('product-quantity');
    const productQuantity = Number(productQuantityString);
    /* console.log(productName);
    console.log(typeof productName); */
    if(typeof productName !== 'string' || !isNaN(productName) || !Number.isInteger(productQuantity)){
       alert('Product name should be written by letters and Product quantity should be a number');
       return
    }
    console.log(productName);
    console.log(productQuantity);

    
    


}