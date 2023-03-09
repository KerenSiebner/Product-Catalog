import { Route, Routes, useLocation, Router } from "react-router-dom";
import App from "./App";
import { AppHeader } from "./cmps/app-header";



// Router = (props: any)=>{
//     return <>{props.children}</>
// }

export function RootCmp() {
    // const location = useLocation()
    return (
        <div className="App">
            <AppHeader />
            <main>
                {/* <Router > */}
                    <Routes >
                        <Route path="/" element={<App />} />
                    </Routes>
                {/* </Router> */}
            </main>
        </div>
    )
}