import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./Home";
jest.mock("../../assets/images/ShopNow.png");

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

it("Test View All text is there?", () => {
  render(<Home />);
  const viewAllText = screen.getAllByText("View All");
  expect(viewAllText[0]).toBeInTheDocument();
  fireEvent.click(viewAllText[0]);
  fireEvent.click(viewAllText[1]);
  fireEvent.click(viewAllText[2]);
  fireEvent.click(viewAllText[3]);
  expect(mockedUsedNavigate).toHaveBeenCalledWith("/feature-promos");
  expect(mockedUsedNavigate).toHaveBeenCalledWith("/deal-of-the-day");
  expect(mockedUsedNavigate).toHaveBeenCalledWith("/categories");
  expect(mockedUsedNavigate).toHaveBeenCalledWith("/farm");
});

it("Test Explore Farm Event is Triggered", () => {
  render(<Home />);
  const btn = fireEvent.click(screen.getByText("Explore Farm"));
  expect(btn).toBeTruthy();
  expect(mockedUsedNavigate).toHaveBeenCalledWith("/farm");
});

it("Test Left Slider is Event is Triggered", () => {
  render(<Home />);
  const slide = screen.getByTestId("leftSlidarBtn");
  expect(slide).toBeTruthy();
  fireEvent.click(slide);
});

it("Test right Slider is Event is Triggered", () => {
  render(<Home />);
  const slide = screen.getByTestId("rightSlidarBtn");
  expect(slide).toBeTruthy();
  fireEvent.click(slide);
});

it("check whether Feature component is present", () => {
  render(<Home />);
  const childElement = screen.getAllByTestId("featureImg");
  expect(childElement[0]).toBeInTheDocument();
});

it("heading is present", () => {
  render(<Home />);
  const heading = screen.getByText("Freshest of Produce,");
  const subHeading = screen.getByText("gauranteed!");
  expect(heading).toBeInTheDocument();
  expect(subHeading).toBeInTheDocument();
});
