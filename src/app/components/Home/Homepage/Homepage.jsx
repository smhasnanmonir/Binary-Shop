import NavbarComp from "../../NavbarComp/NavbarComp";
import HeroSection from "../HeroSection/HeroSection";

const Homepage = () => {
  return (
    <div className="">
      <div className="pt-[20px] md:px-[16px] px-[4px]">
        <NavbarComp></NavbarComp>
        <HeroSection></HeroSection>
      </div>
    </div>
  );
};

export default Homepage;
