import { Fragment, useState } from "react"
import { Filters } from "../cmps/filters"
import { StoreList } from "../cmps/store-list"
import { ClickProps } from "../models/click-props"
import { storeService } from "../services/store-service"

export function Home() {
    return (
        <Fragment>

            <article>
                <h1>Shop for Gift Cards</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum tenetur, officia, dignissimos iste perspiciatis
                    voluptates iusto exercitationem labore numquam commodi totam a fuga quis quod quisquam cum harum unde vero reprehenderit sed culpa?
                    Voluptatum delectus pariatur maiores dolore animi, labore, expedita aliquid ducimus esse enim dolorum fugit sequi velit porro.</p>
            </article>
            <Filters />
            <StoreList />
        </Fragment>
    )
}