import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../../components/Body";
import MOCK_DATA from "../../mocks/mockResList.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  // mocking actual fetch (returns a promise which is in reponse)
  // const response = await fetch(RESTAURANTS_LIST_URL);
  return Promise.resolve({
    // const json(data) = await response.json();
    // primise resolve , we ll get reponse contianing json
    json: () => {
      // and here data returned by comp will returned
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search Res List for Dhaba", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const resCardsBeforeSearch = screen.getAllByTestId("resCard");

  expect(resCardsBeforeSearch.length).toBe(9);

  const searchBtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");

  fireEvent.change(searchInput, { target: { value: "dhaba" } });

  fireEvent.click(searchBtn);

  const resCardsAfterSearch = screen.getAllByTestId("resCard");

  expect(resCardsAfterSearch.length).toBe(4);
});

it("Should filter top Rated restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const resCardsBeforeFilter = screen.getAllByTestId("resCard");

  expect(resCardsBeforeFilter.length).toBe(9);

  const topRatedBtn = screen.getByRole("button", {
    name: "Top Rated restaurants",
  });

  fireEvent.click(topRatedBtn);

  const resCardsAfterFilter = screen.getAllByTestId("resCard");

  expect(resCardsAfterFilter.length).toBe(4);
});
