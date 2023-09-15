//this works until gregg lights it on fire
const latLongREGEXP = /-?\d{2}\.\d{6}/g;

const structureArticle = (page, absoluteURL, branding, OGImage) => {

  let structuredData =  {

    //add breadcrumbs in future update
    '@context': 'https://schema.org',
      '@type': 'Article',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': absoluteURL
      },
      description: page.Description,
      inLanguage: 'en-US',
      image: OGImage,
      datePublished: page.published_at,
      dateModified: page.updated_at,
      author: {
        "@type": "Organization",
        name: "Technologic"
      },
       publisher: {
        "@type": "Organization",
        name: "Technologic",
        logo: {
          "@type": "ImageObject",
          url: "https://static2.clutch.co/s3fs-public/logos/technologic_chattanooga_logo.png?4XCmkvnTEasyCx2uMu2Hbd75r9jScXEP"
        }
      }
  }
  return structuredData;
}

const structureWebPage = (page, absoluteURL, branding, OGImage) => {

  let structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "primaryImageOfPage": OGImage,
    description: page.Description,
    inLanguage: 'en-US',
    image: OGImage,
    datePublished: page.published_at,
    dateModified: page.updated_at,
    author: {
      "@type": "Organization",
      name: "Technologic"
    },
     publisher: {
      "@type": "Organization",
      name: "Technologic",
      logo: {
        "@type": "ImageObject",
        url: "https://static2.clutch.co/s3fs-public/logos/technologic_chattanooga_logo.png?4XCmkvnTEasyCx2uMu2Hbd75r9jScXEP"
      }
    }
  }

  return structuredData;

}

const structureLegal = (page, absoluteURL, branding, OGImage) => {


  let sameAs = [branding.Facebook, branding.Twitter, branding.Youtube,
      branding.Instagram, branding.Pinterest, branding.Google];

  sameAs = sameAs.filter((site => site != null));

  let structuredData = {
  "@context": "http://schema.org/",
  "@type": "LegalService",
  "priceRange":"affordable",
   "image": [
    OGImage
   ],
   "email": branding.Email,
  "name": branding.Name,
   "url": absoluteURL,
   "sameAs" : sameAs,
   "telephone": branding.Phone,
   "address": {
      "@type": "PostalAddress",
      "addressLocality": branding.City,
      "addressRegion": branding.State,
      "postalCode": branding.PostalCode,
      "streetAddress": branding.StreetAddress
    }
 }

  if(branding.GoogleMapsEmbed != ('' || null)){
     structuredData.geo =  {
       "@type": "GeoCoordinates",
       "latitude": branding.GoogleMapsEmbed.match(latLongREGEXP)[2],
       "longitude": branding.GoogleMapsEmbed.match(latLongREGEXP)[1]
     }
   }
 return structuredData;
}

const structureOrg = (page, absoluteURL, branding, OGImage) => {
  let sameAs = [branding.Facebook, branding.Twitter, branding.Youtube,
      branding.Instagram, branding.Pinterest, branding.Google];
  sameAs = sameAs.filter((site => site != null));
  let structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    //image can have multiple images
     "image": [
      OGImage
     ],
    "email": branding.Email,
    "name": branding.Name,
     "url": absoluteURL,
     "sameAs" : sameAs,
     "telephone": branding.Phone,
     "address": {
        "@type": "PostalAddress",
        "addressLocality": branding.City,
        "addressRegion": branding.State,
        "postalCode": branding.PostalCode,
        "streetAddress": branding.StreetAddress
      }
    }

    if(branding.GoogleMapsEmbed != ('' || null)){
      structuredData.geo =  {
        "@type": "GeoCoordinates",
        "latitude": branding.GoogleMapsEmbed.match(latLongREGEXP)[2],
        "longitude": branding.GoogleMapsEmbed.match(latLongREGEXP)[1]
      }
    }
  return structuredData;
}

const structureLocal = (page, absoluteURL, branding, OGImage) => {

  let sameAs = [branding.Facebook, branding.Twitter, branding.Youtube,
      branding.Instagram, branding.Pinterest, branding.Google];

  sameAs = sameAs.filter((site => site != null));

  let structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    //image can have multiple images
     "image": [
      OGImage
     ],
    "email": branding.Email,
    "name": branding.Name,
     "url": absoluteURL,
     "sameAs" : sameAs,
     "telephone": branding.Phone,
     "address": {
        "@type": "PostalAddress",
        "addressLocality": branding.City,
        "addressRegion": branding.State,
        "postalCode": branding.PostalCode,
        "streetAddress": branding.StreetAddress
      }
    }

    if(branding.GoogleMapsEmbed != ('' || null)){
      structuredData.geo =  {
        "@type": "GeoCoordinates",
        "latitude": branding.GoogleMapsEmbed.match(latLongREGEXP)[2],
        "longitude": branding.GoogleMapsEmbed.match(latLongREGEXP)[1]
      }
    }

    return structuredData;

}

export { structureArticle, structureLegal, structureOrg,
  structureLocal, structureWebPage }
