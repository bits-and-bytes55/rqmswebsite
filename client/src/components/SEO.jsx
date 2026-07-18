import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { SEO_CONFIG, getCanonicalUrl } from "../seo.config";

const SEO = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  ogType,
  twitterCard,
  canonical,
  robots,
  noIndex = false,
  noFollow = false,
  children,
}) => {
  const location = useLocation();

  // Get current path
  const currentPath = location.pathname;
  const searchParams = location.search;

  // 🔥 FIX: Get SEO data from config
  const seoData = SEO_CONFIG.getSEOData(currentPath);

  

  // Use props if provided, otherwise use config data
  const finalTitle = title || seoData.title;
  const finalDescription = description || seoData.description;
  const finalKeywords = keywords || seoData.keywords;
  const finalOgTitle = ogTitle || seoData.ogTitle || finalTitle;
  const finalOgDescription =
    ogDescription || seoData.ogDescription || finalDescription;
  const finalOgImage = ogImage || seoData.ogImage || "/default-og-image.jpg";
  const finalOgType = ogType || seoData.ogType || "website";
  const finalTwitterCard =
    twitterCard || seoData.twitterCard || "summary_large_image";
  const finalRobots = robots || seoData.robots || "index, follow";

  // 🔥 FIX: Build canonical URL - Auto-fetch from config
  let finalCanonical =
    canonical || seoData.canonical || getCanonicalUrl(currentPath);

  // Remove query parameters from canonical (SEO best practice)
  finalCanonical = finalCanonical.split("?")[0];

  // Ensure no trailing slash except for root
  const normalizeUrl = (url) => {
    const baseUrl = SEO_CONFIG.baseUrl;
    if (url !== baseUrl && url.endsWith("/")) {
      return url.slice(0, -1);
    }
    return url;
  };

  finalCanonical = normalizeUrl(finalCanonical);

  // Build robots meta
  let robotsContent = finalRobots;
  if (noIndex) {
    robotsContent = robotsContent.replace("index", "noindex");
  }
  if (noFollow) {
    robotsContent = robotsContent.replace("follow", "nofollow");
  }

  // 🔥 FIX: Ensure Open Graph URL matches canonical
  const finalOgUrl = ogUrl || finalCanonical;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      {finalKeywords && <meta name="keywords" content={finalKeywords} />}

      {/* 🔥 Canonical URL - Auto-fetched from config */}
      <link rel="canonical" href={finalCanonical} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={finalOgType} />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      {finalOgImage && <meta property="og:image" content={finalOgImage} />}
      <meta property="og:url" content={finalOgUrl} />
      <meta property="og:site_name" content="RQMS Consultancy Services" />
      <meta property="og:locale" content="en_US" />

      {/* Twitter */}
      <meta name="twitter:card" content={finalTwitterCard} />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      {finalOgImage && <meta name="twitter:image" content={finalOgImage} />}

      {/* Robots */}
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />

      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Author */}
      <meta name="author" content="RQMS Consultancy Services" />

      {children}
    </Helmet>
  );
};

export default SEO;
