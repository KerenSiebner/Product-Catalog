import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from "./layouts/root-layout";
import { GiftDetails } from "./cmps/gift-details";
import { Home } from "./pages/home";


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="/customize/:storeId" element={<GiftDetails />} />
        </Route>
    )
)

export function RootCmp() {
    return (
        <RouterProvider router={router} />
    )
}