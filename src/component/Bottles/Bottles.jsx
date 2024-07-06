import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bootles.css'
import { addToLS, getStoredCart, removeFromLS } from "../../utilities/localstorage";
import Cart from "../Cart/Cart";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    // load cart from local storage

    // useEffect(() => {
    //     console.log('Called the useEffect', bottles.length);
    //     if (bottles.length > 0) {
    //         const storedCart = getStoredCart();
    //         console.log(storedCart);
    //     }
    // }, [bottles])


    // 41 - 8[Optional] Display Saved Cart From Local Storage

    useEffect(() => {
        console.log('Called the useEffect', bottles.length);
        if (bottles.length) {
            const storedCart = getStoredCart();
            // console.log(storedCart, bottles);
            const savedCart = [];
            for (const id of storedCart) {
                console.log(id);
                const bottle = bottles.find(bottle => bottle.id === id);
                if (bottle) {
                    savedCart.push(bottle)
                }
                // console.log(bottle);
                console.log('saved cart', savedCart);
                setCart(savedCart);
            }

        }
    }, [bottles])


    const handleAddToCart = bottle => {
        const newCart = [...cart, bottle];
        setCart(newCart);
        addToLS(bottle.id);
    }

    // const handleAddToCart = bottle => {
    //     // console.log('Add to chart');
    //     console.log(bottle);
    //     const newCart = [...cart, bottle];
    //     setCart(newCart);
    // }

    const handleRemoveFromCart =  id => {
        // UI or Visula Cart remove
        const remainingCart = cart.filter(bottle => bottle.id !== id);
        setCart(remainingCart);

        // Remove from LS
        removeFromLS(id);
    }


    return (
        <div>
            <h3> Total no. of Bottle : {bottles.length} </h3>

            <Cart cart={cart} handleRemoveFromCart= {handleRemoveFromCart} ></Cart>

            <div className="bottles-container">
                {
                    bottles.map(bottle => <Bottle
                        key={bottle.id}
                        handleAddToCart={handleAddToCart}
                        bottle={bottle} ></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;


// 41-9 [Optional] PropTypes Warning And Remove From Local Storage And Cart
// Remove from LS cart  Time: 5.41 -11.40 , 
// Remove from UI Time: 11.45

