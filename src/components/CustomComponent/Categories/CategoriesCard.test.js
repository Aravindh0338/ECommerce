import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CategoriesCard from "./CategoriesCard";

test("render the Category component", () => {
  render(
    <CategoriesCard
      name={"Poultry"}
      image={"../../../assets/images/bonelesschicken.png"}
    />
  );
  expect(screen.getByText("Poultry")).toBeInTheDocument();
});
