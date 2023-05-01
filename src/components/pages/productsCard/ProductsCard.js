import React from "react";
import img1 from 'C:\\Users\\vchaurasia\\Desktop\\projects\\osnat\\src\\images\\skinClues.jpg';
import './ProductsCard.css';

const ProductsCard = () => {
    return(
        <div className="card">
            <div className="card-image card-1">
                <img src={img1} alt="product"></img>
            </div>
            <h2 className="content">
                Product name 1
            </h2>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa saepe optio eos facere nisi 
                deserunt, voluptate excepturi dolor iusto praesentium eum illo velit labore, sunt exercitationem 
                odio fugiat ut laboriosam.
            </p>
        </div>
    )
}

export default ProductsCard;