import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Footer from "./Footer";

jest.mock("../../assets/images/Fresh&LocalLogo.png");
jest.mock("../../assets/images/PlayStore.png");
jest.mock("../../assets/images/AppleStore.png");
jest.mock("../../assets/images/Ellipse.png");

it("render footer component", () => {
  render(<Footer />);
  const footer = screen.getByTestId("footer");
  expect(footer).toBeInTheDocument();
});

it("Check login and register text", () => {
  render(<Footer />);
  const loginText = screen.getByTestId("login");
  expect(loginText).toHaveTextContent("Login to your account");
  const registerText = screen.getByTestId("register");
  expect(registerText).toHaveTextContent("Register with Us");
});
