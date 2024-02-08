import dynamic from 'next/dynamic'
import Image from 'next/image'
export const TWHeroImage = ({section, appearance}) => { // needs refactor, bit sloppy 
    let imageurlbase = process.env.NEXT_PUBLIC_IMAGE_URL 
    /*
    Todo:
    Arbitrary values set from Strapi in Tailwind Classes do not work, so heights below need to be adjusted to a style based approach.
    */
    let baseHeight = (section.height_base? section.height_base : 'h-[305px]')
    let smHeight = (section.height_sm_up? section.height_sm_up : 'sm:h-[325px]')
    let mdHeight = (section.height_md_up? section.height_md_up: 'md:h-[434px]')
    let lgHeight = (section.height_lg_up? section.height_lg_up: 'lg:h-[425px]')
    let xlHeight = (section.height_xl_up? section.height_xl_up : 'xl:h-[500px]')
    var heightClass = `${baseHeight} ${smHeight} ${mdHeight} ${lgHeight} ${xlHeight}`
    let backgroundPosition = (section.backgroundPosition? section.backgroundPosition : 'bg-center')
    if (section.noBackground){
        HeroImageBackground = ''
    }
    if ('title' in section ||'sub_title' in section ||'button_text' in section){
        const HeroText = dynamic(() =>
        import('./TWHeroText').then((mod) => mod.HeroText)
        )
        var HtmlElements= <HeroText section={section} appearance={appearance}/>
    }
    return (
        <div className={`grid gap-4 relative place-items-center ${heightClass} `} >
        <div className={` absolute inset-0 z-10`}/>
          <Image
            src={`${section.src}`}
            blurDataURL={`${section.src}`}
            layout="fill"
            objectFit='cover'
            objectPosition={backgroundPosition}
            placeholder='blur'
          />
            {HtmlElements && <>{HtmlElements}</>}
            {!HtmlElements &&<div className="h-80"/>}
        </div>
    )
     
}
