import { expect, test, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("Main page tests", () => {
  test("Basic page test", () => {
    render(<HomePage />);
    expect(screen.getByText("Counter Test")).toBeDefined();
  });
});
