import React, { useEffect } from 'react';
import { NavLink, useNavigate } from "react-router-dom";
import "./home.css";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ProductCard from "../../components/ProductCard";
import { CarouselWithControlsExample as ImageSlider } from '../../components/imageslider';
import AboutFounder from '../About/about1.jsx';
import Slider from "../../mainPages/Home/slider/Slider.jsx";
import Why from "../../components/why.jsx";
import { useData } from '../../';
import ServicesPage from '../../components/Services/Services.jsx';
import Blog from "../../components/Blog/Blog.jsx";
import ZoomImage from '../About/about1.jsx';
import Projects from '../../components/Projects/Projects.js';
import Carousel from '../../components/Projects copy/Carousel.jsx';
import WhyChooseUs from '../../components/Why Choose Us/WhyChooseUs.jsx';

export default function Home() {
  const { backendData, categoriesData, setFiltersUsed } = useData();
  const navigate = useNavigate();
  
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Initialize AOS with a 1-second animation duration
  }, []);

  const trendingArray = backendData?.productsData.filter((item) => item.product_isBadge === "Trending");

  return (
    <>
      <Slider />
{/* <Carousel/> */}
      <section className="trending" data-aos="fade-up">
        <p>Popular Products</p>
        <h3>TRENDING NOW</h3><br/><br/>
        <Projects/>
        {/* <div className="productsContainer">
          {trendingArray.slice(0, 6).map((item) => <ProductCard key={item.id} item={item} />)}
        </div> */}
      </section>
<br/>
    
     
      <section className="ShopByCategory" data-aos="fade-up">
        <h3>SHOP BY CATEGORY</h3>
        <p>Browse through your favorite categories. we have got them all!</p>
        <div className="categoryBox">
          {categoriesData.map(({ _id, categoryName, thumbnail }) => (
            <div
              key={_id}
              className={categoryName}
              onClick={() => {
                setFiltersUsed({
                  type: "CLEARFILTER",
                  inputValue: "",
                });
                setFiltersUsed({ type: "CATEGORY", inputValue: categoryName });
                navigate('/');
              }}
            >
              <img src={thumbnail} alt={` random image of ${categoryName}`} />
              <p>{categoryName}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="showOff" data-aos="fade-down">
        <div className="textContent">
          <p>Unique Pieces</p>
          <h3>BE ALWAYS ON TREND</h3>
          <p >We take immense pride in offering jewelry pieces that are crafted with the utmost care and attention to detail. Each item in our collection undergoes rigorous quality checks to ensure it meets our high standards</p>
          <div className="mainbutton">
            {/* <NavLink to='/browse'>
              <button>Shop Now</button>
            </NavLink> */}
          </div>
        </div>
        <div className="imageContent">
          <img className="bigImage" src='\assets\model2.jpg' width="400px" />
          <img className="smallImage" src='\assets\hands.jpg' alt="" height="200px" />
        </div>
      </section>
<div className="whyUswhole">
      <section className="whyUs" data-aos="fade-down">
        <p>BEST IN BUSINESS</p>
        <h3>Why Choose Us</h3>
        <div className="whyusContent">
          <img className="middleImage" src="\assets\model3.jpg" alt="" />
          <div className="whyUsDescription">
            <div data-aos="fade-up" data-aos-delay="200">
              <img src="\assets\whyUsIcons\percent-solid.svg" alt="big discount" />
              <h5>Big Discount</h5>
              <p>We provide higher discounts without compromising on quality or craftsmanship. </p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <img src="\assets\whyUsIcons\truck-fast-solid.svg" alt="fast delivery" />
              <h5>Free Delivery</h5>
              <p>Enjoy free delivery with no hidden fees relax as we bring your exquisite jewelry straight to you!</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <img src="\assets\whyUsIcons\wallet-solid.svg" alt="big savings " />
              <h5>Secure Payments</h5>
              <p>We prioritize your security with advanced encryption and secure payment gateways for a worry-free shopping experience.</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="800">
              <img src="\assets\whyUsIcons\boxes-packing-solid.svg" alt="big tracking order" />
              <h5>Order Tracking</h5>
              <p>Stay updated with our order tracking for a seamless, transparent shopping experience.</p>
            </div>
          </div>
        </div>
      </section>  
      </div>
      {/* <WhyChooseUs/> */}
      
     < ServicesPage/>
     {/* <AboutFounder/> */}
    <ZoomImage/>
     <Blog/>
      {/* <ImageSlider /> */}
    </>
  );
}
