import { useState, useCallback } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/common/WhatsAppButton';
import MobileCallBar from './components/common/MobileCallBar';
import HomePage from './pages/HomePage';
import PackagesPage from './pages/PackagesPage';
import PackageDetailPage from './pages/PackageDetailPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TransportPage from './pages/TransportPage';
import DestinationsPage from './pages/DestinationsPage';
import GalleryPage from './pages/GalleryPage';
import BlogPage from './pages/BlogPage';
import InquiryPage from './pages/InquiryPage';
import ReviewsPage from './pages/ReviewsPage';
import { PackageCategory } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = useCallback((page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);

  const renderPage = () => {
    // Package detail pages
    if (currentPage.startsWith('package-')) {
      const slug = currentPage.replace('package-', '');
      return <PackageDetailPage slug={slug} onNavigate={handleNavigate} />;
    }

    // Category-filtered package pages
    if (currentPage.startsWith('packages-')) {
      const category = currentPage.replace('packages-', '') as PackageCategory;
      return <PackagesPage onNavigate={handleNavigate} filterCategory={category} />;
    }

    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'packages':
        return <PackagesPage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      case 'transport':
        return <TransportPage onNavigate={handleNavigate} />;
      case 'destinations':
        return <DestinationsPage onNavigate={handleNavigate} />;
      case 'gallery':
        return <GalleryPage />;
      case 'blog':
        return <BlogPage onNavigate={handleNavigate} />;
      case 'inquiry':
        return <InquiryPage onNavigate={handleNavigate} />;
      case 'reviews':
        return <ReviewsPage onNavigate={handleNavigate} />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">
        {renderPage()}
      </main>
      <Footer onNavigate={handleNavigate} />
      <WhatsAppButton />
      <MobileCallBar />
      {/* Spacer for mobile call bar */}
      <div className="h-14 md:hidden" />
    </div>
  );
}
