import NavbarComp from "../../NavbarComp/NavbarComp";
import HeroSection from "../HeroSection/HeroSection";
import TopProduct from "../TopProduct/TopProduct";

const Homepage = () => {
  return (
    <div className="absolute inset-0 -z-10 h-[1980px] w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]">
      <div className="pt-[20px] md:px-[16px] px-[4px]">
        <NavbarComp></NavbarComp>
        <HeroSection></HeroSection>
        <TopProduct></TopProduct>
      </div>
    </div>
  );
};

export default Homepage;
