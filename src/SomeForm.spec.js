import React from "react";
import SomeForm from "./SomeForm";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import {fireEvent} from "@testing-library/dom";

describe("SomeForm input name", () => {
  it("can be changed", async () => {
    render(<SomeForm />);
    const nameInput = screen.getByRole("textbox", "name");
    await userEvent.type(nameInput, "John");
    // await fireEvent.change(nameInput, { target: { value: 'John' } })
    expect(nameInput).toHaveValue('John');
    await waitFor(() => expect(nameInput).toBeValid());
  });
});
