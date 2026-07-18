import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { SEO_CONFIG, getCanonicalUrl } from "../seo.config";

const SEOAdvanced = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  canonical,
  noIndex = false,
  noFollow = false,
  paginated = false,
  pageNumber = 1,
  totalPages = 1,
  children,
}) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const searchParams = location.search;

  // 🔥 FIX: Get SEO data from config
  const seoData = SEO_CONFIG.getSEOData(currentPath);

  

  // Use props or config data
  const finalTitle = title || seoData.title;
  const finalDescription = description || seoData.description;
  const finalKeywords = keywords || seoData.keywords;
  const finalOgTitle = ogTitle || seoData.ogTitle || finalTitle;
  const finalOgDescription =
    ogDescription || seoData.ogDescription || finalDescription;
  const finalOgImage = ogImage || seoData.ogImage || "/default-og-image.jpg";

  // 🔥 FIX: Auto-generate canonical
  let canonicalUrl =
    canonical || seoData.canonical || getCanonicalUrl(currentPath);

  // Remove query parameters from canonical
  canonicalUrl = canonicalUrl.split("?")[0];

  // Handle trailing slash
  const normalizeUrl = (url) => {
    const baseUrl = SEO_CONFIG.baseUrl;
    if (url !== baseUrl && url.endsWith("/")) {
      return url.slice(0, -1);
    }
    return url;
  };

  canonicalUrl = normalizeUrl(canonicalUrl);

  // Handle pagination
  let prevUrl = null;
  let nextUrl = null;

  if (paginated && pageNumber > 1) {
    const baseUrlWithoutParams = canonicalUrl.split("?")[0];
    if (pageNumber > 2) {
      prevUrl = `${baseUrlWithoutParams}?page=${pageNumber - 1}`;
    }
    if (pageNumber < totalPages) {
      nextUrl = `${baseUrlWithoutParams}?page=${pageNumber + 1}`;
    }
  }

  // Build robots
  let robotsContent = "index, follow";
  if (noIndex) {
    robotsContent = "noindex, nofollow";
  }

  return (
    <Helmet>
      {/* Basic Meta */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      {finalKeywords && <meta name="keywords" content={finalKeywords} />}

      {/* 🔥 Canonical - Auto-fetched */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Pagination */}
      {paginated && prevUrl && <link rel="prev" href={prevUrl} />}
      {paginated && nextUrl && <link rel="next" href={nextUrl} />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={finalOgTitle} />
      <meta property="og:description" content={finalOgDescription} />
      {finalOgImage && <meta property="og:image" content={finalOgImage} />}
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:site_name" content="RQMS Consultancy Services" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalOgTitle} />
      <meta name="twitter:description" content={finalOgDescription} />
      {finalOgImage && <meta name="twitter:image" content={finalOgImage} />}

      {/* Robots */}
      <meta name="robots" content={robotsContent} />
      <meta name="googlebot" content={robotsContent} />

      {children}
    </Helmet>
  );
};

export default SEOAdvanced;
