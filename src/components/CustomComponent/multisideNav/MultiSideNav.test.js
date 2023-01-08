import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import MultiSideNav from "./MultiSideNav";
jest.mock("../../../assets/images/Menu.png");
jest.mock("../../../assets/images/Filter.png");

it("render MultiSideNav", () => {
  render(<MultiSideNav />);
  const filterOne = screen.getByTestId("filterOne");
  expect(filterOne).toHaveTextContent("Category");
});

it("test Sub-Category Filter", () => {
  render(<MultiSideNav />);
  const filter = screen.getByTestId("filterTwo");
  expect(filter).toHaveTextContent("Sub-Category");
});

it("test check is able to select", () => {
  render(<MultiSideNav />);
  const checkBox = screen.getByTestId("filterBox");
  const clickBox = fireEvent.click(checkBox);
  expect(clickBox).toBeTruthy();
});
