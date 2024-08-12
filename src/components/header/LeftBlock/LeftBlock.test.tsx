import {render} from "@testing-library/react";
import {describe, it} from "vitest";
import LeftBlock from "./index";
import {BrowserRouter} from "react-router-dom";


describe('LeftBlock', () => {
    it('render', () => {
        render(<BrowserRouter>
                <LeftBlock/>
        </BrowserRouter>
    )
    })
})