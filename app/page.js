import Aboutus from "@/components/Aboutus";
import AllPost from "@/components/AllPost";
import Category from "@/components/Category";
import Feature from "@/components/Feature";
import Jumbotron from "@/components/Jumbotron";
import ListAuthor from "@/components/ListAuthor";
import Navbar from "@/components/Navbar";
import TrustedBy from "@/components/TrustedBy";
import Testimonial from "@/components/Testimonial";
import Join from "@/components/Join";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-screen overflow-x-none">
      <Navbar />
      <Jumbotron />
      <div className="flex flex-row space-x-[60px] lg:px-[100px] my-[100px]">
        <Feature className="" />
        <AllPost className="" />
      </div>
      <Aboutus />
      <Category />
      <ListAuthor />
      <TrustedBy />
      <Testimonial />
      <Join />
      <Footer />
    </main>
  );
}
