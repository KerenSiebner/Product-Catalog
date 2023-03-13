import { Key } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Store } from "../models/store"
import {Stores} from '../models/stores'
import { storeService } from "../services/store-service"
import { GiftCardPreview } from "./gift-card-preview"

export function StoreList({stores}:any) {
    

    function getPriceRange(storeId: number) {
        return storeService.getStorePriceRange(storeId)
    }

    return <div className="store-list-container">
        {stores?.map((store:any, idx:Key) => (<Link className="store-preview" key={idx} to={`/customize/${store.StoreId}`}>
            <GiftCardPreview store={store}/>     
            <h3 >{store.StoreName}</h3>
            <h4>{getPriceRange(store.StoreId)}</h4>
        </Link>
        ))}
    </div>
}