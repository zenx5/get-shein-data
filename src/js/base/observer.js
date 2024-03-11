try{
    const targetElement = null && document.querySelector('#selector')
    const observer = new MutationObserver( mutation => {
        return
    } )

    if( targetElement ) {
        observer.observe( targetElement, {
            subtree:true,
            attributes:true,
            childList: true
        })
    }
} catch( error ) {
    console.log( error )
}