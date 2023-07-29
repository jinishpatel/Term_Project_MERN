// import { useState } from "react";

import { Route, Routes } from "react-router-dom";
import About from "./routes/About";
import Cart from "./routes/Cart";
import ContactUs from "./routes/ContactUs";
import UserProfile from "./routes/UserProfile";
import Index from "./routes/Index";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/About" element={<About />} />
      <Route path="/ContactUs" element={<ContactUs />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/UserProfile" element={<UserProfile/>} />
    </Routes>
  );
}

export default App;
