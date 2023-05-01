import React from 'react';
import Navbar from './components/pages/navbar/Navbar';
import './App.css';
import Home from './components/pages/home/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Services from './components/pages/Services';
import Products from './components/pages/products/Products';
import ContactUs from './components/pages/contactUs/ContactUs';
// import SignUp from './components/pages/SignUp';
import Tablets from './components/pages/Tablets/Tablets';
import AboutUs from './components/pages/company/AboutUs';
import Infrastructure from './components/pages/company/Infrastructure';
import Quality from './components/pages/company/Quality';
import Management from './components/pages/company/Management';
import BabyCare from './components/pages/products/babyCare/BabyCare';
import Capsules from './components/pages/products/capsules/Capsules';
import PediatricDropsSyrups from './components/pages/products/pediatricDropsSyrups/PediatricDropsSyrups';
import CreamsOintmentsGels from './components/pages/products/creamsOintmentsGels/CreamsOintmentsGels';
import ShampooFacewash from './components/pages/products/shampooFacewash/ShampooFacewash';
import SyrupsInjections from './components/pages/products/syrupsInjections/SyrupsInjections';
import ProteinPowder from './components/pages/products/proteinPowder/ProteinPowder';
import HerbalCapsulesTablets from './components/pages/products/herbalCapsulesTablets/HerbalCapsulesTablets';
import HerbalSyrupsOil from './components/pages/products/herbalSyrupsOil/HerbalSyrupsOil';
import HerbalJuiceChurna from './components/pages/products/herbalJuiceChurna/HerbalJuiceChurna';
import FranchiseBusiness from './components/pages/franchiseBusiness/FranchiseBusiness';
import Footer from './components/pages/footer/Footer';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        {/* <Route path='/services' element={<Services />} /> */}
        <Route path='/products' element={<Products />} />
        <Route path='/franchise' element={<FranchiseBusiness />} />
        <Route path='/contact-us' element={<ContactUs />} />
        {/* <Route path='/sign-up' element={<SignUp />} /> */}
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/infrastructure' element={<Infrastructure />} />
        <Route path='/quality' element={<Quality />} />
        <Route path='/management' element={<Management />} />

        <Route path='/products/tablets' element={<Tablets />} />
        <Route path='/products/capsules' element={<Capsules />} />
        <Route path='/products/pediatric-drops' element={<PediatricDropsSyrups />} />
        <Route path='/products/creams-ointments-gels' element={<CreamsOintmentsGels />} />
        <Route path='/products/beauty' element={<ShampooFacewash />} />
        <Route path='/products/baby-care' element={<BabyCare />} />
        <Route path='/products/syrup-injection' element={<SyrupsInjections />} />
        <Route path='/products/protein-powder' element={<ProteinPowder />} />
        <Route path='/products/herbal-capsules-tablets' element={<HerbalCapsulesTablets />} />
        <Route path='/products/herbal-syrups-Oils' element={<HerbalSyrupsOil />} />
        <Route path='/products/herbal-juice-churna' element={<HerbalJuiceChurna />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
