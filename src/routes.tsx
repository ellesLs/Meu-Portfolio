import { Routes, Route, useLocation } from 'react-router-dom';

import { Home } from './pages/Home';
import { About } from './pages/About';
import { Projects } from './pages/Projects';
import { PageNotFound } from './pages/PageNotFound';

import { RootLayout } from './layouts/RootLayout';

import { AnimatePresence } from 'framer-motion';

export function AppRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
}
