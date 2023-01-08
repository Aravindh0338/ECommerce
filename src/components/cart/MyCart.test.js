import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MyCart } from "./MyCart";
import * as reactRedux from "react-redux";
import data from "../../__mock__/MyCart.mock";
jest.mock("../../assets/images/Clear.png");
jest.mock("../../assets/images/Minus.png");
jest.mock("../../assets/images/Plus.png");

it("test cart is empty", () => {
  render(<MyCart />);
  const remove = screen.getByTestId("remove");
  fireEvent.click(remove);
});

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useDispatchMock: jest.fn(),
  useSelectorMock: jest.fn(),
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));

describe("splash test", () => {
  const useSelectorMock = jest.spyOn(reactRedux, "useSelector");
  const useDispatchMock = jest.spyOn(reactRedux, "useDispatch");
  const useStateMock = jest.spyOn(React, "useState");
  beforeEach(() => {
    useSelectorMock.mockClear();
    useDispatchMock.mockClear();
    useStateMock.mockClear();
  });

  useSelectorMock.mockImplementation((selector) => selector(data));

  it("test Increase cart quantity", () => {
    render(<MyCart />);
    const increase = screen.getByTestId("add");
    expect(increase).toBeTruthy();
    fireEvent.click(increase);
  });
  it("test Decrease cart quantity", () => {
    render(<MyCart />);
    const decrease = screen.getByTestId("delete");
    expect(decrease).toBeTruthy();
    fireEvent.click(decrease);
  });
  it("test whether the Cart is Empty after click the remove button", () => {
    render(<MyCart />);
    const remove = screen.getByTestId("remove");
    fireEvent.click(remove);
  });
  it("test path component is render", () => {
    render(<MyCart />);
    expect(screen.getByTestId("tableShow")).toBeInTheDocument();
  });
  it("test total price", () => {
    render(<MyCart />);
    expect(screen.getByText("3.3")).toBeInTheDocument();
    expect(screen.getAllByText("6.60")).toHaveLength(2);
    expect(screen.getByText(/0\.00/i)).toBeInTheDocument();
  });
});
