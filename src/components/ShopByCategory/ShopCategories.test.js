import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "../Navbar/Nav";
import { ShowContextProvider } from "../../contexts/EnableProduct/ShowProduct";
import ShopCategories from "./ShopCategories";
jest.mock("../../assets/images/ShopNow.png");

jest.mock("react-redux", () => ({
  useSelector: jest.fn((fn) => fn()),
}));

it("test after click shopbycategory show modal", () => {
  render(
    <Router>
      <ShowContextProvider>
        <ShopCategories />
        <Nav />
      </ShowContextProvider>
    </Router>
  );
  const shop = screen.getByTestId("shop");
  fireEvent.click(shop);
  const model = screen.getByTestId("modal");
  expect(model).toBeInTheDocument();
});

it("test view all categories", () => {
  render(
    <Router>
      <ShowContextProvider>
        <ShopCategories />
        <Nav />
      </ShowContextProvider>
    </Router>
  );
  const shop = screen.getByTestId("shop");
  fireEvent.click(shop);
  const category = screen.getByTestId("button");
  fireEvent.click(category);
});

it("test navigate to categories page after click the view All categories button", () => {
  render(
    <Router>
      <ShowContextProvider>
        <ShopCategories />
        <Nav />
      </ShowContextProvider>
    </Router>
  );
  const shop = screen.getByTestId("shop");
  fireEvent.click(shop);
  const anchor = screen.getByTestId("category");
  expect(anchor).toHaveAttribute("href", "/categories");
});

it("test modal is closed", () => {
  render(
    <Router>
      <ShowContextProvider>
        <ShopCategories />
        <Nav />
      </ShowContextProvider>
    </Router>
  );
  const shop = screen.getByTestId("shop");
  fireEvent.click(shop);
  //Open Modal
  const model = screen.getByTestId("modal");
  expect(model).toBeInTheDocument();
  const viewAllCategory = screen.getByTestId("button");
  fireEvent.click(viewAllCategory);
  //Afer Close the modal modal will not Show
  expect(model).not.toBeInTheDocument();
});
