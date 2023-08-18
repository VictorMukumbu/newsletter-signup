/* Store the original value in a variable */
const originalViewBox = svg.getAttribute( 'viewBox' );

/* Define our media query and media query object */
const mq = matchMedia( '( max-width: 375px )' );

/* Define the handler */
const updateViewBox = () => {
    if (mq.matches) {
        /* Change the viewBox dimensions to show the hexagon */
        svg.setAttribute( 'viewBox', '0 0 200 174' );
    } else {
        svg.setAttribute( 'viewBox', originalViewBox );
    }
}

svg.addEventListener( 'SVGLoad', updateViewBox );

/* Fire if the media condition changes */
mq.addEventListener( 'change', updateViewBox );