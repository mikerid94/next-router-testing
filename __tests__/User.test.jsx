import User from "../pages/user/[id]";
import { render, screen, fireEvent } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context.shared-runtime";

const id = "testid";

export const routerMock = {
  basePath: "",
  pathname: "/",
  route: "/",
  asPath: "/",
  query: { id },
  push: jest.fn().mockResolvedValue(true),
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

test("AAU, I can see the user id", () => {
  render(
    <RouterContext.Provider value={routerMock}>
      <User />
    </RouterContext.Provider>
  );
  screen.getByText(id);
});
