import {render} from "@testing-library/react";
import {describe, it} from "vitest";
import Select from "./index";

describe('Select', () => {
    it('render', () => {
        const options = [{title:'English'},{title:'Russian'}]
        render(<Select title="English" options={options}/>)
    })
})