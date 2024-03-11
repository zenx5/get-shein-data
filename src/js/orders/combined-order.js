document.querySelectorAll(SELECTOR_ITEM_COMBINED_ORDER).forEach( item => {
    console.log( item.innerText.split(" # ")[1].substr(0,15) )
    // item.addEventListener('click', function(event) {
    //     const orderId = event.target.innerText.split(" # ")[1].substr(0,15)
    //     console.log( orderId )
    // })
})