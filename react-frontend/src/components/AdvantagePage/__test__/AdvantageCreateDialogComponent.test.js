import React from "react";
import { render, screen } from "@testing-library/react";

import AdvantageCreateDialogComponent from "../AdvantageCreateDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders advantage create dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AdvantageCreateDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("advantage-create-dialog-component")).toBeInTheDocument();
});
