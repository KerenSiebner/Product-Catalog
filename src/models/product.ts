export interface Product extends Array<Product> {
    
        ProductId?: number,
        ProductTitle?: string,
        Description?: string,
        ProductImage?: string,
        ThumbnailProductImage?: string,
        Price?: number,
        PriceLabel?: string,
        ProductTags?: Array<number>,
        IsTopGift?: boolean,
        IsPopularGift?: boolean,
        ProductLink?: string,
        IsAffiliate?: boolean,
        ShippingMandatory?: boolean,
        PersonalMessageMaxLength?: number
      
}