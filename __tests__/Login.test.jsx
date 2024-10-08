import Login from "../pages/login";
import { render, screen, fireEvent } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context.shared-runtime";

const push = jest.fn().mockResolvedValue(true); // .mockResolvedValue() because push is a promise

export const routerMock = {
  basePath: "",
  pathname: "/",
  route: "/",
  asPath: "/",
  query: {},
  push,
  replace: jest.fn().mockResolvedValue(true),
  reload: jest.fn(),
  back: jest.fn(),
  prefetch: jest.fn().mockResolvedValue(undefined),
  beforePopState: jest.fn(),
  events: {
    on: jest.fn(),
    off: jest.fn(),
    emit: jest.fn(),
  },
  isFallback: false,
  isLocaleDomain: true,
  isReady: true,
  isPreview: false,
}

test.only("how to assertion a Link is clicked", () => {
  render(
    <RouterContext.Provider value={routerMock}>
      <Login />
    </RouterContext.Provider>
  );
  fireEvent.click(screen.getByText("Login"));
  expect(push).toHaveBeenCalled();
});
