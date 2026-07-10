// App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Contact from './pages/Contact';

import ServiceManpower from "./components/services/ServiceManpower";
import ServicePlacement from "./components/services/ServicePlacement";
import ServiceQMSAudit from "./components/services/ServiceQMSAudit";
import ServiceTraining from "./components/services/ServiceTraining";


function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="/services/manpower" element={<ServiceManpower />} />
      <Route path="/services/placement" element={<ServicePlacement />} />
      <Route path="/services/qms-audit" element={<ServiceQMSAudit />} />
      <Route path="/services/training" element={<ServiceTraining />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;