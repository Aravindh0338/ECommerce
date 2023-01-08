import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, screen } from "@testing-library/react";
import { FarmFilterProvider } from "../../contexts/farmfilter/FarmFilter";
import React from "react";
import FarmList from "./FarmList";
jest.mock("../../assets/images/close.png");

it("render Page", () => {
  render(
    <FarmFilterProvider>
      <FarmList />
    </FarmFilterProvider>
  );
  const heading = screen.getAllByText("Explore Farms");
  expect(heading[0]).toBeTruthy();
});

it("onclose is clicked", () => {
  render(
    <FarmFilterProvider>
      <FarmList />
    </FarmFilterProvider>
  );
  const onClose = screen.getByTestId("oncloseBtn");
  fireEvent.click(onClose);
  expect(fireEvent.click(onClose)).toBeTruthy();
});
