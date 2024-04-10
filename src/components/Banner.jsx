import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Banner = () => {
  return (
    <div>
      <Swiper
        navigation={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        loop={true}
      >
        <SwiperSlide>
        <div className="bg-[url('../../src/assets/slide6.jpg')] h-[450px] bg-no-repeat bg-cover bg-center flex gap-32 rounded-lg">
        <div 
        data-aos="fade-down"
        data-aos-duration="500"
        className="flex-1 bg-[#375CAA] rounded-l-lg bg-opacity-90 flex flex-col md:gap-4 justify-center text-white">
          <h2
            data-aos="fade-down"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1500"
            className="md:text-4xl font-bold md:ml-20 md:mr-5"
          >
            Find Your Dream Home: Explore Our Listings
          </h2>
          <p 
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
          className="font-medium md:ml-20">
            Discover Your Dream Home: Browse our extensive <br /> collection of
            premium properties from cozy starter <br /> homes to luxurious
            estates
          </p>
          <div 
          data-aos="zoom-in"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
          >
            <button className="btn btn-outline border text-white border-white flex justify-start md:ml-20">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex-1"></div>
      </div>
        </SwiperSlide>
        <SwiperSlide><div className="bg-[url('../../src/assets/slide5.jpg')] h-[450px] bg-no-repeat bg-cover bg-center flex gap-32 rounded-lg">
        <div 
        data-aos="fade-down"
        data-aos-duration="500"
        className="flex-1 bg-[#375CAA] rounded-l-lg bg-opacity-90 flex flex-col md:gap-4 justify-center text-white">
          <h2
            data-aos="fade-down"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1500"
            className="md:text-4xl font-bold md:ml-20 md:mr-5"
          >
            Unlocking Your Perfect Property: Browse Our Real Estate Selection
          </h2>
          <p 
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
          className="font-medium md:ml-20">
            Investment Opportunities Await: Explore a diverse <br />range of investment properties, offering high potential returns <br /> and strategic locations
          </p>
          <div 
          data-aos="zoom-in"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
          >
            <button className="btn btn-outline border text-white border-white flex justify-start md:ml-20">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex-1"></div>
      </div></SwiperSlide>
        <SwiperSlide><div className="bg-[url('../../src/assets/slide4.jpg')] h-[450px] bg-no-repeat bg-cover bg-center flex gap-32 rounded-lg">
        <div 
        data-aos="fade-down"
        data-aos-duration="500"
        className="flex-1 bg-[#375CAA] rounded-l-lg bg-opacity-90 flex flex-col md:gap-4 justify-center text-white">
          <h2
            data-aos="fade-down"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1500"
            className="md:text-4xl font-bold md:ml-20 md:mr-5"
          >
            Your Key to Exceptional Living: Discover Our Featured Listings
          </h2>
          <p 
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
          className="font-medium md:ml-20">
            Your Gateway to Urban Living: Immerse yourself in <br /> vibrant city life with our selection of modern condos and <br /> apartments in bustling metropolitan areas
          </p>
          <div 
          data-aos="zoom-in"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
          >
            <button className="btn btn-outline border text-white border-white flex justify-start md:ml-20">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex-1"></div>
      </div></SwiperSlide>
        <SwiperSlide><div className="bg-[url('../../src/assets/slide3.jpg')] h-[450px] bg-no-repeat bg-cover bg-center flex gap-32 rounded-lg">
        <div 
        data-aos="fade-down"
        data-aos-duration="500"
        className="flex-1 bg-[#375CAA] rounded-l-lg bg-opacity-90 flex flex-col md:gap-4 justify-center text-white">
          <h2
            data-aos="fade-down"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1500"
            className="md:text-4xl font-bold md:ml-20 md:mr-5"
          >
            Navigating the Real Estate Landscape: Start Your Search Here
          </h2>
          <p 
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
          className="font-medium md:ml-20">
            Escape to Tranquility: Find solace in our serene <br /> countryside retreats, nestled amidst picturesque <br /> landscapes and natural beauty
          </p>
          <div 
          data-aos="zoom-in"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
          >
            <button className="btn btn-outline border text-white border-white flex justify-start md:ml-20">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex-1"></div>
      </div></SwiperSlide>
        <SwiperSlide><div className="bg-[url('../../src/assets/slide2.jpg')] h-[450px] bg-no-repeat bg-cover bg-center flex gap-32 rounded-lg">
        <div 
        data-aos="fade-down"
        data-aos-duration="500"
        className="flex-1 bg-[#375CAA] rounded-l-lg bg-opacity-90 flex flex-col md:gap-4 justify-center text-white">
          <h2
            data-aos="fade-down"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1500"
            className="md:text-4xl font-bold md:ml-20 md:mr-5"
          >
            Investing in Your Future: Explore Properties for Sale
          </h2>
          <p 
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
          className="font-medium md:ml-20">
            Luxury Living Redefined: Experience opulence like never <br /> before with our exclusive portfolio of upscale mansions <br /> and waterfront residences
          </p>
          <div 
          data-aos="zoom-in"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
          >
            <button className="btn btn-outline border text-white border-white flex justify-start md:ml-20">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex-1"></div>
      </div></SwiperSlide>
        <SwiperSlide><div className="bg-[url('../../src/assets/slide1.jpg')] h-[450px] bg-no-repeat bg-cover bg-center flex gap-32 rounded-lg">
        <div 
        data-aos="fade-down"
        data-aos-duration="500"
        className="flex-1 bg-[#375CAA] rounded-l-lg bg-opacity-90 flex flex-col md:gap-4 justify-center text-white">
          <h2
            data-aos="fade-down"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1500"
            className="md:text-4xl font-bold md:ml-20 md:mr-5"
          >
            From House to Home: Explore Our Diverse Real Estate Portfolio
          </h2>
          <p 
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
          className="font-medium md:ml-20">
            Your Perfect Space Awaits: Whether you seek a quaint <br /> suburban haven or a chic urban loft, we have the ideal <br /> property to suit your lifestyle and preferences
          </p>
          <div 
          data-aos="zoom-in"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
          >
            <button className="btn btn-outline border text-white border-white flex justify-start md:ml-20">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex-1"></div>
      </div></SwiperSlide>
      </Swiper>
      {/* <div className="bg-[url('../../src/assets/slide1.jpg')] h-96 bg-no-repeat bg-cover bg-center flex gap-32">
        <div 
        data-aos="fade-down"
        data-aos-duration="500"
        className="flex-1 bg-[#375CAA] bg-opacity-90 flex flex-col md:gap-4 justify-center text-white">
          <h2
            data-aos="fade-down"
            data-aos-anchor-placement="top-bottom"
            data-aos-duration="1500"
            className="md:text-4xl font-bold md:ml-20 md:mr-5"
          >
            Find Your Dream Home: Explore Our Listings
          </h2>
          <p 
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
          className="font-medium md:ml-20">
            Discover Your Dream Home: Browse our extensive <br /> collection of
            premium properties from cozy starter <br /> homes to luxurious
            estates
          </p>
          <div 
          data-aos="zoom-in"
          data-aos-anchor-placement="top-bottom"
          data-aos-duration="1500"
          >
            <button className="btn btn-outline border text-white border-white flex justify-start md:ml-20">
              Get Started
            </button>
          </div>
        </div>
        <div className="flex-1"></div>
      </div> */}
    </div>
  );
};

export default Banner;
