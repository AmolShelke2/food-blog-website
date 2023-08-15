"use client";

import Image from "next/image";

import React, { useState } from "react";
import { pageOneData, pageTwoData } from "./data";
interface Article {
  image_url: string;
  title: string;
  description: string;
}

const LatestArticles: React.FC = () => {
  const [tab, setTab] = useState<number>(1);

  const toggleTabHandler = () => {
    tab === 1 ? setTab(2) : setTab(1);
  };

  return (
    <div className=" bg-white h-[1756px] sm:h-[990px] mb-4">
      <h2
        className="sm:w-[461px] sm:h-[84px] sm:mt-20 mb-8 sm:mx-16 text-[#0E2368] font-semibold text-[28px]
      text-center sm:text-left sm:text-[56px] leading-[42px]">
        Latest Articles
      </h2>
      {tab === 1 ? (
        <div className="sm:mx-20 flex flex-col items-center sm:items-start sm:flex-row gap-8">
          {pageOneData.map((item: Article, index: number) => (
            <div
              key={index}
              className="h-[484px] w-[271px] sm:h-[554px] sm:w-[380px] border-[#93A2D361] border-2 rounded-[27px] flex gap-4 flex-col items-start px-6 py-4">
              <div className=" mb-2">
                <Image
                  src={item.image_url}
                  alt="card1"
                  height={257}
                  width={327}
                />
              </div>
              <div>
                <h3 className="text-[#0E2368] text-lg font-[700] leading-[27px] mb-4">
                  {item.title}
                </h3>
                <p
                  className="w-[213px] h-[106px] sm:h-auto sm:w-[295px] text-sm leading-[22px] sm:leading-[27px] font-normal
                 text-[#444957] mb-4">
                  {item.description}
                </p>
                <button className=" border-[#424961] border-[1.4px] px-14 py-4 rounded-[20px]">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="sm:mx-20 flex flex-col items-center sm:items-start sm:flex-row gap-8">
          {pageTwoData.map((item: Article, index: number) => (
            <div
              key={index}
              className="h-[484px] w-[271px] sm:h-[554px] sm:w-[380px] border-[#93A2D361] border-2 rounded-[27px] flex gap-4 flex-col items-start px-6 py-4">
              <div className=" mb-2">
                <Image
                  src={item.image_url}
                  alt="card1"
                  height={257}
                  width={327}
                />
              </div>
              <div>
                <h3 className="text-[#0E2368] text-lg font-[700] leading-[27px] mb-4">
                  {item.title}
                </h3>
                <p
                  className="w-[213px] h-[106px] sm:h-auto sm:w-[295px] text-sm leading-[22px] sm:leading-[27px] font-normal
                 text-[#444957] mb-4">
                  {item.description}
                </p>
                <button className=" border-[#424961] border-[1.4px] px-14 py-4 rounded-[20px]">
                  Read more
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className=" flex justify-center items-center my-8">
        <button className="flex items-center gap-6">
          <svg
            onClick={() => toggleTabHandler()}
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M18.4419 22.8523C18.9949 22.5393 19.1753 21.7427 18.8083 21.234C18.706 21.0921 17.1257 19.6312 15.2964 17.9875L11.9704 14.999L15.2973 12.0101C17.127 10.3662 18.7074 8.90503 18.8093 8.76312C18.9289 8.59653 18.9947 8.35683 18.9951 8.08643C18.9956 7.71445 18.9549 7.6306 18.6296 7.33388C18.2955 7.02916 18.2193 7 17.7585 7H17.2535L13.1268 10.7639L9 14.5277V14.959C9 15.2142 9.06299 15.4772 9.15418 15.6029C9.37757 15.9112 16.5225 22.452 16.9588 22.7478C17.3877 23.0386 18.0326 23.084 18.4419 22.8523Z"
              fill="#424961"
            />
            <rect
              x="0.5"
              y="0.5"
              width="27"
              height="28"
              rx="4.5"
              stroke="#424961"
            />
          </svg>
          {tab}/2
          <svg
            onClick={() => toggleTabHandler()}
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="29"
            viewBox="0 0 28 29"
            fill="none">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.55811 7.1477C9.00514 7.46068 8.82474 8.25727 9.19166 8.766C9.29397 8.9079 10.8743 10.3688 12.7036 12.0125L16.0296 15.001L12.7027 17.9899C10.873 19.6338 9.29256 21.095 9.19072 21.2369C9.07115 21.4035 9.00533 21.6432 9.00495 21.9136C9.00438 22.2855 9.04512 22.3694 9.37036 22.6661C9.70446 22.9708 9.78065 23 10.2415 23H10.7465L14.8732 19.2361L19 15.4723V15.041C19 14.7858 18.937 14.5228 18.8458 14.3971C18.6224 14.0888 11.4775 7.54798 11.0412 7.2522C10.6123 6.96142 9.96737 6.916 9.55811 7.1477Z"
              fill="#424961"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M9.55811 7.1477C9.00514 7.46068 8.82474 8.25727 9.19166 8.766C9.29397 8.9079 10.8743 10.3688 12.7036 12.0125L16.0296 15.001L12.7027 17.9899C10.873 19.6338 9.29256 21.095 9.19072 21.2369C9.07115 21.4035 9.00533 21.6432 9.00495 21.9136C9.00438 22.2855 9.04512 22.3694 9.37036 22.6661C9.70446 22.9708 9.78065 23 10.2415 23H10.7465L14.8732 19.2361L19 15.4723V15.041C19 14.7858 18.937 14.5228 18.8458 14.3971C18.6224 14.0888 11.4775 7.54798 11.0412 7.2522C10.6123 6.96142 9.96737 6.916 9.55811 7.1477Z"
              fill="#AFAFAF"
            />
            <rect
              x="0.5"
              y="0.5"
              width="27"
              height="28"
              rx="4.5"
              stroke="#AFAFAF"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default LatestArticles;
