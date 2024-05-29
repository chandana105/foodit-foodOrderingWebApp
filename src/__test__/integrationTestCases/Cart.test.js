import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestaurantMenu from "../../components/RestaurantMenu";
import MOCK_DATA from "../../mocks/mockResMenuList.json";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../../components/Header";
import { BrowserRouter } from "react-router-dom";
import Cart from "../../components/cart";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
);

it("Should test add to cart functionality", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <RestaurantMenu />
          <Header />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  //   page will render

  // now to find accrodan header
  const accordianHeader = screen.getByText("Breakfast (8)");
  //   expect(accordianHeader).toBeInTheDocument();

  //   now to click on it
  fireEvent.click(accordianHeader);

  //   after clcik
  //   list show

  const foodItemsAfterAccordianClick = screen.getAllByTestId("foodItems");

  expect(foodItemsAfterAccordianClick.length).toBe(8);

  //    add btn

  const addBtn = screen.getAllByRole("button", { name: "ADD" });

  expect(screen.getByText("Cart - (0 items)"));

  fireEvent.click(addBtn[0]);

  expect(screen.getByText("Cart - (1 items)"));

  fireEvent.click(addBtn[1]);

  expect(screen.getByText("Cart - (2 items)"));

  const foodItemsAfterClick = screen.getAllByTestId("foodItems");

  expect(foodItemsAfterClick.length).toBe(10);

  const clearCartBtn = screen.getByRole("button", { name: "Clear Cart" });
  fireEvent.click(clearCartBtn);

  const foodItemsAfterClearCart = screen.getAllByTestId("foodItems");

  expect(foodItemsAfterClearCart.length).toBe(8);

  expect(screen.getByText("Your Cart is empty, Add some items to it!!"));
});
