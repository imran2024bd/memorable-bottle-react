import './Bottle.css'
const Bottle = ({ bottle, handleAddToCart }) => {
    // console.log(bottle);
    const { name, img, price } = bottle;
    // console.log(bottle);
    return (
        <div className="bottle" >
            <h3>Bottle Name : {name} </h3>
            <p> <img src={img} ></img> </p>
            <p> Price $ {price} </p>
            <button onClick={() => handleAddToCart(bottle)} >Get Purchase</button>
        </div>
    );
};

export default Bottle;