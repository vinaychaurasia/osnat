import React from 'react';
import ProductsCard from '../productsCard/ProductsCard';

import ZYLID_600_TAB from '../../../images/DSC_0016.JPG';
import MSM_GOLD_TAB from '../../../images/DSC_0022.JPG';
import MOXYNOS_625_LB_TAB from '../../../images/DSC_0130.JPG';
import CEFTINAT_200LB_TAB from '../../../images/DSC_0503.JPG';

const products = [
    {
        id: 1,
        image: ZYLID_600_TAB,
        alt: "ZYLID-600 TAB",
        name: "ZYLID-600 TAB",
        compositions: "LINZOLID 600MG TAB",
        price: 430.00
    },
    {
        id: 2,
        image: MSM_GOLD_TAB,
        alt: "MSM GOLD+ TAB",
        name: "MSM GOLD+ TAB",
        compositions: "GLUCOSAMINE SULPHATE + MSM + VITAMINS + COLLAGEN PEPTIDASE + SODIUM HYALURONATE + CURCUMIN EXTRACT + BOSWELLIA EXTRACT TABLETS",
        price: 199.00
    },
    {
        id: 3,
        image: MOXYNOS_625_LB_TAB,
        alt: "MOXYNOS 625 LB TAB",
        name: "MOXYNOS 625 LB TAB",
        compositions: "AMOXYCILLIN 500MG + CLAVULANATE ACID 125MG WITH LB",
        price: 270.00
    },
    {
        id: 4,
        image: CEFTINAT_200LB_TAB,
        alt: "CEFTINAT-200LB TAB",
        name: "CEFTINAT-200LB TAB",
        compositions: "CEFIXIME 200MG WITH LB",
        price: 139.00
    }
];

const Tablets = (props) => {
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

export default Tablets;