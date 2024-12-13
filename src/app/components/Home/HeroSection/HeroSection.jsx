/* eslint-disable @next/next/no-img-element */
import heroIcon from "../../../../photos/hero.png";

const HeroSection = () => {
  return (
    <div className="md:px-[4%] px-[4%] pt-[16px]">
      <div className="grid md:grid-cols-3 grid-cols-1 place-items-center pt-[10px] md:gap-x-4 md:gap-y-0 gap-y-2">
        <div className="space-y-[32px] md:px-[40px]  col-span-2">
          <h1 className="md:text-5xl text-2xl font-semibold ">
            Welcome To Binary Shop!
          </h1>
          <p className="md:text-3xl text-2xl rounded-md md:leading-[46px] leading-[30px]">
            Binary Shop is a leading platform where you can find shared account
            at the{" "}
            <span className="font-extrabold underline underline-offset-[6px] decoration-pink-500 text-green-500">
              Best Price
            </span>
            .
          </p>

          <p className="text-2xl underline decoration-pink-500 underline-offset-[8px] md:block hidden">
            We provide{" "}
            <span className="font-extrabold text-[#40c057]">
              money back guarantee{" "}
            </span>
            for every product we sell.
          </p>
        </div>
        <div className="">
          <img
            className=""
            src="https://utfs.io/f/ZSu459z2V7OtrJGtBA0R98gaIEM6N2sbK5i4dUcqhYwrAfOT"
            alt="hero image"
          />

          <p className="text-2xl underline decoration-pink-500 underline-offset-[8px] md:hidden block mt-[20px]">
            We provide{" "}
            <span className="font-extrabold text-[#40c057]">
              money back guarantee{" "}
            </span>
            for every product we sell.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
