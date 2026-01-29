// pages/Home.jsx

import Hero from "../components/sections/Hero";
import ProductsShowcase from "../components/sections/ProductsShowcase";
import WhyChooseUs from "../components/sections/WhyChooseUs";

const Home = () => {
  return (
    <>
    <Hero />
    <ProductsShowcase />
    <WhyChooseUs />
      {/* <IndustriesGrid /> */}
      {/* <ContactForm /> */}
    </>
  );
};

export default Home;