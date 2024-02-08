import Head from 'next/head';
import { structureLocal, structureLegal, structureOrg } from '../../lib/structuredData';
const HeadMeta = ({ page, branding }) => {
    console.log('branding',branding)
    console.log('page',page)
    var OGImage = page?.OGImage ? page?.OGImage?.url : branding?.logo?.url ? branding.logo.url : null
    OGImage = process.env.NEXT_PUBLIC_IMAGE_URL + OGImage
    // process.env.NEXT_PUBLIC_IMAGE_URL +  page.OGImage.url ? page.OGImage.url : branding?.logo?.url ? branding.logo.url : null
    if (page.url = '/'){page.url = ''}
    var absoluteURL = branding.Settings.Url + page.Url
    let analytics_tag = process.env.NEXT_PUBLIC_ANALYTICS_TAG
    return (
        <Head>
            {page &&
                <>
                    <title>{page.Settings.MetaTitle || ''}</title>

                    <link rel="canonical" href={absoluteURL} />
                    {analytics_tag &&
                        <link rel="preconnect" href="https://www.google-analytics.com" />
                    }
                    <meta name='description' content={page.Settings.Description} />
                    <meta property="og:image" content={OGImage} />
                    <meta property="og:url" content={absoluteURL} />
                    <meta property="og:type" content="article" />
                    <meta property="og:title" content={page.Settings.MetaTitle} />
                    <meta property="og:description" content={page.Settings.Description} />
                    <meta property="twitter:card" content="summary" />
                    <meta property='twitter:title' content={page.Settings.MetaTitle} />
                    <meta property='twitter:description' content={page.Settings.Description} />
                    <meta property="twitter:image" content={OGImage} />
                    <meta property="twitter:site" content={branding.Twitter} />
                    {page?.isOrg &&
                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{ __html: JSON.stringify(structureOrg(page, absoluteURL, branding, OGImage)) }}
                        ></script>
                    }

                    {page?.isLegal &&
                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{ __html: JSON.stringify(structureLegal(page, absoluteURL, branding, OGImage)) }}
                        ></script>
                    }

                    {page?.isLocalBiz &&
                        <script
                            type="application/ld+json"
                            dangerouslySetInnerHTML={{ __html: JSON.stringify(structureLocal(page, absoluteURL, branding, OGImage)) }}
                        ></script>
                    }
                    {branding?.ClickCeaseTag &&
                        <div dangerouslySetInnerHTML={{ __html: branding.ClickCeaseTag }} />
                    }
                    {branding?.Pixel &&
                        <div dangerouslySetInnerHTML={{ __html: branding.Pixel }} />
                    }
                    {branding?.ChatBubble &&
                        <div dangerouslySetInnerHTML={{ __html: branding.ChatBubble }} />
                    }

                </>
            }
        </Head>
    )
}
export default HeadMeta;