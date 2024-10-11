import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {BrowserRouter} from "react-router-dom";
import ErrorBoundary from "./components/layouts/ErrorBoundary";
import { StreamTheme } from '@stream-io/video-react-sdk'

import "@stream-io/video-react-sdk/dist/css/styles.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
        <StreamTheme style={{ fontFamily: 'sans-serif', color: 'white' }}>
            <ErrorBoundary>
                <App/>
            </ErrorBoundary>
        </StreamTheme>
        </BrowserRouter>
    </React.StrictMode>
);
