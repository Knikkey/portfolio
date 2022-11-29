import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Accordion from "./Accordion";

describe("Accordion component", () => {
  test("hides stuff (closed)", () => {
    const mockData = ["mock 1", "mock 2", "mock 3", "mock 4"];
    render(<Accordion data={mockData} label="test" />);

    const ul = screen.getByRole("list");
    const lastLi = screen.getByText("mock 4");

    expect(Number(getComputedStyle(ul).height)).toBe(0);

    //fails even when adding 'display: none/hidden' to li class wtf
    expect(lastLi).not.toBeVisible();
  });

  test("button works (open)", () => {
    const mockData = ["mock 1", "mock 2", "mock 3", "mock 4"];
    render(<Accordion data={mockData} label="test" />);

    const onClickDiv = screen.getByTestId("onClickDiv");
    const ul = screen.getByRole("list");
    const lastLi = screen.getByText("mock 4");
    userEvent.click(onClickDiv);

    //fails cuz the computed height is 0 wtf
    expect(Number(getComputedStyle(ul).height)).toBeGreaterThan(0);

    //this passes but it's also passes when it shouldn't so wtf
    expect(lastLi).toBeVisible();
  });
});
