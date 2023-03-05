import { storeService } from "../services/store-service"

export function StoreList() {
    const stores = storeService.getStores()

    return <div className="store-list-container">
        {stores.map((store, idx) => (<div className="store-preview" key={idx}>
            <div className="store-gift-card">
            <img src={store.RegularStoreLogo} alt="store-logo"/>
            </div>
            {/* <p>{store.StoreText}</p> */}
            <h3 >{store.StoreName}</h3>
        </div>
        ))}
    </div>
}