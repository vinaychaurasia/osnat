import React from "react";
import './Capsules.css';
import ProductsCard from "../../productsCard/ProductsCard";
import image1 from '../../../../images/DERMACLUES (15).jpeg';
// import Card from "../../../card/Card";

const products = [
    {
        id: 1,
        image: image1,
        alt: "productItem1",
        name: "Product name",
        compositions: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa saepe optio eos facere nisi deserunt, voluptate excepturi dolor iusto praesentium eum illo velit labore, sunt exercitationem odio fugiat ut laboriosam",
        price: 200
    },
    {
        id: 2,
        image: image1,
        alt: "productItem2",
        name: "Product name",
        compositions: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa saepe optio eos facere nisi deserunt, voluptate excepturi dolor iusto praesentium eum illo velit labore, sunt exercitationem odio fugiat ut laboriosam",
        price: 200
    },
    {
        id: 3,
        image: image1,
        alt: "productItem3",
        name: "Product name",
        compositions: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa saepe optio eos facere nisi deserunt, voluptate excepturi dolor iusto praesentium eum illo velit labore, sunt exercitationem odio fugiat ut laboriosam",
        price: 200
    },
    {
        id: 4,
        image: image1,
        alt: "productItem4",
        name: "Product name 4",
        compositions: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa saepe optio eos facere nisi deserunt, voluptate excepturi dolor iusto praesentium eum illo velit labore, sunt exercitationem odio fugiat ut laboriosam",
        price: 200
    },
    {
        id: 5,
        image: image1,
        alt: "productItem5",
        name: "Product name 5",
        compositions: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa saepe optio eos facere nisi deserunt, voluptate excepturi dolor iusto praesentium eum illo velit labore, sunt exercitationem odio fugiat ut laboriosam",
        price: 200
    }
];


const Capsules = (props) => {
    // const[showHoverEffect, setShowHoverEffect] = useState(false);

    // const hoverEffectHandler = (event) => {
    //     setShowHoverEffect(true);
    // }

    // const removeEffectHandler = (event) => {
    //     setShowHoverEffect(false);
    // }

    return (
        <section className="card-section">
            {products.map(item => {
                return <ProductsCard 
                    id = {item.id}
                    image = {item.image}
                    alt = {item.alt}
                    name = {item.name}
                    compositions = {item.compositions}
                    price = {item.price}
                />
            })}
        </section>
    );
}

export default Capsules;