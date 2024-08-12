import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import ErrorBoundary from "./components/layouts/ErrorBoundary";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <ErrorBoundary>
                <App/>
            </ErrorBoundary>
        </BrowserRouter>
    </React.StrictMode>
);
