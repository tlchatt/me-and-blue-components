import Script from 'next/script'
const analytics_tag='G-M3L9PPY561'
export default function RootLayout({ children }) {
  
  return (
    <html lang="en">
    <Script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${analytics_tag}`}
    />
            <Script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${analytics_tag}');
          `}
        </Script>
      <body >{children}</body>
    </html>
  )
}