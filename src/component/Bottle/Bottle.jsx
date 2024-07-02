import './Bottle.css'
const Bottle = ({bottle}) => {
    // console.log(bottle);
    const {name , img , price }=  bottle;
    return (
        <div className="bottle" >
            <h3>Bottle Name : {name} </h3>
            <p> <img src= {img} ></img> </p>
            <p> Price $ {price} </p>
            <button>Get Purchase</button>
        </div>
    );
};

export default Bottle;