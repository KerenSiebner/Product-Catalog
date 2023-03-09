import { Product } from "./product"

export interface Store {
    selectedStore: {
        Products?: Product[] | any[],
        // Products?: Array<string|number|null|boolean|Array<number>|undefined>,
        StoreName?: string,
        StoreLogo?: string,
        StoreOrder?: number,
        StoreOrder1?: number,
        RegularStoreLogo?: string,
        IsAffiliate?: string | null,
        StoreText?: string | null,
        HeaderImage?: string | null,
        BGColor?: string | null,
        ShippingMandatory?: boolean | null,
        PersonalMessageMaxLength?: number | null,
        StoreId?: number | null,
        DeliveryType?: number,
        ShippingPolicyText?: string | null,
        SchedulingType?: number
    }
}