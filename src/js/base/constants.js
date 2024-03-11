const VERSION = '1.0.0'
// SELECTORS
// ORDER/COMBINED-ORDER
const SELECTOR_ITEM_COMBINED_ORDER = "div.package-detail > div > div:nth-child(1)"
// ORDER/ORDER-DETAIL
const SELECTOR_COPY_ORDER_ID = "span[data-clipboard-text]"
const SELECTOR_TAX_ORDER = ".order-summary-taxes-wrap"
const SELECTOR_ORDER_DETAIL_ITEMS = "ul.order-total li"
const SELECTOR_ORDER_ITEMS = ".order-detail-item"
const SELECTOR_ORDER_ITEMS_FEATURE = "div.info .size-info"
const SELECTOR_ORDER_ITEMS_PRICE = "div.info .price-info"

const PRODUCT_COLUMNS = {
    DETAILS: 0,
    QUANTITY: 1,
    SKU: 2,
    PRICE: 3
}

const orderValidation = [
    { key:"retail", target: "por menor" },
    { key:"subtotal", target: "Sub total" },
    { key:"total", target: "Total"},
    { key:"shipping", target: "envío"},
    { key:"points", target: "Puntos"},
    { key:"discount", target: "Descuento"}
]