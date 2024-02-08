import Icon from '@mdi/react'
import IconButton from '@material-ui/core/IconButton';
import { mdiFacebook, mdiInstagram, mdiTwitter, mdiPinterest, mdiYoutube, mdiGoogle } from '@mdi/js'
import { makeStyles } from '@material-ui/core/styles';






  const useStyles = makeStyles(() => ({
    socialButton: {
      color: "rgba(3,155,229,.95)",
    },
    
  }));
export default function SocialNav({ branding }) {
  const classes = useStyles();
  return (
<div className={classes.social}>
   
      {branding?.Facebook && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            href={branding.Facebook}
            className={classes.socialButton}

          >
              <Icon path={mdiFacebook}
                title="Facebook Link"
                size='48px'
                className="mdi-  shadow"
              
              />
          </IconButton>

      )}
      
      {branding?.Instagram && (

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            href={branding.Instagram}
            className={classes.socialButton}
          >
            <Icon path={mdiInstagram}
              title="Instagram Link"
              size='48px'
              className="mdi-  shadow"
                href={branding.Instagram}
            />
          </IconButton>

      )}
      {branding?.Twitter && (

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            href={branding.Twitter}
            className={classes.socialButton}

          >
      

            <Icon path={mdiTwitter}
              title="Twitter Link"
              size='48px'
              className="mdi-  shadow"
            />

        </IconButton>

      )}
      {branding?.Pinterest && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            href={branding.Pinterest}
            className={classes.socialButton}

          >
   

            <Icon path={mdiPinterest}
              title="Pinterest Link"
              size='48px'
              className="mdi-  shadow"
            />
       
     
          </IconButton>
      )}
      {branding?.Youtube && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            href={branding.Youtube}
            className={classes.socialButton}

          >
    
        
            <Icon path={mdiYoutube}
              title="Youtube Link"
              size='48px'
              className="mdi-  shadow"
            />
         </IconButton>

      )}
      {branding?.Google && (

          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            href={branding.Google}
            className={classes.socialButton}

          >
 
            <Icon path={mdiGoogle}
              title="Google Link"
              size='48px'
              className="mdi-  shadow"
            />

          </IconButton>

      )}

    </div>
  )


    

}
