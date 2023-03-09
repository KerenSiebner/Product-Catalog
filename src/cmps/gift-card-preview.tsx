import { GiftCardPreviewProps } from "../models/gift-card-preview-props";

export function GiftCardPreview({store}:GiftCardPreviewProps){
    return <div className="store-gift-card">
    <img src={store.RegularStoreLogo} alt="store-logo" />
</div>
}