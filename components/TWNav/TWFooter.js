
import Image from "next/image"
import { HR } from '../TWMicroComponents.js'
export default function FooterNav({ branding, appearance, footerLayout }) {


  let bgColor = appearance?.Footer?.scheme === "secondary" ? appearance.colorSchemes.SecondaryBackground : appearance?.Footer?.scheme === "tertiary" ? appearance.colorSchemes.TertiaryBackground : appearance.colorSchemes.PrimaryBackground
  let textColor = appearance?.Footer?.scheme === "secondary" ? appearance.colorSchemes.SecondaryForeground : appearance?.Footer?.scheme === "tertiary" ? appearance.colorSchemes.TertiaryForeground : appearance.colorSchemes.PrimaryForeground
  let hrColor = appearance?.Footer?.scheme === "secondary" ? appearance.colorSchemes.SecondaryForeground : appearance?.Footer?.scheme === "tertiary" ? appearance.colorSchemes.TertiaryForeground : appearance.colorSchemes.PrimaryForeground
  let LogoUrl = branding.Settings.FooterLogo.Url ? branding.Settings.FooterLogo.Url : branding.Settings.Logo.Url
  //  console.log('LogoUrl', LogoUrl)
  let FooterLogoStyle = {
    height: branding?.Settings?.FooterLogo?.Height ? branding?.Settings?.FooterLogo?.Height : '100px',
    width: branding?.Settings?.FooterLogo?.Width ? branding?.Settings?.FooterLogo?.Width : '300px'
  }
  let AdditionalFooterLogoStyle = {
    height: branding?.Settings?.AdditionalFooterLogo?.Height ? branding?.Settings?.AdditionalFooterLogo?.Height : '100px',
    width: branding?.Settings?.AdditionalFooterLogo?.Width ? branding?.Settings?.AdditionalFooterLogo?.Width : '300px'
  }
  let FooterLogoAlt = branding?.Settings?.FooterLogo?.Alt ? branding?.Settings?.FooterLogo?.Alt : 'Logo Image'
  let AdditionalFooterLogoAlt = branding?.Settings?.AdditionalFooterLogo?.Alt ? branding?.Settings?.AdditionalFooterLogo?.Alt : 'Logo Image'

  return (
    <footer className="py-3 pb-20 w-full" style={{ background: bgColor }}>
      <div>
        <a href='/' className="relative block mx-auto my-4" style={FooterLogoStyle}>

          {
            <Image
              src={`${LogoUrl}`}
              blurDataURL={`${LogoUrl}`}
              alt={FooterLogoAlt}
              placeholder='blur'
              fill
              sizes="100vw"
              style={{
                objectFit: "contain"
              }}
              id='footerlogo'
            />
          }
          {!branding?.Settings?.Logo?.Url && appearance?.navTitle &&
            <h3 style={{ color: textColor }} className={`text-3xl font-bold`}>{appearance.navTitle}</h3>
          }
        </a>
      </div>
      <div>
        {branding?.Settings?.AdditionalFooterLogo?.Url &&
          <a href='/' className="relative block mx-auto my-4" style={AdditionalFooterLogoStyle}>

            <Image
              src={`${branding.Settings.AdditionalFooterLogo.Url}`}
              blurDataURL={`${branding.Settings.AdditionalFooterLogo.Url}`}
              alt={AdditionalFooterLogoAlt}
              placeholder='blur'
              fill
              sizes="100vw"
              style={{
                objectFit: "contain"
              }} />

          </a>

        }
      </div>

      <div className="mx-auto my-4 w-fit">
        <HR classNames='m-auto ' style={{ color: hrColor }} appearance={appearance} />
        <div className="py-3" >
          {branding.Settings.SiteTitle &&
            <p style={{ color: textColor, textAlign: "center" }}>{branding.Settings.SiteTitle}</p>
          }
          {branding.Settings.SiteTitleNote &&
            <p style={{ color: textColor, textAlign: "center" }}>{branding.Settings.SiteTitleNote}</p>
          }
          {branding.Settings.Address &&
            <p style={{ color: textColor, textAlign: "center" }}>{branding.Settings.Address}</p>
          }
          {branding.Settings.Email &&
            <p style={{ color: textColor, textAlign: "center" }}>{branding.Settings.Email}</p>
          }
          {branding.Settings.Phone &&
            <p style={{ color: textColor, textAlign: "center" }}>{branding.Settings.Phone}</p>
          }
        </div>

      </div>
    </footer>
  );
};

