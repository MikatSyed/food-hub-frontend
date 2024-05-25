import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AddTask from "./Components/AddTask/AddTask.jsx";

import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import UpdateTask from "./Components/UpdateTask/Update.jsx";
import RecipeDetail from "./Components/Recipe/recipeDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/task/new",
    element: <AddTask />,
  },
  {
    path: "/recipe/:id",
    element: <RecipeDetail />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
