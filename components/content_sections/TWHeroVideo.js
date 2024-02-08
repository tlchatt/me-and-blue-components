import dynamic from 'next/dynamic'
import React, { useEffect } from 'react';
import { Colors, hexToRGB } from '../../lib/colors.js'

export const TWHeroVideo = ({ section, appearance }) => { // needs refactor, bit sloppy 
  useEffect(() => {// for better lighthouse score dynamically load in real google map
    var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));
    if ("IntersectionObserver" in window) {
      var lazyVideoObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(function (video) {
          if (video.isIntersecting) {
            for (var source in video.target.children) {
              var videoSource = video.target.children[source];
              if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                videoSource.src = videoSource.dataset.src;
              }
            }
            video.target.load();
            video.target.classList.remove("lazy");
            lazyVideoObserver.unobserve(video.target);
          }
        });
      });
      lazyVideos.forEach(function (lazyVideo) {
        lazyVideoObserver.observe(lazyVideo);
      });
    }
  }, []);
  let scheme = section.scheme ? section.scheme : 'primary'
  let { fgcolor, bgcolor } = Colors(appearance, scheme)
  let baseHeight = (section.height_base ? section.height_base : 'h-[305px]')
  let smHeight = (section.height_sm_up ? section.height_sm_up : 'sm:h-[325px]')
  let mdHeight = (section.height_md_up ? section.height_md_up : 'md:h-[434px]')
  let lgHeight = (section.height_lg_up ? section.height_lg_up : 'lg:h-[425px]')
  let xlHeight = (section.height_xl_up ? section.height_xl_up : 'xl:h-[500px]')
  var heightClass = `${baseHeight} ${smHeight} ${mdHeight} ${lgHeight} ${xlHeight}`
  let backgroundPosition = (section.backgroundPosition ? section.backgroundPosition : 'bg-center')
  if (section.noBackground) {
    HeroImageBackground = ''
  }
  if ('title' in section || 'sub_title' in section || 'button_text' in section) {
    const HeroText = dynamic(() =>
      import('./TWHeroText').then((mod) => mod.HeroText)
    )
    var HtmlElements = <HeroText section={section} appearance={appearance} />
  }
  const colorStyle = {
    backgroundColor: bgcolor,
    color: fgcolor,
}
  return (
    <div className={`grid gap-4 ${heightClass}  place-content-center	`}  style={colorStyle}>
      <video className={`lazy banner-video ${heightClass}`} autoPlay muted loop playsInline poster={`${section.poster}`}>
        <source data-src={`${section.src}`} type="video/mp4" />
      </video>
    </div>
  )

}


/**
 * 
 * 
 * 
 * <video controls>
<source src="https://cumberlandland.com/images/Brad_Final_Web.mp4" type="video/mp4">
</video>
 */

