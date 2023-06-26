import React, {useState, useRef, useEffect} from 'react';

import OurProductsData from './OurProductsData';
import product1 from '../../../images/DERMACLUES (13).jpeg';
import product2 from '../../../images/DERMACLUES (17).jpeg';
import product3 from '../../../images/DERMACLUES (24).jpeg';

import './OurProducts.css';

const products = [
    {
        name: "Tablet",
        image: product1
    },
    {
        name: "Tablet",
        image: product1
    },
    {
        name: "Tablet",
        image: product1
    },
    {
        name: "Tablet",
        image: product1
    },
    {
        name: "Tablet",
        image: product1
    },
    {
        name: "Tablet",
        image: product1
    },
    {
        name: "Tablet",
        image: product1
    },
    {
        name: "Tablet",
        image: product1
    },
    {
        name: "Tablet",
        image: product1
    },
    {
        name: "Tablet",
        image: product1
    },
];

const OurProducts = () => {

    const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    if (slider) {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
        }, 2000);
  
        slider.scrollLeft = currentIndex * slider.offsetWidth;
  
        return () => {
          clearInterval(interval);
        };
      }
    }, [currentIndex, products.length]);

    return(
        <div className="product">
            <h1>We Offer Wide</h1>
            <h1>Range of Products</h1>
            <p>High quality Osnat pharmaceutical and herbal drugs are endorsed by the nation's best 
                hospitals and physicians. We have a wide variety of pharmaceutical drugs that are 
                specially designed to satisfy the medical needs of society.
            </p>
            <div>
            <div className="product-slider" ref={sliderRef}>
                {products.map((product, index) => (
                    <div className="product-item" key={index}>
                    <img src={product.image} alt={product.name} />
                    <h4>{product.name}</h4>
                    </div>
                ))}
                </div>
            </div>
            {/* <div className="product-card">
                <OurProductsData 
                    image={product1}
                    heading="Tablets"
                    url="/products/tablets"
                />
                <OurProductsData 
                    image={product2}
                    heading="Capsules"
                    url="/products/capsules"
                />
                <OurProductsData 
                    image={product1}
                    heading="Pediatric Drops"
                    url="/products/pediatric-drops"
                />
                <OurProductsData 
                    image={product2}
                    heading="Creams and Gels"
                    url="/products/creams-ointments-gels"
                />
                <OurProductsData 
                    image={product1}
                    heading="Beauty"
                    url="/products/beauty"
                />
                <OurProductsData 
                    image={product2}
                    heading="Baby-Care"
                    url="/products/baby-care"
                />
                <OurProductsData 
                    image={product1}
                    heading="Syrup and injections"
                    url="/products/syrup-injection"
                />
                <OurProductsData 
                    image={product2}
                    heading="Protein Powder"
                    url="/products/protein-powder"
                />
                <OurProductsData 
                    image={product1}
                    heading="Herbal & Syrup Tablets"
                    url="/products/herbal-capsules-tablets"
                />
                <OurProductsData 
                    image={product2}
                    heading="Herbal & Syrup Oils"
                    url="/products/herbal-syrups-Oils"
                />
                <OurProductsData 
                    image={product1}
                    heading="Herbal & juice Churna"
                    url="/products/herbal-juice-churna"
                />
            </div> */}
        </div>
    );
}

export default OurProducts;