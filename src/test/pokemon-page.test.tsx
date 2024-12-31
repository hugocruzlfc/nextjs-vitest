import { expect, test, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import PokemonPage from "@/app/pokemon/page";

describe("Pokemon Page tests", () => {
  test("RSC Pokemon Page", async () => {
    render(await PokemonPage());
    expect(await screen.findByText("bulbasaur")).toBeDefined();
  });
});
