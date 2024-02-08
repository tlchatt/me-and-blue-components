export const YTEMBED = ({ section }) => {
    let dynamicClass = (section.someProp == 'dark' ? 'text-white/95' : '')
    return (
        <div style={{display:"grid",justifyContent: 'center'}}>
            <iframe className={dynamicClass} width="560" height="315" src={section.src} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

        </div>
    )
}