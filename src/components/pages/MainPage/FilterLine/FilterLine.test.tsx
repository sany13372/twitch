import {render,screen} from "@testing-library/react";
import {describe, it } from "vitest";
import FilterLine from "./index";

describe('FilterLine', () => {
    it('render', () => {
        render(<FilterLine/>)
        expect(screen.getByRole("sortBy")).toHaveTextContent('Sort by')
    })
})