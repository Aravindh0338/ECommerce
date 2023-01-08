import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import PathHeader from "./PathHeader";
jest.mock("../../../assets/images/Next.png");
jest.mock("../../../assets/images/Sort.png");

it("render path header", () => {
  render(<PathHeader />);
  const path = screen.getByTestId("pathComponent");
  expect(path).toBeInTheDocument();
});

it("test Proper path", () => {
  render(
    <PathHeader
      pathName="Deal of the Day"
      pathHeading="Deal of the Day"
      featureSort={true}
    />
  );
  expect(screen.getByTestId("pathName")).toHaveTextContent(
    "Home / Deal of the Day"
  );
  expect(screen.getByTestId("pathHeading")).toHaveTextContent(
    "Deal of the Day"
  );
  expect(screen.getByTestId("featureFilter")).toBeInTheDocument();
});

it("test Path name", () => {
  render(<PathHeader />);
  const home = screen.getByTestId("home");
  expect(home).toBeInTheDocument();
});
