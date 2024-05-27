import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddTask from "./pages/AddRecipe/AddRecipe.jsx";

import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import UpdateTask from "./Components/UpdateTask/Update.jsx";
import RecipeDetail from "./Components/Recipe/recipeDetails.jsx";
import GoogleLogin from "./pages/GoogleLogin/GoogleLogin.jsx";
import AddRecipe from "./pages/AddRecipe/AddRecipe.jsx";
import AllRecipes from "./Components/Recipe/AllRecipes.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import PurchaseCoin from "./pages/PurchaseCoin/PurchaseCoin.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/add-recipe",
    element: <AddRecipe />,
  },
  {
    path: "/purchase-coin",
    element: <PurchaseCoin />,
  },
  {
    path: "/recipes",
    element: <AllRecipes />,
  },
  {
    path: "/login",
    element: <GoogleLogin />,
  },
 
  {
    path: "/recipe/:id",
    element: (
      <PrivateRoute>
        <RecipeDetail />
      </PrivateRoute>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
