
import {createBrowserRouter,createRoutesFromElements,Link,Route,RouterProvider,} from "react-router-dom";

import Home from "./Pages/Home.jsx";
import App from "./App.jsx";
import Card from "./Components/Card.jsx"
import Error from "./Components/Error.jsx";

import './style.css'


// import Navbar from "./Components/Navbar.jsx";
// import Search from "./Components/Search.jsx";
// import Cards from "./Components/Cards.jsx";
// import { useState } from "react";



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
        element: <>
          <Card />
        </>
      },

    ]
  }
]);


export default function RestCountries() {

  // const [Query, setQuery] = useState('');


  //2nd way Of Rounting

  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <Route errorElement={<h1>Error page</h1>} >

  //       <Route path="/" element={
  //         <>
  //           <Navbar />
  //           <Search setQuery={setQuery} />
  //           <Cards Query={Query} />
  //         </>}  />

  //       <Route path="/country" element={
  //         <>
  //           <Navbar />
  //           <Card />
  //         </>} />

  //     </Route>
  //   )
  // );

  return (
    <>
      
    </>
  )
}
