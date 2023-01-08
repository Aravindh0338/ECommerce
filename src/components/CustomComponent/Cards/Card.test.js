import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Cards from "./Cards";

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => mockDispatch,
}));
jest.mock("../../../assets/images/bookmark.png");
jest.mock("../../../assets/images/bookmarkRed.png");

it("render the Card component", () => {
  render(
    <Cards
      key={1}
      image={"../../../assets/images/bonelesschicken.png"}
      imageName={"bonelesschicken.png"}
      name={"Boneless Chicken Breast Fillet"}
      location={"From Joseph Farm"}
      des={
        "Lorem ipsum is simply dummy text of the print and type setting more"
      }
      weight={"500g"}
      oldValue={"13.330 KD"}
      kd={"10.605KD"}
      discount={"50% Off"}
      oldRate={13.33}
      rate={10.605}
    />
  );
  expect(screen.getByText("Deal of the Day")).toBeInTheDocument();
  expect(screen.getByText("50% Off")).toBeInTheDocument();
  expect(
    screen.getByText("Boneless Chicken Breast Fillet")
  ).toBeInTheDocument();
  expect(screen.getByText("From Joseph Farm")).toBeInTheDocument();
});

it("Test Button is Clicked?", () => {
  render(<Cards />);
  fireEvent.click(screen.getByTestId("addBtn"));
});
