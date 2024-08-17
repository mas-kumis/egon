import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React from "react";
import AuthorAbout from "@/components/AuthorAbout";
import ProfileAbout from "@/components/ProfileAbout";

const page = () => {
  return (
    <>
      <Navbar />
      <ProfileAbout />
      <AuthorAbout />
      <Footer />
    </>
  );
};

export default page;
