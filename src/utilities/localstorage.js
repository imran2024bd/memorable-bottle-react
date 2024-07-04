const getStoredCart = () => {
 const storedCartString =  localStorage.getItem('cart');
 if (storedCartString) {
    return JSON.parse(storedCartString)
 }
 return [];
}

const saveCartToLS = cart =>{
   const cartStringified = JSON.stringify(cart);
   localStorage.setItem('cart' , cartStringified);
}

const addToLS = id => {
    const cart = getStoredCart();
    cart.push(id);
    // save to local storage
    saveCartToLS(cart);
}

export {addToLS}




// 2nd Practise  and workings

// const getStoredCart = () => {
//    const storedCartString = localStorage.getItem('cart');

//   if (storedCartString) {
//    return JSON.parse(storedCartString)
//   }

//   return [];
// }

// const saveCartToLS = cart =>{
//   const saveCartStringfied = JSON.stringify(cart)
//   localStorage.setItem('cart', saveCartStringfied)
// }

// const addToLS = newid =>{
//    const cart = getStoredCart();
//    cart.push(newid)
//    // save to LS
//    saveCartToLS(cart);
//    // finally all data push in LS by formatting of stringfied
// }

// export {addToLS}
