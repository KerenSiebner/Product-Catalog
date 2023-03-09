import { ClickProps } from "../models/click-props";
import { Store } from "../models/store";
import { GiftCardPreview } from "./gift-card-preview";

// export function GiftDetails({selectedStore}:Store, {backToStoreList}:any){
export function GiftDetails({ selectedStore }: Store) {
    console.log('selectedStore', selectedStore)
    // function onClickBack(){
    //     backToStoreList()
    // }
    const logoUrl = selectedStore.RegularStoreLogo
    console.log('logoUrl', logoUrl)
    return <div className="gift-details-container">
        <div className="select-gift-card-container">
            <img src={logoUrl} alt="" />
            <span>{selectedStore.StoreName} eGift Card</span>
            <GiftCardPreview store={selectedStore} />
            <h4>Select gift card amount</h4>
            {selectedStore.Products?.map((product) => (<button>
                {Math.round(product.Price)}
            </button>))}
        </div>
        <div className="recepient-form-container">
            <input type="text" />

        </div>
        {/* <button onClick={onClickBack}>Back</button>  */}
    </div>
}