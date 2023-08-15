import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div className="w-full h-[804px] shadow relative">
      <svg
        className=" absolute top-0 right-0 z-[10] h-full w-fit hidden lg:block"
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
        className="absolute top-0 right-0 z-[10] h-fit w-fit block sm:hidden"
        xmlns="http://www.w3.org/2000/svg"
        width="375"
        height="426"
        viewBox="0 0 375 426"
        fill="none">
        <path
          d="M55.6077 18.45C20.4129 22.9359 3.87142 8.01914 0 0L375 0.723531V424.17C241.499 440.429 273.111 343.496 279.27 325.046C285.429 306.596 328.015 185.405 273.111 96.7723C218.207 8.13972 99.6011 12.8427 55.6077 18.45Z"
          fill="#E23744"
        />
      </svg>
      <header className=" flex justify-between items-center p-6 relative">
        <div className=" hidden lg:block">
          <Image src={"/assets/logo.png"} alt="logo" height={83} width={107} />
        </div>
        <div className=" absolute top-4 right-0 sm:top-10 sm:right-10 z-[10]">
          <button className=" bg-transparent outline-none border-[#fff] border text-white px-6 py-3 rounded-[21px] text-sm capitalize">
            Get in touch
          </button>
        </div>
      </header>

      <div className=" flex flex-col-reverse lg:flex-row justify-between items-center h-full lg:h-[60%] px-8 w-full">
        <section className="sm:px-10">
          <h1 className="w-[380px] text-[#0E2368] text-[62px] font-semibold leading-[69px] mb-4">
            Discover the <span className="text-[#E23744]">Best</span> Food and
            Drinks
          </h1>
          <p className=" w-[340px]  text-[#444957] text-[16px] leading-5 font-normal mb-4">
            Naturally made Healthcare Products for the better care & support of
            your body.
          </p>
          <button className=" outline-none bg-[#E23744] text-white rounded-[34px] py-4 px-9">
            Explore Now!
          </button>
        </section>
        <section className="">
          <Image
            src={"/assets/banner.png"}
            alt="banner image"
            height={700}
            width={700}
            className=""
          />
        </section>
      </div>
    </div>
  );
};

export default Banner;
