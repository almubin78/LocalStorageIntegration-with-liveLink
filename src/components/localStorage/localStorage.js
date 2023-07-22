const addToLocal = id =>{
    let localStorageCart = {};
    //Parsing saveCart to localStorageCart
    const saveCart = localStorage.getItem('mySaved');
    if(saveCart){
        localStorageCart = JSON.parse(saveCart)
    }
    // add quantity
    const quantity = localStorageCart[id];
    if(quantity){
        const newQuantity = quantity + 1;
        localStorageCart[id]= newQuantity;
    }else{
        localStorageCart[id] = 1;
    }

    localStorage.setItem('mySaved',JSON.stringify(localStorageCart))
}


// get LocalStorage
const getLocalStorage = () =>{
    let localStorageCart = {};
    //Parsing saveCart to localStorageCart
    const saveCart = localStorage.getItem('mySaved');
    if(saveCart){
        localStorageCart = JSON.parse(saveCart)
    }
    return localStorageCart;
}
export {
    addToLocal,
    getLocalStorage
}