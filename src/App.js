// Packages
import React from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { GlobalStyles } from "components-react-julseb"

// Pages
import routes from "./routes/routes"
import redirects from "./routes/redirects"

const App = () => {
    return (
        <>
            <GlobalStyles />
            
            <Routes>
                {routes.map((route, i) => (
                    <Route
                        path={route.path}
                        element={<route.element />}
                        key={i}
                    />
                ))}

                {redirects.map((route, i) => (
                    <Route
                        path={route.path}
                        element={<Navigate to={route.redirectTo} />}
                        key={i}
                    />
                ))}
            </Routes>
        </>
    )
}

export default App
