import React from "react";
import { Routes, Route } from "react-router-dom";

import DefaultLayout from "../layouts/DefaultLayout";
import SpecialLayout from "../layouts/SpecialLayout";
import Nonelayout from "../layouts/Nonelayout";
import CustomerLayout from "../layouts/CustomerLayout";


import Home from "../pages/Home";
import ContactUs from "../pages/ContactUs";
import AboutUs from "../pages/AboutUs";
import Feedback from "../pages/Feedback";
import Login from "../pages/Login";
import CreateAccount from "../pages/CreateAccount";
import ForgotPassword from "../pages/ForgotPassword";
import CreateProfile from "../pages/CreateProfile";
import ServiceProfile from "../pages/ServiceProfile";
import AvailableWeek from "../pages/AvailableWeek";
import Bookingrequest from "../pages/Bookingrequest";
import CreateAccountCustomer from "../pages/CreateAccountCustomer";
import CustomerProfile from "../pages/CustomerProfile";
import BookAppointment from "../pages/BookAppointment";



const AppRoutes = () => {
  return (
    <Routes>
      {/* Routes that use Default Layout */}
      <Route element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/Feedback" element={<Feedback />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
      </Route>

      {/* Routes that use Special Layout */}
      <Route element={<SpecialLayout />}>
        <Route path="/ServiceProfile" element={<ServiceProfile />} />
        <Route path="/AvailableWeek" element={<AvailableWeek />} />
        <Route path="/Bookingrequest" element={<Bookingrequest />} />
        </Route>

      {/* Routes that use HeaderNone */}
      <Route element={<Nonelayout />}>
      <Route path="/CreateAccountCustomer" element={<CreateAccountCustomer />} />
      <Route path="/CreateProfile" element={<CreateProfile />} /> 
      </Route>

      {/* Routes that use CustomerHeader */}
      <Route element={<CustomerLayout />}>
      <Route path="/CustomerProfile" element={<CustomerProfile />} />
      <Route path="/BookAppointment" element={<BookAppointment />} />
      </Route>
      

    </Routes>
  );
};

export default AppRoutes;
