import data from '../data/products.json'
import { Store } from '../models/store'
export const storeService = {
    getStores,
    getStorePriceRange,
    getDefaultStore,
    getStoreById
}

function getStores() {
    return data.Stores
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

function getStoreById(storeId:number){
    const stores = getStores()
    if(!stores.find((store) => store.StoreId === storeId))return 
    else{
        let store = stores.find((store) => store.StoreId === storeId)
        return store
    }
}