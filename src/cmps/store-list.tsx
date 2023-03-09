import { useState } from "react"
import { ClickProps } from "../models/click-props"
import { storeService } from "../services/store-service"
import { GiftCardPreview } from "./gift-card-preview"

export function StoreList({handleStoreSelect}:ClickProps) {
    const stores = storeService.getStores()

    function getPriceRange(storeId: number) {
        return storeService.getStorePriceRange(storeId)
    }

    return <div className="store-list-container">
        {stores.map((store, idx) => (<div className="store-preview" key={idx} onClick={()=>handleStoreSelect(store.StoreId)}>
            <GiftCardPreview store={store}/>     
            {/* <p>{store.StoreText}</p> */}
            <h3 >{store.StoreName}</h3>
            <h4>{getPriceRange(store.StoreId)}</h4>
            {/* <h5>{store.StoreText}</h5> */}
        </div>
        ))}
    </div>
}