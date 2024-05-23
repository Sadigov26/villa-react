import React from "react";
import Home from "../Pages/Home/Home";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import Bascet from "../Pages/Bascet/Bascet";
import Wishlist from "../Pages/Wishlist/Wishlist";
import Dasboard from "../Pages/dasboard/Dasboard";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Bascet" element={<Bascet/>} />
           <Route path="/Wishlsit" element={<Wishlist/>} />
           <Route path="/dasboard" element={<Dasboard/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
