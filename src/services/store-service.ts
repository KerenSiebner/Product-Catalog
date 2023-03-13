import data from '../data/products.json'
import { Store } from '../models/store'
export const storeService = {
    getStores,
    getStorePriceRange,
    getDefaultStore,
    getStoreById,
    getDefaultStoreFilter
}

function getStores(storeFilter = getDefaultStoreFilter()) {
    const stores = data.Stores
    if (JSON.stringify(storeFilter) === JSON.stringify(getDefaultStoreFilter())) {
        return stores
    }
    if (storeFilter.Search) {
        const regex = new RegExp(storeFilter.Search, 'i')
        return stores.filter((store) => regex.test(store.StoreName))
    }
    if (storeFilter.Budget) {
        switch (storeFilter.Budget) {
            case ("25minus"): {stores.filter((store)=>{
                const storeProducts = store.Products
                return console.log('storeProducts', storeProducts)
                // const minPrice = storeProducts.reduce(function (prev,curr){ return curr.Price < prev.Price : curr})
                }) }
                break
            case ("25to50"): { }
                break
            case ("50to75"): { }
                break
            case ("50to75"): { }
                break
            case ("100plus"): { }
                break
            default: console.log('no budget')
        }
    }
    if (storeFilter.Gender) {
        switch (storeFilter.Gender) {
            case ("Him"): {}
                break
            case ("Her"): { }
                break
            default: console.log('no budget')
        }
        
    }
    if (storeFilter.Store) {

    }


}

function getStorePriceRange(storeId: number) {
    const store = data.Stores.find((store) => store.StoreId === storeId)
    const prices = store?.Products.map(product => product.Price)
    if (!prices) return
    const maxPrice = Math.max(...prices)
    const minPrice = Math.min(...prices)
    let priceRange = `$${minPrice} - $${maxPrice}`
    if (maxPrice === minPrice) priceRange = `$${minPrice}`
    return priceRange
}

function getDefaultStore() {
    return {
        "Products": [],
        "StoreName": "",
        "StoreLogo": "",
        "StoreOrder": 0,
        "StoreOrder1": 0,
        "RegularStoreLogo": "",
        "IsAffiliate": null,
        "StoreText": "",
        "HeaderImage": null,
        "BGColor": null,
        "ShippingMandatory": true,
        "PersonalMessageMaxLength": null,
        "StoreId": null,
        "DeliveryType": 0,
        "ShippingPolicyText": null,
        "SchedulingType": 0
    }
}

function getStoreById(storeId: number) {
    const stores = getStores()
    if (!stores || !stores.find((store) => store.StoreId === storeId)) return
    else {
        let store = stores.find((store) => store.StoreId === storeId)
        return store
    }
}

function getDefaultStoreFilter() {
    return {
        Budget: 'All',
        Age: 'All',
        Gender: 'Both',
        Store: 'All Gifts',
        Search: ''
    }
}