import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";


import Home from "./Pages/Home.jsx";
import App from "./App.jsx";
import Card from "./Components/Card.jsx"
import Error from "./Components/Error.jsx";

import './style.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "country",
        element: <Card />
      },
      {
        path: "Africa",
        element: <Home sort={"Africa"}/>
      },
      {
        path: "Antarctica",
        element: <Home sort={"Antarctica"}/>
      },
      {
        path: "Asia",
        element: <Home sort={"Asia"}/>
      },
      {
        path: "Europe",
        element: <Home sort={"Europe"}/>
      },
      {
        path: "Oceania",
        element: <Home sort={"Oceania"}/>
      },
      {
        path: "Americas",
        element: <Home sort={"Americas"}/>
      },
      {
        path: "SouthAmerica",
        element: <Home sort={"South America"}/>
      },

    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
