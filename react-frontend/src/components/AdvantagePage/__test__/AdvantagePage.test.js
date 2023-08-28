import React from "react";
import { render, screen } from "@testing-library/react";

import AdvantagePage from "../AdvantagePage";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders advantage page", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AdvantagePage />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("advantage-datatable")).toBeInTheDocument();
    expect(screen.getByRole("advantage-add-button")).toBeInTheDocument();
});
