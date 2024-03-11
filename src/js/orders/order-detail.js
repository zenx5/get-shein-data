(function(){
    // table:HTMLTableElement
    const getItems = (table) => {
        const items = []

        table.querySelectorAll("tbody tr").forEach( row => {
            const item = {
                name: "",
                features: "",
                quantity: 0,
                sku: "",
                prices: []
            }
            row.querySelectorAll("td").forEach( (cell, columnName) => {
                if( columnName === PRODUCT_COLUMNS.DETAILS ) {
                    item.name = cell.getAttribute("aria-label")
                    item.features = cell.querySelector(SELECTOR_ORDER_ITEMS_FEATURE).innerText
                    item.prices = cell.querySelector(SELECTOR_ORDER_ITEMS_PRICE).innerText
                }
                else if( columnName === PRODUCT_COLUMNS.QUANTITY ) {
                    item.quantity = parseInt( cell.innerText )
                }
                else if( columnName === PRODUCT_COLUMNS.SKU ) {
                    item.sku = cell.innerText
                }
                else if( columnName === PRODUCT_COLUMNS.PRICE ) {
                    const [finalPrice, price] = cell.innerText.replaceAll(/[$a-z\n]{1}/g, l => l=="\n"?",":"").split(",")
                    item.prices = [ parseFloat(finalPrice), parseFloat(price ?? finalPrice) ]
                }
            })
            items.push(item)
        })
        return items
    }

    const invoice = {
        items: []
    }

    const orderId = document.querySelector(SELECTOR_COPY_ORDER_ID).getAttribute("data-clipboard-text")
    const [,taxeOrder] = document.querySelector(SELECTOR_TAX_ORDER).innerText.split("$")
    const orderDetails = document.querySelectorAll(SELECTOR_ORDER_DETAIL_ITEMS)

    if(orderId === null || orderDetails === null || orderDetails.length === 0 ) return

    for( const item of orderDetails) {
        const [labelBase, value ] = item.children
        for( const { key, target } of orderValidation) {
            if( labelBase.innerText.includes(target) ) {
                invoice[key] = value.innerText
            }
        }
    }

    document.querySelectorAll(SELECTOR_ORDER_ITEMS).forEach( shop => {
        const [
            shopName,
            itemsTable
        ] = shop.children
        console.log(shopName.innerText)
        invoice.items.push({
            shop: shopName.innerText,
            items:getItems(itemsTable)
        })
    })

    // send to worker background
    console.log(invoice)

})()