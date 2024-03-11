document.querySelectorAll(SELECTOR_ITEM_COMBINED_ORDER).forEach( item => {
    const orderId = item.innerText.split(" # ")[1].substr(0,15)
    location.href = `https://us.shein.com/user/orders/detail/${orderId}`
})