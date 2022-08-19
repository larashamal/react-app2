// TODO: Verify that the button calls its click handler whenever clicked

import userEvent from "@testing-library/user-event";
import { render, screen } from "react-test-renderer";
import Button from "./Button";

it("calls the button handler when the button is clicked", () => {
  const mockChangeHandler = jest.fn();
  render(<Button />);

  userEvent.click(screen.getByRole("button"));
  expect(mockChangeHandler).toHaveBeenCalled();
});
