import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../index.js";

// test('renders learn react link', () => {
//   render(<ArticleDetail />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

let container = null;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("renders home", () => {
  act(() => {
    render(<Home />, container);
  });
  expect(container.querySelector(".title-page").textContent).toBe(
    "Most popular article of the month"
  );
});
