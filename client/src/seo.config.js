export const SEO_CONFIG = {
  // baseUrl: 'http://localhost:5173' || 'https://rqmseconsultancyservices.com/',
  baseUrl: 'https://rqmseconsultancyservices.com/',

  default: {
    title: 'Reliable QMS Expert & Consultancy Services - Gurugram',
    description: 'Leading provider of manpower, placement, QMS & Audit, and training/development & Certification.',
    keywords: 'manpower, placement, QMS & Audit, training/development & Certifications, recruitment',
    ogTitle: 'RQMS Consultancy Services',
    ogDescription: 'Professional services for manpower, placement, QMS & Audit, and training.',
    ogType: 'website',
    twitterCard: 'summary_large_image',
    robots: 'index, follow',
  },

  routes: {
    '/': {
      title: 'Reliable QMS Expert & Consultancy Services - Gurugram',
      description: 'Trusted partner for manpower, placement, QMS Established/Implementation/Sustainability & audit, and training/development & Certification.',
      keywords: 'manpower services, placement services, QMS  Established/Implementation/Sustainability & audit, training/development & Certifications',
      ogTitle: 'Reliable QMS Expert & Consultancy Services',
      ogDescription: 'Leading provider of professional manpower, placement, QMS  Established/Implementation/Sustainability & audit, and training/development & Certifications solutions.',
    },

    '/about': {
      title: 'About Us - RQMS Consultancy Services',
      description: 'Learn about RQMS Consultancy Services - Our mission, vision, and commitment to excellence in manpower, placement, QMS & Audit, and training services.',
      keywords: 'about us, company profile, mission, vision, manpower experts',
      ogTitle: 'About Us - RQMS Consultancy Services',
      ogDescription: 'Discover who we are and what makes us the preferred choice for manpower and training services.',
    },

    '/services': {
      title: 'Our Services - RQMS Consultancy Services',
      description: 'Explore our comprehensive range of services including manpower supply, placement, QMS & Audit, and professional training.',
      keywords: 'services, manpower supply, placement services, QMS & Audit, training programs',
      ogTitle: 'Our Services - RQMS Consultancy Services',
      ogDescription: 'Comprehensive services including manpower, placement, QMS & Audit, and training.',
    },

    '/contact': {
      title: 'Contact Us - RQMS Consultancy Services',
      description: 'Get in touch with RQMS Consultancy Services for manpower, placement, QMS & Audit, and training services.',
      keywords: 'contact, phone, email, address, get in touch, manpower inquiries',
      ogTitle: 'Contact Us - RQMS Consultancy Services',
      ogDescription: 'Reach out to us for all your manpower, placement, and training needs.',
    },

    '/services/manpower': {
      title: 'Manpower Services - RQMS Consultancy Services',
      description: 'Professional manpower services including recruitment, staffing, and workforce management solutions.',
      keywords: 'manpower, staffing, recruitment, workforce management, temporary staffing',
      ogTitle: 'Manpower Services - RQMS Consultancy Services',
      ogDescription: 'Comprehensive manpower and staffing solutions for your business needs.',
    },

    '/services/placement': {
      title: 'Placement Services - RQMS Consultancy Services',
      description: 'Expert placement services connecting talented professionals with the right opportunities.',
      keywords: 'placement, job placement, recruitment, career services, talent acquisition',
      ogTitle: 'Placement Services - RQMS Consultancy Services',
      ogDescription: 'Professional placement services for candidates and employers.',
    },

    '/services/qms-audit': {
      title: 'QMS & Audit Services - RQMS Consultancy Services',
      description: 'Professional Quality Management System (QMS) audit services ensuring compliance and excellence.',
      keywords: 'QMS & Audit, quality management, ISO audit, compliance audit, quality assurance',
      ogTitle: 'QMS & Audit Services - RQMS Consultancy Services',
      ogDescription: 'Expert QMS & Audit services for quality management and compliance.',
    },

    '/services/training': {
      title: 'Training Services - RQMS Consultancy Services',
      description: 'Professional training and development programs for individuals and organizations.',
      keywords: 'training, professional development, corporate training, skill development, workshops',
      ogTitle: 'Training Services - RQMS Consultancy Services',
      ogDescription: 'Comprehensive training programs for professional development.',
    },
  },

  getSEOData: (path, queryParams = '') => {
    // Remove trailing slash if exists
    let cleanPath = path.replace(/\/$/, '');

    // If path is empty, set to '/'
    if (!cleanPath) cleanPath = '/';

    // Find exact match or fallback to parent route
    let routeData = SEO_CONFIG.routes[cleanPath];

    // If no exact match, try to find parent route
    if (!routeData) {
      const pathParts = cleanPath.split('/');
      // Try to find by removing last part (for nested routes)
      while (pathParts.length > 1) {
        pathParts.pop();
        const parentPath = pathParts.join('/') || '/';
        if (SEO_CONFIG.routes[parentPath]) {
          routeData = SEO_CONFIG.routes[parentPath];
          break;
        }
      }
    }

    // Build canonical URL
    const canonicalPath = cleanPath;
    const canonicalUrl = `${SEO_CONFIG.baseUrl}${canonicalPath}`;

    // If route data found, merge with default
    if (routeData) {
      return {
        ...SEO_CONFIG.default,
        ...routeData,
        canonical: canonicalUrl,
        canonicalPath: canonicalPath,
        // Generate full URL for Open Graph
        ogUrl: canonicalUrl,
      };
    }

    return {
      ...SEO_CONFIG.default,
      canonical: canonicalUrl,
      canonicalPath: canonicalPath,
      ogUrl: canonicalUrl,
    };
  },

  normalizePath: (path) => {
    // Remove trailing slash except for root
    if (path !== '/' && path.endsWith('/')) {
      return path.slice(0, -1);
    }
    return path;
  }
};

export const getSEOConfig = (path) => SEO_CONFIG.getSEOData(path);
export const defaultSEO = SEO_CONFIG.default;
export const getCanonicalUrl = (path) => {
  const cleanPath = SEO_CONFIG.normalizePath(path);
  return `${SEO_CONFIG.baseUrl}${cleanPath}`;
};