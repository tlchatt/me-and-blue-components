export  function Colors( branding, appearance, scheme ) {
    //console.log('Colors happeneing ' ,branding , appearance, scheme)
    if(!scheme){scheme == 'primary'}
    const bgcolor = (scheme == "secondary") ? appearance.colorSchemes.SecondaryBackground : (scheme === "tertiary") ? appearance.colorSchemes.TertiaryBackground :  (scheme === "quaternary") ? appearance.colorSchemes.QuaternaryBackground : appearance.colorSchemes.PrimaryBackground
    const fgcolor = scheme == "secondary" ? appearance.colorSchemes.SecondaryForeground : scheme === "tertiary" ? appearance.colorSchemes.TertiaryForeground :  (scheme === "quaternary") ? appearance.colorSchemes.QuaternaryForeground : appearance.colorSchemes.PrimaryForeground
    return {
        bgcolor:bgcolor,
        fgcolor:fgcolor
    }
}
export function hexToRGB(hex, alpha) { //https://stackoverflow.com/questions/21646738/convert-hex-to-rgba

    var r = parseInt(hex?.slice(1, 3), 16),
        g = parseInt(hex?.slice(3, 5), 16),
        b = parseInt(hex?.slice(5, 7), 16);

    if (alpha) {
        return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
    } else {
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }
    //hexToRGB('#FF0000', 0.5);
}