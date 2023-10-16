import Script from 'next/script'

export default function RootLayout({ children }) {
/**
 * Currently can not fire Ga on this side, does not log events so passing via Iframe Parent
 * const analytics_tag='G-M3L9PPY561'
 *     <Script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${analytics_tag}`}
    />
            <Script id="Gtag">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${analytics_tag}', { cookie_flags: 'SameSite=None;Secure' });
          `}
        </Script>
 */
  return (
    <html lang="en">
      <body >{children}</body>
    </html>
  )
}