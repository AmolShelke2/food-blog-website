import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div
      className="w-full h-[720px] lg:h-[804px] shadow relative mb-16 bg-[url('/assets/bannerPhone.png')]
       lg:bg-[url('/assets/banner.png')] bg-no-repeat bg-right-top lg:bg-right-bottom"
      id="banner">
      <svg
        className="absolute top-0 right-0 z-[10] hidden lg:block"
        xmlns="http://www.w3.org/2000/svg"
        width="752"
        height="839"
        viewBox="0 0 752 839"
        fill="none">
        <path
          d="M111.512 36.3371C40.9348 45.1719 7.76349 15.7936 0 0L752 1.42498V835.396C484.285 867.417 547.679 676.51 560.03 640.173C572.381 603.836 657.779 365.152 547.679 190.591C437.579 16.031 199.733 25.2934 111.512 36.3371Z"
          fill="#E23744"
        />
      </svg>
      <svg
        className="absolute top-0 right-0 z-[10] block lg:hidden"
        xmlns="http://www.w3.org/2000/svg"
        width="375"
        height="420"
        viewBox="0 0 752 839"
        fill="none">
        <path
          d="M111.512 36.3371C40.9348 45.1719 7.76349 15.7936 0 0L752 1.42498V835.396C484.285 867.417 547.679 676.51 560.03 640.173C572.381 603.836 657.779 365.152 547.679 190.591C437.579 16.031 199.733 25.2934 111.512 36.3371Z"
          fill="#E23744"
        />
      </svg>
      <header className=" flex justify-between items-center px-6 relative">
        <div className="hidden ml-10 mt-2 lg:block">
          <Image src={"/assets/logo.png"} alt="logo" height={83} width={107} />
        </div>
        <div className=" absolute top-4 right-2 sm:top-10 sm:right-10 z-[10]">
          <button
            className=" bg-transparent outline-none border-[#fff] border text-white px-6 
          py-3 rounded-[21px] text-sm capitalize">
            Get in touch
          </button>
        </div>
      </header>

      <div className=" flex flex-col-reverse sm:flex-row justify-between items-center h-full lg:h-[60%] px-8 w-full">
        <section className="lg:px-10 lg:mt-16">
          <h1
            className="w-[240px] h-[130px] lg:h-auto text-center lg:text-left lg:w-[380px] text-[#0E2368] text-[38px] lg:text-[62px] 
          font-semibold leading-[47px] lg:leading-[69px] mb-4">
            Discover the <span className="text-[#E23744]">Best</span> Food and
            Drinks
          </h1>
          <p
            className=" w-[249px] text-center lg:text-left lg:w-[340px]  text-[#444957] text-[11px] lg:text-[16px]
           leading-[18px] lg:leading-[27px] font-normal mb-4">
            Naturally made Healthcare Products for the better care & support of
            your body.
          </p>
          <button className="text-center outline-none bg-[#E23744] text-white rounded-[34px] py-4 px-9 mb-4 ml-8 lg:ml-0">
            Explore Now!
          </button>
        </section>
      </div>
    </div>
  );
};

export default Banner;
