import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEO_CONFIG, getCanonicalUrl } from '../seo.config';

export const useSEO = (customData = {}) => {
  const location = useLocation();
  const path = location.pathname;
  
  useEffect(() => {
    // 🔥 FIX: Get SEO data from config
    const seoData = SEO_CONFIG.getSEOData(path);
    
    // Merge with custom data
    const finalData = { ...seoData, ...customData };
    
    // 🔥 FIX: Auto-generate canonical if not provided
    if (!finalData.canonical) {
      finalData.canonical = getCanonicalUrl(path);
    }
    
    // Update document title
    document.title = finalData.title;
    
    // Update meta tags
    const updateMetaTag = (name, content) => {
      if (!content) return;
      
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.name = name;
        document.head.appendChild(meta);
      }
      meta.content = content;
    };
    
    const updateLinkTag = (rel, href) => {
      if (!href) return;
      
      let link = document.querySelector(`link[rel="${rel}"]`);
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        document.head.appendChild(link);
      }
      link.href = href;
    };
    
    // Update all meta tags
    updateMetaTag('description', finalData.description);
    updateMetaTag('keywords', finalData.keywords);
    updateMetaTag('robots', finalData.robots || 'index, follow');
    
    // 🔥 FIX: Update canonical link
    updateLinkTag('canonical', finalData.canonical);
    
    // Open Graph tags
    const updateOGTag = (property, content) => {
      if (!content) return;
      
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };
    
    updateOGTag('og:title', finalData.ogTitle || finalData.title);
    updateOGTag('og:description', finalData.ogDescription || finalData.description);
    updateOGTag('og:url', finalData.canonical);
    updateOGTag('og:type', finalData.ogType || 'website');
    
    console.log('✅ SEO Updated for:', path);
    console.log('🔗 Canonical URL:', finalData.canonical);
    
    // Cleanup function (optional)
    return () => {
      // Cleanup if needed
    };
  }, [path, customData]);
  
  // Return SEO data for component use
  const seoData = SEO_CONFIG.getSEOData(path);
  return {
    ...seoData,
    canonical: seoData.canonical || getCanonicalUrl(path)
  };
};

export default useSEO;