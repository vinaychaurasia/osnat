import React from 'react';
import ProductsCard from '../../productsCard/ProductsCard';

import ZYLID_600_TAB from '../../../../images/DSC_0016.JPG';
import MSM_GOLD_TAB from '../../../../images/DSC_0022.JPG';
import MOXYNOS_625_LB_TAB from '../../../../images/DSC_0130.JPG';
import MSM_GOLD from '../../../../images/DSC_0022.JPG';
import NUTRI_HAIR from '../../../../images/DSC_0032.JPG';
import CAL_ON_PLUS_SOFTGEL from '../../../../images/DSC_0046.JPG';
import MNT from '../../../../images/DSC_0051.JPG';
import PANTOS_DSR_CAP from '../../../../images/DSC_0295.JPG';

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
        image: PANTOS_DSR_CAP,
        alt: "PANTOS-DSR CAP",
        name: "PANTOS-DSR CAP",
        compositions: "PANTOPRAZOLE SODIUM (EC) 40MG + DOMPERIDONE (SR) 30MG",
        price: 125.00
    },
    {
        id: 5,
        image: MSM_GOLD,
        alt: "MSM GOLD+ TAB",
        name: "MSM GOLD+ TAB",
        compositions: "GLUCOSAMINE SULPHATE + MSM + VITAMINS + COLLAGEN PEPTIDASE + SODIUM HYALURONATE + CURCUMIN EXTRACT + BOSWELLIA EXTRACT TABLETS",
        price: 199.00
    },
    {
        id: 6,
        image: CAL_ON_PLUS_SOFTGEL,
        alt: "CAL-ON PLUS SOFTGEL CAP",
        name: "CAL-ON PLUS SOFTGEL CAP",
        compositions: "CALCIUM CARBONATE  + VITAMIN D3  + MAGNESIUM + MANGANESE + COPPER + BORON SOFTGEL CAPSULE",
        price: 199.00
    },
    {
        id: 7,
        image: MNT,
        alt: "MNT-5 SOFTGEL CAP",
        name: "MNT-5 SOFTGEL CAP",
        compositions: "MECOBALAMIN 1500MCG + ALPHA LIPOIC ACID 100MG + INOSTIOL 100MG + FOLIC ACID 1.5MG + CHROMIUM NICOTINATE 200MCG + SELENIUM DIOXIDE 55MCG + BENFOTIAMINE 150MG",
        price: 235.00
    },
    {
        id: 8,
        image: NUTRI_HAIR,
        alt: "MNT-5 SOFTGEL CAP",
        name: "MNT-5 SOFTGEL CAP",
        compositions: "MECOBALAMIN 1500MCG + ALPHA LIPOIC ACID 100MG + INOSTIOL 100MG + FOLIC ACID 1.5MG + CHROMIUM NICOTINATE 200MCG + SELENIUM DIOXIDE 55MCG + BENFOTIAMINE 150MG",
        price: 199.00
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