import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import WhatIsCancer from './pages/WhatIsCancer';
import DangerInIndia from './pages/DangerInIndia';
import WarningSigns from './pages/WarningSigns';
import Prevention from './pages/Prevention';
import CancerTypes from './pages/CancerTypes';
import WomensCancers from './pages/WomensCancers';
import LifestyleCancers from './pages/LifestyleCancers';
import DigestiveCancers from './pages/DigestiveCancers';
import MensBloodCancers from './pages/MensBloodCancers';
import MythsFacts from './pages/MythsFacts';
import HelpInIndia from './pages/HelpInIndia';
import AboutAkshay from './pages/AboutAkshay';
import HospitalsInIndia from './pages/HospitalsInIndia';

function App() {
  return (
    <>
      <ScrollToTop />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="what-is-cancer" element={<WhatIsCancer />} />
            <Route path="danger-in-india" element={<DangerInIndia />} />
            <Route path="warning-signs" element={<WarningSigns />} />
            <Route path="prevention" element={<Prevention />} />
            <Route path="cancer-types" element={<CancerTypes />} />
            <Route path="womens-cancers" element={<WomensCancers />} />
            <Route path="lifestyle-cancers" element={<LifestyleCancers />} />
            <Route path="digestive-cancers" element={<DigestiveCancers />} />
            <Route path="mens-blood-cancers" element={<MensBloodCancers />} />
            <Route path="myths-facts" element={<MythsFacts />} />
            <Route path="help-in-india" element={<HelpInIndia />} />
            <Route path="hospitals-in-india" element={<HospitalsInIndia />} />
            <Route path="about-akshay" element={<AboutAkshay />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;