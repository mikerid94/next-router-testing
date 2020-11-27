import Login from "../pages/login";
import { render, screen, fireEvent } from "@testing-library/react";
import Router from "next/router";

const pushMock = jest.fn().mockResolvedValue(false);
Router.push = pushMock; // needed for Router.push in redux/Login/sagas

test("AAU, when I click on the home button, I am taken to home page", () => {
  render(<Login />);
  fireEvent.click(screen.getByText("Logout"));
  expect(pushMock).toHaveBeenCalled();
});
