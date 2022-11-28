import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import Accordion from "./Accordion";

describe("Accordion component", () => {
  test("button works (open)", () => {
    const mockData = ["mock datapoint 1", "mock datapoint 2"];
    render(<Accordion data={mockData} label="test" />);
    const arrow = screen.getByRole("img");

    userEvent.click(arrow);
  });
});
