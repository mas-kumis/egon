import AllPostBlog from "@/components/AllPostBlog";
import CategoryBlog from "@/components/CategoryBlog";
import Footer from "@/components/Footer";
import HeaderBlog from "@/components/HeaderBlog";
import Join from "@/components/Join";
import Navbar from "@/components/Navbar";
import React from "react";

const page = () => {
  return (
    <>
      <Navbar />
      <HeaderBlog />
      <AllPostBlog />
      <CategoryBlog />
      <Join />
      <Footer />
    </>
  );
};

export default page;
