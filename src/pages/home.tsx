import { Fragment, useEffect, useState } from "react"
import { Filters } from "../cmps/filters"
import { StoreList } from "../cmps/store-list"
import { ClickProps } from "../models/click-props"
import { FilterValues } from "../models/filter-values"
import { storeService } from "../services/store-service"

export function Home() {
    const [storeFilter, setStoreFilter] = useState(storeService.getDefaultStoreFilter())
    const [stores, setStores] = useState(storeService.getStores(storeFilter))
    console.log('storeFilter', storeFilter)

    useEffect(() => {
        setStores(storeService.getStores(storeFilter))
    }, [storeFilter])

    function updateFilter(storeFilter: FilterValues) {
        setStoreFilter(storeFilter)
        const filteredStores = storeService.getStores(storeFilter)
        console.log('filteredStores', filteredStores)
        // setStores(storeService.getStores(storeFilter))
    }
    // const stores = storeService.getStores()
    return (
        <Fragment>

            <article>
                <h1>Shop for Gift Cards</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum tenetur, officia, dignissimos iste perspiciatis
                    voluptates iusto exercitationem labore numquam commodi totam a fuga quis quod quisquam cum harum unde vero reprehenderit sed culpa?
                    Voluptatum delectus pariatur maiores dolore animi, labore, expedita aliquid ducimus esse enim dolorum fugit sequi velit porro.</p>
            </article>
            <Filters updateFilter={updateFilter} stores={stores} />
            <StoreList stores={stores} />
        </Fragment>
    )
}