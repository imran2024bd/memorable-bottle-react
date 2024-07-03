import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bootles.css'

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, [])

    const handleAddToCart = bottle = {
        const newCart = [...cart, bottle];
        setCart(newCart);
    }



    // const handleAddToCart = bottle = {
    //     // console.log('Add to chart');
    //     console.log(bottle);
    //     const newCart = [...cart, bottle];
    //     setCart(newCart);
    // }


    return (
        <div>
            <h3> Total no. of Bottle : {bottles.length} </h3>
            <h4>Cart: {cart.length} </h4>
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