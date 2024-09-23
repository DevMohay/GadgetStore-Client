import React from "react";
import hero1 from "../../assets/hero1.png";
import apple from "../../assets/apple.png";
import "./swiper.css";
import {Button} from "@nextui-org/react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import ProductsComponents from "../ProductsComponents";

function Hero() {
  return (
    <>
      <section id="hero" className="mainbg flex ">
        <div className="w-2/3 h-[60vh] flex justify-center">
          <div className="flex flex-col gap-4 justify-center items-start ">
            <h1 className="text-5xl font-bold items-start">
              Discover a New Era <br /> of Crypto Currency
            </h1>
            <p className="text-[#a1a1a1]">
              Panda NFT is the primier marketplace for NFT, which are digital
              items you can truly own. Digital items have existed for a long
              time, but never like this.
            </p>
            <Button className="  primarycolor text-white p-2 px-10 rounded-md">Vew More</Button>
          </div>
        </div>
        <div className="main w-1/2">
          <div className="all-card flex gap-4">
            <Swiper
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              pagination={false}
              modules={[Autoplay, EffectCoverflow, Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <ProductsComponents />
              </SwiperSlide>
              <SwiperSlide>
                <ProductsComponents />
              </SwiperSlide>
              <SwiperSlide>
                <ProductsComponents />
              </SwiperSlide>
              <SwiperSlide>
                <ProductsComponents />
              </SwiperSlide>
              <SwiperSlide>
                <ProductsComponents />
              </SwiperSlide>
              <SwiperSlide>
                <ProductsComponents />
              </SwiperSlide>
              <SwiperSlide>
                <ProductsComponents />
              </SwiperSlide>
              <SwiperSlide>
                <ProductsComponents />
              </SwiperSlide>
            </Swiper>

            {/* card close */}
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
