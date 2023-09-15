import { useState, useEffect } from "react";
/*https://fireship.io/snippets/use-media-query-hook/
import {useMediaQuery} from '../lib/useMediaQuery'
  const isSmall = useMediaQuery('(min-width: 600px)');
  const isMedium = useMediaQuery('(min-width: 900px)');
  const isLarge = useMediaQuery('(min-width: 1200px)');
  const isXLarge = useMediaQuery('(min-width: 1536px)');
  console.log(isSmall, isMedium, isLarge, isXLarge )
  {isDesktop ? <h1>Desktop</h1> : <h1>Mobile</h1>}
*/
export const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, query]);

  return matches;
}

