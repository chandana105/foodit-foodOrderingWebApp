import RestaurantCard, { withVegLabel } from "../../components/RestaurantCard";
import MOCK_DATA from "../../mocks/restaurantCardMock.json";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("Should render RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const resName = screen.getByText("AAR KAY Vaishno Dhaba (Nakodar Road)");

  expect(resName).toBeInTheDocument();
});

it("Should render RestaurantCard component with Veg Label", () => {
  // /test HOC - (WithVegLabel())
  const RestaurantCardWithVeg = withVegLabel(RestaurantCard);

  render(<RestaurantCardWithVeg resData={MOCK_DATA} />);

  const vegLabel = screen.getByText("Veg");

  expect(vegLabel).toBeInTheDocument();
});
