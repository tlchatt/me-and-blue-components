import { P, H2, H3, H4, HR, Button } from '../TWMicroComponents.js'
import Image from 'next/image'
import { useMediaQuery } from '@/lib/statefulUtils'
import { Colors } from '@/lib/colors.js'

export const TWFullWidthTextandImage = ({ section, appearance }) => {
    /**
    * TODO:
    * Left right alternation causing double images or text on mobile fix
    * In Sync with tailwind minus image base url 06/22/2023
    */
    let { fgcolor, bgcolor } = Colors(appearance, section?.scheme)

    var backgroundposition = section.backgroundPosition ? section.backgroundPosition : '50%'

    var FullWidthTextandImageStyle = {
        color: fgcolor,
        backgroundColor: bgcolor
    }
    if (section.imageFloat === "right") {
        return (
            <div className={`grid grid-rows-[auto] grid-cols-none sm:grid-rows-none sm:grid-cols-2  w-full`} style={FullWidthTextandImageStyle}>
                <TextSide section={section} appearance={appearance} />
                <ImageSide section={section} appearance={appearance} />
            </div>
        )
    }
    else {
        return (
            <div className={`grid grid-rows-[auto] grid-cols-none sm:grid-rows-none sm:grid-cols-2  w-full`} style={FullWidthTextandImageStyle}>
                <ImageSide section={section} appearance={appearance} />
                <TextSide section={section} appearance={appearance} />
            </div>
        )
    }
    function TextSide({ section, appearance }) {
        function Action({ item, scheme, appearance }) {
            return (
                <>
                    {/* button style defined in tw micro components */}
                    {item.button &&
                        <Button href={item.href} content={item.button} scheme={scheme}
                            appearance={appearance} />
                    }
                </>
            )
        }
        function Body({ item, scheme, appearance }) {
            return (
                <>
                    {item.paragraphText &&
                        <P classNames={`py-2`} scheme={scheme} content={item.paragraphText} appearance={appearance} />
                    }
                </>
            )
        }
        function Headlines({ item, scheme, appearance }) {
            return (
                <>
                    {item.title &&
                        <H2 classNames={`text-center`} scheme={scheme} content={item.title} appearance={appearance} />
                    }
                    {item.subTitle &&
                        <>
                            <H3 classNames={`text-center`} scheme={scheme} content={item.subTitle} appearance={appearance} />
                        </>
                    }
                    {item.subsubTitle &&
                        <>
                            <H4 classNames={`text-center`} scheme={scheme} content={item.subsubTitle} appearance={appearance} />
                        </>
                    }
                </>
            )
        }
        return (
            <div className={`grid items-center justify-items-center p-8 sm:p-12 `} >
                <div className={`grid w-full items-center justify-items-center `}>
                    {section.items &&
                        section.items.map((item, index) => (
                            <Headlines item={item} scheme={section?.scheme} key={index} appearance={appearance} />
                        ))
                    }
                    <HR classNames={`w-full`}  appearance={appearance} />
                </div>
                <div className={`grid w-full items-center justify-items-center `}>
                    {section.items &&
                        section.items.map((item, index) => (

                            <Body item={item} scheme={section?.scheme} appearance={appearance} key={index} />

                        ))
                    }
                    <HR classNames={`w-full`} scheme={section?.scheme} appearance={appearance} />
                </div>
                <div className={`grid w-full items-center justify-items-center`}>
                    {section.items &&
                        section.items.map((item, index) => (
                            <Action item={item} scheme={section?.scheme} appearance={appearance} key={index} />
                        ))
                    }
                </div>
            </div>
        )

    }
    function ImageSide({ section, appearance }) {
        const isSmall = useMediaQuery('(min-width: 600px)');
        var imageMobileHeight = section?.imageMobileHeight ? section?.imageMobileHeight : '16rem'
        var style = {
            height: (isSmall) ? 'unset' : imageMobileHeight
        }
        return (
            <div style={style} className='grid sm:h-full' >
                <div className={`relative overflow-hidden`}>
                    <Image
                        fill
                        src={`${section.imageUrl}`}
                        alt={section?.alt ? section.alt : section?.title ? section.title : null}
                        sizes="100vw"
                        style={{
                            objectFit: "cover",
                            objectPosition: backgroundposition
                        }} />
                </div>
            </div>
        )

    }
}



