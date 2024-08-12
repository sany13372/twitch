import {fireEvent, render, screen} from "@testing-library/react";
import {describe, it} from "vitest";
import SigInBlock from "./index";
import {BrowserRouter} from "react-router-dom";
import {MantineProvider} from "@mantine/core";

describe('SignInBlock', () => {
    it('render', () => {
        const onClick = vi.fn()
        render(<BrowserRouter>
            <MantineProvider>
                <SigInBlock/>
            </MantineProvider>
            </BrowserRouter>
        )
        const buttonForm = screen.getByRole("buttonForm");
        fireEvent.click(buttonForm)
        expect(onClick).toHaveBeenCalledTimes(0)
    })
})