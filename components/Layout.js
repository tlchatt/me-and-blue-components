'use client'
import { ResponsiveSideNav } from "./nav/Responsive-Side-Nav";
import { useMediaQuery } from '@/lib/statefulUtils'
import { GoogleMap } from '@/components/GoogleMap.js'
import { TextBlock } from '@/components/content_sections/TextBlock'
import { MiniNavChips } from '@/components/content_sections/MiniNavChips.js'
import { GridImageTextWrap } from '@/components/content_sections/GridImageTextWrap.js'
import { YTEMBED } from '@/components/content_sections/YTembed.js'
import { HeroImage } from '@/components/content_sections/HeroImage'
import { BlogRoll } from './BlogRoll'
import { FullWidthTextandImage } from '@/components/content_sections/FullWidthTextandImage.js'
import { FullWidthImage } from '@/components/content_sections/FullWidthImage.js'
import { FeaturedText } from '@/components/content_sections/FeaturedText.js'
import { GridCards } from '@/components/content_sections/GridCards.js'
import { ActionBanner } from '@/components/content_sections/ActionBanner.js'
import { Testimonials } from '@/components/content_sections/Testimonials.js'
import { LocationList } from '@/components/content_sections/LocationList.js'
import { QuoteBlock } from '@/components/content_sections/QuoteBlock'
import { Form } from "@/components/Form";
import styles from './Layout.module.scss'
import TWNav from "./TWNav/TWNav"
import TWFooter from "./TWNav/TWFooter"
import { TWHeroImage } from './content_sections/TWHeroImage'
import { TWVideo } from './content_sections/TWVideo'
import { TWFullWidthTextandImage } from './content_sections/TWFullWidthTextandImage.js'
import { TWTextBlock } from './content_sections/TWTextBlock'
import { TWScheduling } from './content_sections/TWScheduling'
import { TWTestimonials } from '@/components/content_sections/TWTestimonials.js'
import { GlobalContextProvider } from '@/components/Context';
import { log } from '@/lib/logging'
export function ClientPageLayout({ navEntries, subNavEntries, branding, page, appearance, allPages }) {
  // console.log(page, navEntries, subNavEntries, branding,appearance )
  return (
    <GlobalContextProvider>
      <div className={`${styles.root} `} id="ClientPageLayout">
        <NavLayout
          navEntries={navEntries}
          subNavEntries={subNavEntries}
          branding={branding}
          appearance={appearance}
          page={page} />
        <ContentLayout
          page={page}
          appearance={appearance}
          branding={branding}
          allPages={allPages}
        />
      </div>
    </GlobalContextProvider>
  )
}
export function NavLayout({ page, navEntries, subNavEntries, branding, appearance, children }) {
  log('Me-and-Blue-Theme: ' + appearance?.Settings?.Theme)
  var navLayout
  var footerLayout
  appearance?.Layout?.forEach(element => {
    if (element.type == "nav") { navLayout = element }
    if (element.type == "footer") { footerLayout = element }
  })

  if (appearance?.Settings?.Theme == 'Blue') {
    return (
      <>
        {appearance?.Nav &&
          <>
            <TWNav navEntries={navEntries} subNavEntries={subNavEntries} branding={branding} appearance={appearance} navLayout={navLayout} />

            <div className='w-full mx-auto  mt-28 sm:mt-36'>
              {children}
            </div>
          </>
        }
        {!appearance?.Nav &&
          <div className='w-full mx-auto '>
            {children}
          </div>
        }
        {appearance?.Footer &&
          <TWFooter appearance={appearance} branding={branding} navEntries={navEntries} subNavEntries={subNavEntries} footerLayout={footerLayout} />
        }
      </>
    )
  }


  return (
    <ResponsiveSideNav navEntries={navEntries} subNavEntries={subNavEntries} branding={branding} appearance={appearance} />
  )
}
export const ContentLayout = ({ page, appearance, branding, blogRoll, allPages }) => {
  let pixel = process.env.NEXT_PUBLIC_PIXEL_ID
  var mapSection
  branding?.Layout?.forEach(element => {
    if (element.Type == "map") { mapSection = element }
  })
  var mapSection
  branding?.Layout?.forEach(element => {
    if (element.Type == "map") { mapSection = element }
  })
  let pixelStyle = {
    diplay: 'none'
  }
  const isHighRes = useMediaQuery('(min-width: 1836px)');
  const isLarge = useMediaQuery('(min-width: 1200px)');
  const isMedium = useMediaQuery('(min-width: 900px)');
  let ContentLayoutStyle = {
    marginTop: branding?.Settings?.Logo?.Height ? branding?.Settings?.Logo?.Height : '100px',
    display: 'grid',
    width: '100%',
  }
  let ContentSectionStyle = {
    justifySelf: 'end',
    padding: isLarge ? '64px' : '32px',
    maxWidth: isHighRes ? '1536px' :  isMedium ? 'calc(100% - 300px)' : '100%',
    width: '100%',
  }
  let BigPaperStyle = {
    boxShadow: '0px 3px 3px -2px rgba(0,0,0,0.2),0px 3px 4px 0px rgba(0,0,0,0.14),0px 1px 8px 0px rgba(0,0,0,0.12)',
    borderRadius: '4px',
  }
  if (appearance?.Settings?.Theme == 'Blue') {
    return (
      <>
        {page.Layout &&
          page.Layout.map((section, index) => (
            <TWHeroSection section={section} appearance={appearance} key={index} branding={branding} />
          ))
        }

        {page.Layout &&
          page.Layout.map((section, index) => (
            <TWSection section={section} page={page} allPages={allPages} appearance={appearance} branding={branding} key={index} />
          ))
        }
      </>
    )
  }
  return (

    <main className={`${styles.main} `} style={ContentLayoutStyle} id="ContentLayout">

      {page.Layout &&
        page.Layout.map((section, index) => (
          <HeroSection section={section} appearance={appearance} branding={branding} key={index} />
        ))
      }
      <div style={ContentSectionStyle} id="ContentLayoutSections">
        <div appearance={appearance} style={BigPaperStyle} id="BigPaper">
          {page.Layout &&
            page.Layout.map((section, index) => (
              <Section section={section} page={page} allPages={allPages} appearance={appearance} branding={branding} key={index} />
            ))
          }
        </div>
        <GoogleMap branding={branding}
        appearance={appearance} section={mapSection} />
      </div>
     
      <noscript>
        <img height="1" width="1" style={pixelStyle}
          src={`https://www.facebook.com/tr?id=${pixel}&ev=PageView&noscript=1`}
        />
      </noscript>

    </main>
  )
}
export const HeroSection = ({ section, appearance, branding }) => {
  const isHighRes = useMediaQuery('(min-width: 1836px)');
  const isMedium = useMediaQuery('(min-width: 900px)');
  let HeroSectionStyle = {
    justifySelf: 'end',
    width: '100%',
    maxWidth: isHighRes ? '1536px' :  isMedium ? 'calc(100% - 300px)' : '100%'
  }

  return (
    <>
      {section.type === 'hero-image' && // default section 
        <div style={HeroSectionStyle} id="HeroSection">
          <HeroImage section={section} appearance={appearance} branding={branding} />
        </div>
      }
    </>
  )
}
export const Section = ({ section, page, allPages, appearance, branding }) => {

  return (
    <>
      {section.type === 'text-block' &&
        <TextBlock section={section} appearance={appearance} branding={branding} />
      }
      {section.type === 'page-content' && // default section 
        <div dangerouslySetInnerHTML={{ __html: page.Content }} />
      }
      {section.type === 'mini-nav-chips' &&
        <MiniNavChips section={section} appearance={appearance} />
      }
      {section.type === 'grid-image-text-wrap' && // default section 
        <GridImageTextWrap section={section} appearance={appearance} branding={branding} />
      }
      {section.type === 'ytembed-vid' && // default section 
        <YTEMBED section={section} appearance={appearance} />
      }
      {section.type === 'full-width-text-and-image' && // default section 
        <FullWidthTextandImage section={section} appearance={appearance} branding={branding} />
      }
      {section.type === 'full-width-image' && // default section 
        <FullWidthImage section={section} appearance={appearance} branding={branding} />
      }
      {section.type === 'featured-text' && // default section 
        <FeaturedText section={section} appearance={appearance} />
      }
      {section.type === 'grid-cards' && // default section 
        <GridCards section={section} appearance={appearance} />
      }
      {section.type === 'action-banner' && // default section 
        <ActionBanner section={section} appearance={appearance} />
      }
      {section.type === 'testimonials' &&
        <Testimonials section={section} appearance={appearance} />
      }
      {section.type === 'location-list' &&
        <LocationList section={section} appearance={appearance} />
      }
      {section.type === 'contact-form' || section.type === 'form' &&
        <Form section={section} ContactFormappearance={appearance} branding={branding} />
      }
      {section.type === 'quote-block' &&
        <QuoteBlock section={section} appearance={appearance} />
      }
      {section.type === 'blog-roll' && // default section 
        <BlogRoll section={section} appearance={appearance} page={page} allPages={allPages} />
      }
    </>
  )
}
export const TWHeroSection = ({ section, appearance, branding }) => {
  return (
    <>
      {section.type === 'hero-image' && // default section 
        <TWHeroImage section={section} appearance={appearance} branding={branding} />
      }
    </>
  )
}
export const TWSection = ({ section, page, allPages, appearance, branding }) => {
  return (
    <>
      {section.type === 'text-block' &&
        <TWTextBlock section={section} appearance={appearance} />
      }
      {section.type === 'full-width-text-and-image' && // default section 
        <TWFullWidthTextandImage section={section} appearance={appearance} />
      }
      {section.type === 'video-embed' && // default section 
        <TWVideo section={section} appearance={appearance} branding={branding} />
      }
      {section.type === 'scheduling' && // default section 
        <TWScheduling section={section} appearance={appearance} branding={branding} />
      }
      {section.type === 'testimonials' &&
        <TWTestimonials section={section} appearance={appearance} />
      }
    </>
  )
}