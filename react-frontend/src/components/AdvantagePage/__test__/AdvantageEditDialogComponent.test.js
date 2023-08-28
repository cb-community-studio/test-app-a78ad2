import React from "react";
import { render, screen } from "@testing-library/react";

import AdvantageEditDialogComponent from "../AdvantageEditDialogComponent";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import { init } from "@rematch/core";
import { Provider } from "react-redux";
import * as models from "../../../models";

test("renders advantage edit dialog", async () => {
    const store = init({ models });
    render(
        <Provider store={store}>
            <MemoryRouter>
                <AdvantageEditDialogComponent show={true} />
            </MemoryRouter>
        </Provider>
    );
    expect(screen.getByRole("advantage-edit-dialog-component")).toBeInTheDocument();
});
