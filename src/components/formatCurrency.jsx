import storeItems from '../Utils/data.json'

const CURRENCY_FORMATTER = new Intl.NumberFormat( undefined, {
    currency: 'GHC', 
    style: "currency",
})

export function formatCurrency( { price }= storeItems ){
    return CURRENCY_FORMATTER.format(price)
}