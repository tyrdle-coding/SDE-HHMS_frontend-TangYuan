import { AnimatePresence, motion } from 'motion/react';
import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Navigation } from '../../components/Navigation';
import { Toaster } from '../../components/Toaster';
import { Footer } from '../../components/Footer';

export function Root() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 34, scale: 1.015, filter: 'blur(14px)' }}
          animate={{ opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' }}
          exit={{ opacity: 0, y: -18, filter: 'blur(10px)' }}
          transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
      <Toaster />
    </div>
  );
}
