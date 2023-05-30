import DetailsData from './DetailsData';
import Slider from './slider/Slider';
import SliderData from './slider/SliderData';

import image2 from '../../../images/infrastructure_unit_1.jpg';
import image3 from '../../../images/infrastructure_unit_2.jpg';
import image4 from '../../../images/DERMACLUES (13).jpeg';
import image5 from '../../../images/DERMACLUES (15).jpeg';

import './Details.css';

const Details = () => {
    return(
        <div className="details">
            <h1>Welcome to Osnat</h1>
            <p>Osnat Pharmaceuticals is a leading PCD Pharmaceutical Company. We are one of the prominent PCD 
                Pharmaceutical company in India located at Chandigarh. We believe that keeping customers happy 
                and satisfied is an ultimate step towards success. Since its beginnings, we have maintained the 
                best relation with all of our business partners. 
                This relationship between the business partner and Osnat Pharmaceuticals is based on trust and 
                the quality of service that we have provided since our existence in the PCD Pharmaceutical 
                industry.
                <br />
                We are working hard and leaving no stone unturned to provide the quality of life of 
                patients by providing healthy, reliable, high quality and affordable products. 
                Our products are the best for patience compliance and belief. We are confident in taking new 
                steps to continuously improve our PCD Pharmaceutical. Our organization recognizes that the 
                healthcare sector is constantly evolving in technology and medicine. Our team remains up-to-date 
                on the latest developments in medicines. We sell a wide range of pharmaceutical products that 
                serve patients with ease. 
                Osnat Pharmaceuticals is committed to fulfill and enhance the lives of millions of people and 
                bring smile on their faces. Our Products are manufactured in an ISO, GMP & WHO certified global 
                units.
            </p>

            <Slider slides = {SliderData} />

            <DetailsData
                cName="first-det"
                heading="Infrastructure Unit"
                text="Osnat pharmaceuticals ensures the latest equipment, machinery and innovative processes for the 
                manufacture of world-class pharmaceutical products. Our state-of-the-art manufacturing plants 
                make us the leading contract manufacturer of pharmaceutical products in India and allow us 
                to deliver standardized medicines to clinicians worldwide. As a leading contract production 
                firm, we have built up a major infrastructure plant on our premises. Our infrastructure is 
                well-equipped with state-of-the-art machining technology. A sophisticated infrastructure is 
                very important for every Pharma Manufacturing business. Thus, while bearing in mind the value 
                of high-tech infrastructure services, we have set up a manufacturing unit capable of achieving 
                full output within a minimum timeframe."
                image2={image2}
                image3={image3}
            />
            <DetailsData 
                cName="first-det-reverse"
                heading="Osnat Franchise"
                text="Osnat Pharmaceuticals has emerged as one of the best PCD Pharma companies in India, 
                especially for our reliable manufacturing facilities and timely deliveries of high-quality 
                medical products. With the Monopoly Pharma Franchise program, we at Osnat pharmaceuticals 
                provide the opportunity to regional drug sellers and distributors with monopoly rights. 
                We make sure that our excellent range of healthcare products, including Antibiotics, Analgesics, 
                Gynae Care, Nutraceuticals, Injectables, Syrups/Suspensions, and various Ayurvedic preparations, 
                reaches every corner of our nation through effective distribution and marketing processes."
                image2={image4}
                image3={image5}
            />
        </div>
    );
}

export default Details;