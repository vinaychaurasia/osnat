import React from "react";
import './ShampooFacewash.css';
import ProductsCard from "../../productsCard/ProductsCard";

const products = [
    {
        id: 1,
        image: "",
        alt: "productItem1",
        name: "Product name 1",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa saepe optio eos facere nisi deserunt, voluptate excepturi dolor iusto praesentium eum illo velit labore, sunt exercitationem odio fugiat ut laboriosam"
    },
    {
        id: 2,
        image: "image1",
        alt: "productItem2",
        name: "Product name 2",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa saepe optio eos facere nisi deserunt, voluptate excepturi dolor iusto praesentium eum illo velit labore, sunt exercitationem odio fugiat ut laboriosam"
    },
    {
        id: 3,
        image: "image1",
        alt: "productItem3",
        name: "Product name 3",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa saepe optio eos facere nisi deserunt, voluptate excepturi dolor iusto praesentium eum illo velit labore, sunt exercitationem odio fugiat ut laboriosam"
    },
    {
        id: 4,
        image: "image1",
        alt: "productItem4",
        name: "Product name 4",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa saepe optio eos facere nisi deserunt, voluptate excepturi dolor iusto praesentium eum illo velit labore, sunt exercitationem odio fugiat ut laboriosam"
    },
    {
        id: 5,
        image: "image1",
        alt: "productItem5",
        name: "Product name 5",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Culpa saepe optio eos facere nisi deserunt, voluptate excepturi dolor iusto praesentium eum illo velit labore, sunt exercitationem odio fugiat ut laboriosam"
    }
];

const ShampooFacewash = () => {
    return (
        <section className="card-section">
            {products.map(item => {
                return <ProductsCard 
                    id = {item.id}
                    image = {item.image}
                    alt = {item.alt}
                    name = {item.name}
                    description = {item.description}
                />
            })}
        </section>
    );
}

export default ShampooFacewash;