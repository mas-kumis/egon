import AuthorPost from "@/components/AuthorPost";
import Footer from "@/components/Footer";
import Join from "@/components/Join";
import Navbar from "@/components/Navbar";
import ReadNext from "@/components/ReadNext";
import React from "react";

const page = () => {
  return (
    <div>
      <Navbar />
      <AuthorPost />
      <ReadNext />
      <Join />
      <Footer />
    </div>
  );
};

export default page;
