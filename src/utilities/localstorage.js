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

const removeFromLS = id => {
   const cart = getStoredCart();
   // removing every id
   const remaining = cart.filter(idx => idx !== id);
   saveCartToLS(remaining);

}



export {addToLS , getStoredCart, removeFromLS}




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


// 41-6 [Optional] Intro To Local Storage To Store Data Just One Item
