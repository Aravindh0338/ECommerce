import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import FarmCard from "./FarmCard";

it("render the FarmCard Component", () => {
  render(
    <FarmCard
      image="../../../assets/images/MathewFarm.png"
      name="Mathew Farm"
    />
  );
  expect(screen.getByText("Mathew Farm")).toBeInTheDocument();
});

it("Check image tag is available", () => {
  render(<FarmCard />);
  expect(screen.getByTestId("farmLogo")).toBeInTheDocument();
});
