import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";

import App from "../../App";

describe("Navbar", () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const btns = screen.getAllByRole("link");

  test("home button takes us home", () => {
    userEvent.click(btns[0]);
    expect(
      screen.getByText("web developer", { exact: false })
    ).toBeInTheDocument();
  });

  test("projects button takes us to projects page", () => {
    userEvent.click(btns[1]);
    expect(screen.getByText("loading", { exact: false })).toBeInTheDocument();
  });

  test("about button takes us to about me page", () => {
    userEvent.click(btns[2]);
    expect(screen.getByText("short", { exact: false })).toBeInTheDocument();
  });

  test("contact button takes us to contact us page", () => {
    userEvent.click(btns[3]);
    expect(screen.getByRole("form")).toBeInTheDocument();
  });
});
