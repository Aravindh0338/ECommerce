import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Deal from "./Deal";
jest.mock("../../assets/images/offer.png");

it("render Deal Component", () => {
  render(<Deal />);
  const deal = screen.getByTestId("deal");
  expect(deal).toBeInTheDocument();
});

it("test deal of the day text", () => {
  render(<Deal />);
  const image = screen.getByTestId("headerImg");
  expect(image).toBeInTheDocument();
});
