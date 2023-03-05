import data from '../data/products.json'
export const storeService = {
    getStores,
    getStorePriceRange
}

function getStores() {
    return data.Stores
}

function getStorePriceRange(storeId: number) {
    const store = data.Stores.find((store) =>  store.StoreId === storeId )
    const prices = store?.Products.map(product => product.Price)
    if (!prices) return
    const maxPrice = Math.max(...prices)
    const minPrice = Math.min(...prices)
    let priceRange = `$${minPrice} - $${maxPrice}`
    if (maxPrice===minPrice) priceRange = `$${minPrice}`
    return priceRange
}