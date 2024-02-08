export  function Colors( appearance, scheme ) {
    console.log('Colors happeneing ', appearance, scheme)
    if(!scheme){scheme == 'primary'}
    const bgcolor = (scheme == "secondary") ? appearance.colorSchemes.SecondaryBackground : (scheme === "tertiary") ? appearance.colorSchemes.TertiaryBackground :  (scheme === "quaternary") ? appearance.colorSchemes.QuaternaryBackground : appearance.colorSchemes.PrimaryBackground
    const fgcolor = scheme == "secondary" ? appearance.colorSchemes.SecondaryForeground : scheme === "tertiary" ? appearance.colorSchemes.TertiaryForeground :  (scheme === "quaternary") ? appearance.colorSchemes.QuaternaryForeground : appearance.colorSchemes.PrimaryForeground
    const fgaccent = (scheme === "secondary") ? appearance.LinkStyle.Secondary.textDecorationColor : (scheme === "tertiary") ? appearance.LinkStyle.Tertiary.textDecorationColor : appearance.LinkStyle.Primary.textDecorationColor

    return {
        bgcolor:bgcolor,
        fgcolor:fgcolor,
        fgaccent:fgaccent
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