import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./pages/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./pages/Error";
import { Outlet } from "react-router-dom";
import RestaurantPage from "./components/RestaurantMenu";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <Provider store={appStore}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="flex-grow">
          <Outlet />
        </div>
        <Footer />
      </div>
    </Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantPage />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);
