import Header from "./component/Header";
import Home from "./component/Home";
import { createBrowserRouter, Outlet } from "react-router-dom";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import { Toaster } from "react-hot-toast";
import { lazy, Suspense } from "react";
import Shimmer from "./component/Shimmer";

const FoodCollection = lazy(() => import("./component/FoodCollection"));
const RestaurentMenu = lazy(() => import("./component/RestaurantMenu"));
const Cart = lazy(() => import("./component/Cart"));
const Search = lazy(() => import("./component/Search"));

export const pathConfig = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:resId",
        element: (
          <Suspense fallback={<Shimmer />}>
            <FoodCollection />
          </Suspense>
        ),
      },
      {
        path: "/restaurentMenu/:menuId",
        element: (
          <Suspense fallback={<Shimmer />}>
            <RestaurentMenu />
          </Suspense>
        ),
      },
      {
        path: "/checkout",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "/search",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Search />
          </Suspense>
        ),
      },
    ],
  },
]);

function App() {
  return (
    <>
      <Provider store={appStore}>
        <Header />
        <Outlet />
        <Toaster />
      </Provider>
    </>
  );
}

export default App;
