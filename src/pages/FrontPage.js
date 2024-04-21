import React from "react";
import Search from "../components/Search";
import Places from "../components/Places";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const FrontPage = () => {
  return (
    <div>
      <Navbar />
      <Search />
      <Places />
      <Footer />
    </div>
  );
};

export default FrontPage;
