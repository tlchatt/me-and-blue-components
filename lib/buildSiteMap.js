import React from 'react';
import ReactDOMServer from 'react-dom/server';
import fs from 'fs';
export const writeSiteMap = (allPages,branding) => {

 // console.log('branding' , branding)
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>
            <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`;

  for (let page of allPages){
    sitemap += buildSiteMapPage(page, branding)
  }
  sitemap += `</urlset>`;
  fs.writeFileSync('public/sitemap.xml',sitemap);
}
const buildSiteMapPage = (page, branding) => {

    let url = branding.Settings.Url + page.url;
    if (page.published){
      return elementXML(page.updatedAt, url)
    }
    return

}
const elementXML = (lastmod, location) => {
  const timestamp = Date.parse(lastmod);
  const dateFormat = new Date(timestamp);
  const lastmodISO = dateFormat.toISOString();
console.log(lastmodISO)
  return ReactDOMServer.renderToStaticMarkup(
    <url>
      <loc>{location}</loc>
      <lastmod>{lastmodISO}</lastmod>
    </url>
  )
}
