import React from "react";
import { fireEvent, logRoles, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { FarmFilterProvider } from "../../../contexts/farmfilter/FarmFilter";
import SideNav from "./SideNav";
jest.mock("../../../assets/images/Filter.png");

it("render SideNav", () => {
  render(<SideNav />, { wrapper: FarmFilterProvider });
  const labelText = screen.getAllByTestId("checkboxLabel");
  expect(labelText).toHaveLength(6);
});

it("Render checkbox", () => {
  render(<SideNav />, { wrapper: FarmFilterProvider });
  const input = screen.getAllByTestId("confirm_checkbox");
  expect(input).toHaveLength(6);
  expect(input).toBeTruthy();
});

it("test checkbox is able to select", () => {
  render(<SideNav />, { wrapper: FarmFilterProvider });
  const element = screen.getAllByTestId("confirm_checkbox");
  fireEvent.click(element[0]);
  expect(element[0]).not.toBeChecked();
  fireEvent.click(element[1]);
});

it("check the text is there", () => {
  render(<SideNav />, { wrapper: FarmFilterProvider });
  const element = screen.getByText("Category");
  expect(element).toBeTruthy();
});
