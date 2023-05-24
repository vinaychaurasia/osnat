import React from "react";
import './ProductsCard.css';
// import Card from "../../card/Card";

const ProductsCard = (props) => {
    return(
        <div className="card" key={props.id}>
            <div className="card-image">
                <img src={props.image} alt={props.alt}></img>
            </div>
            <ul className="brand-name">
                <li className="left">
                    {props.name}
                </li>
                <li className="right">
                    ₹<b>{props.price}</b>
                </li>
            </ul>
            <p className="compositions">
                {props.compositions}<br></br>
            </p>
        </div>
    )
}

export default ProductsCard;