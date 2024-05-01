import React from "react";
import { ImageList } from "../Home/SliderComp";
import { SampleNextArrow } from "../Home/SliderComp";
import { SamplePrevArrow } from "../Home/SliderComp";
import Slider from "react-slick";
// img list to make sllides

export const Hero = ({ handleOrderPopup }) => {
  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
    slidesToShow: 1,
    initialSlide: 0,
    className: "slides",
    nextArrow: <SampleNextArrow to="Next" />,
    prevArrow: <SamplePrevArrow to="prev" />,
  };

  return (
    <div className="relative overflow-hidden w-full min-h-[350px] sm:min-h-[300px]  bg-sky-200 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200 ">
      {/* background pattern */}
     
      {/* hero section */}
      <div className="container pb-8 sm:pb-0 ">
        <Slider {...settings}>
          {ImageList.map((data) => (
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 h-[250px]">
                {/* text content section */}
                <div className="flex flex-col justify-center gap-4 sm:pt-0 text-center sm:text-left order-2 sm:order-1 relative z-10">
                  <h1
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold"
                  >
                    {data.title}
                  </h1>
                  <p>{data.description}</p>
                  {/* <div>
                    <button
                      onClick={handleOrderPopup}
                      className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full"
                    >
                      Order Now
                    </button>
                  </div> */}
                </div>
                {/* image section */}
                <div className="order-1 sm:order-2">
                  <div
                    data-aos="zoom-in"
                    data-aos-once="true"
                    className="relative z-10"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[250px] sm:h-[250px] sm:w-[350px] sm:scale-105 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Hero;
