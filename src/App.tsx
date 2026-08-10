/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "motion/react";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import ProgramDetails from "./pages/ProgramDetails";
import Admissions from "./pages/Admissions";
import Placement from "./pages/Placement";
import Faculty from "./pages/Faculty";
import FeatureDetails from "./pages/FeatureDetails";
import Research from "./pages/Research";
import LabDetails from "./pages/LabDetails";
import Contact from "./pages/Contact";
import SplashScreen from "./components/layout/SplashScreen";

export default function App() {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2600); // Wait for the loading bar animation to finish
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <AnimatePresence>
        {showSplash && <SplashScreen key="splash" />}
      </AnimatePresence>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="programs" element={<Programs />} />
          <Route path="programs/:id" element={<ProgramDetails />} />
          <Route path="admissions" element={<Admissions />} />
          <Route path="placement" element={<Placement />} />
          <Route path="faculty" element={<Faculty />} />
          <Route path="feature/:id" element={<FeatureDetails />} />
          <Route path="research" element={<Research />} />
          <Route path="lab/:id" element={<LabDetails />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
