import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div className=" w-full h-[470px] mx-auto bg-[#F6F6F9] mb-16">
      <div className=" flex flex-col sm:flex-row justify-around items-start">
        <section className=" hidden md:block">
          <Image
            src={"/assets/about.png"}
            alt="about"
            height={471}
            width={384}
          />
        </section>
        <section className="w-[375px] md:w-[447px] h-[516px] sm:h-[254px] flex flex-col items-center md:items-start justify-center my-auto gap-[21px]">
          {/* text fields  */}
          <h2 className=" text-[#0E2368] text-[26px] md:text-[45px] font-semibold leading-[27px]">
            About us
          </h2>
          <p className=" text-[#444957] w-[275px] md:w-full text-sm font-normal leading-[21px] md:leading-[27px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry standard dummy text ever
            since the 1500s, when an unknown printer took a galley of type and
            scrambled it to make a type specimen book. t has survived not only
            five centuries.
          </p>
          <button className=" outline-none bg-[#E23744] text-white rounded-[34px] py-4 px-9">
            Read more
          </button>
        </section>
      </div>
    </div>
  );
};

export default About;
