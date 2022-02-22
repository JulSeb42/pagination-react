import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"

// Components
import App from "./App"

// Tests
import reportWebVitals from "./tests/reportWebVitals"

// Styles
import "components-react-julseb/dist/components/index.css"

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
