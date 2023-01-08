import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Nav from "./Nav";
import { ShowContextProvider } from "../../contexts/EnableProduct/ShowProduct";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("../../assets/images/Fresh&LocalLogo.png");
jest.mock("../../assets/images/down-arrow(1).png");
jest.mock("../../assets/images/Location.png");
jest.mock("../../assets/images/arrow.png");
jest.mock("../../assets/images/Account.png");
jest.mock("../../assets/images/Notification.png");
jest.mock("../../assets/images/Delete.png");
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

it("render Nav component", () => {
  render(
    <Router>
      <ShowContextProvider>
        <Nav />
      </ShowContextProvider>
    </Router>
  );
  //   const logo = screen.getByTestId("logo");
  //   expect(logo).toHaveBeenCalledWith("/farm");
  const anchor = screen.getByTestId("logo");
  expect(anchor).toHaveAttribute("href", "/");
  const farm = screen.getByTestId("farm");
  expect(farm).toHaveAttribute("href", "/farm");
});

it("test Logo is navigate Home Page", () => {
  render(
    <Router>
      <ShowContextProvider>
        <Nav />
      </ShowContextProvider>
    </Router>
  );
  const cart = screen.getByTestId("cart");
  fireEvent.click(cart);
  expect(mockedUsedNavigate).toHaveBeenCalledWith("/cart");
});

it("test all search bar is after click", () => {
  render(
    <Router>
      <ShowContextProvider>
        <Nav />
      </ShowContextProvider>
    </Router>
  );
  const shop = screen.getByTestId("shop");
  fireEvent.click(shop);

  const product = screen.getByTestId("searchProduct");
  fireEvent.click(product);

  const address = screen.getByTestId("searchAddress");
  fireEvent.click(address);
});
