import { P, H3} from "./MicroComponents"
import { hexToRGB } from '../lib/colors';
import styles from './BlogRoll.module.scss'


export const BlogRoll = ({ section,appearance, page, allPages }) => {
 
    var linkStyle = {
        color: (section.scheme === "secondary") ? appearance?.colorSchemes.SecondaryForeground : (section.scheme === "tertiary") ? appearance.colorSchemes.TertiaryForeground : appearance?.colorSchemes.PrimaryForeground,
        textDecoration: "underline",
        textDecorationColor: (section.scheme === "secondary") ? hexToRGB(appearance?.colorSchemes.SecondaryForeground, .45) : (section.scheme === "tertiary") ? hexToRGB(appearance.colorSchemes.TertiaryForeground) : hexToRGB(appearance?.colorSchemes.PrimaryForeground),
    }
    const BlogRollStyle = {
        backgroundColor : section.scheme=="secondary" ? appearance.colorSchemes.SecondaryBackground : section.scheme === "tertiary" ? appearance.colorSchemes.TertiaryBackground :  appearance.colorSchemes.PrimaryBackground
    }
    function generateBlogRollArray(allPages) {
        let returnArr = []
        allPages.forEach(page => {
            if (page.json.Settings.OnBlogRoll) {
                returnArr.push(page)
            }
        })
        returnArr.sort(function (a, b) {

            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return new Date(b.publishedAt) - new Date(a.publishedAt);
        });
        return returnArr
    }
     const BlogSnippet = ({ page }) => {
      
    
        return (
            <div>
                <a className={styles.link} style={linkStyle} href={page.url}>
                <H3 appearance={appearance} content={page.json.Settings.OnSiteTitle} scheme='primary' id={page.id} />
              
                </a>
              
                <P appearance={appearance} content={page.json.Settings.Description} scheme='' id={page.id} />
           
            </div>
        )
    }

    let onBlogArray = generateBlogRollArray(allPages)

//    console.log('onBlogArray', onBlogArray)
    return (
        <div className={`${styles.blogRoll} `} style={BlogRollStyle}>
        <div className={`${styles.blogRollInner} `}>
        {onBlogArray.map((page) => (
                <BlogSnippet key={page.id} page={page} />
            ))}
        </div>
    </div>
      


    )
    
}

export default BlogRoll

