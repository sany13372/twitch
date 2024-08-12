import {render} from "@testing-library/react";
import {describe, it} from "vitest";
import App from "./App";
import {BrowserRouter} from "react-router-dom";


describe('App', () => {
    it('render', () => {
        render(
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        )
    })
})