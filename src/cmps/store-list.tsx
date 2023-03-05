import { storeService } from "../services/store-service"

export function StoreList() {
    const stores = storeService.getStores()

    function getPriceRange(storeId:number){
        return storeService.getStorePriceRange(storeId)
    }

    return <div className="store-list-container">
        {stores.map((store, idx) => (<div className="store-preview" key={idx}>
            <div className="store-gift-card">
            <img src={store.RegularStoreLogo} alt="store-logo"/>
            </div>
            {/* <p>{store.StoreText}</p> */}
            <h3 >{store.StoreName}</h3>
            <h4>{getPriceRange(store.StoreId)}</h4>
            {/* <h5>{store.StoreText}</h5> */}
        </div>
        ))}
    </div>
}