export function log(string) {
    var componentStyle = [
        'color:blue',
        'font-size:24px',
        'font-family:"Roboto Slab Variable"', 
        'font-weight: 600',
        'border:2px solid blue',
        'padding:5px 10px'
    ].join(';')
    console.log('%c' + string, componentStyle)
}