import React, { lazy, Suspense } from 'react';
import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";

const LazyNavbar = lazy(() => import('./components/Navbar'));
const LazyHero = lazy(() => import('./components/Hero'));
const LazyStats = lazy(() => import('./components/Stats'));
const LazyBusiness = lazy(() => import('./components/Business'));
const LazyBilling = lazy(() => import('./components/Billing'));
const LazyCardDeal = lazy(() => import('./components/CardDeal'));
const LazyTestimonials = lazy(() => import('./components/Testimonials'));
const LazyClients = lazy(() => import('./components/Clients'));
const LazyCTA = lazy(() => import('./components/CTA'));
const LazyFooter = lazy(() => import('./components/Footer'));

const LoadingOverlay = () => (
  <div className="fixed top-0 left-0 w-full h-full bg-primary flex justify-center items-center z-50">
    <div className="text-white">Loading...</div>
  </div>
);

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Suspense fallback={<LoadingOverlay />}>
          <LazyNavbar />
        </Suspense>
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Suspense fallback={<LoadingOverlay />}>
          <LazyHero />
        </Suspense>
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Suspense fallback={<LoadingOverlay />}>
          <LazyStats />
          <LazyBusiness />
          <LazyBilling />
          <LazyCardDeal />
          <LazyTestimonials />
          <LazyClients />
          <LazyCTA />
          <LazyFooter />
        </Suspense>
      </div>
    </div>
  </div>
);

export default App;
