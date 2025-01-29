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

      <section className="whyUs" data-aos="fade-down">
        <p>BEST IN BUSINESS</p>
        <h3>Why Choose Us</h3>
        <div className="whyusContent">
          <img className="middleImage" src="\assets\model3.jpg" alt="" />
          <div className="whyUsDescription">
            <div data-aos="fade-up" data-aos-delay="200">
              <img src="\assets\whyUsIcons\percent-solid.svg" alt="big discount" />
              <h3>Big Discount</h3>
              <p>We provide higher discounts without compromising on quality or craftsmanship. Our commitment to offering affordable prices allows you to indulge in your love for exquisite jewelry while enjoying significant savings.</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <img src="\assets\whyUsIcons\truck-fast-solid.svg" alt="fast delivery" />
              <h3>Free Delivery</h3>
              <p>With our Free delivery service, you can shop with confidence, knowing that there are no hidden fees or additional charges. Sit back, relax, and let us take care of delivering your exquisite jewelry directly to you.</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="600">
              <img src="\assets\whyUsIcons\wallet-solid.svg" alt="big savings " />
              <h3>Secure Payments</h3>
              <p>We ensure your peace of mind throughout your shopping experience. Your financial security is of utmost importance to us, which is why we have implemented advanced encryption and secure payment gateways.</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="800">
              <img src="\assets\whyUsIcons\boxes-packing-solid.svg" alt="big tracking order" />
              <h3>Order Tracking</h3>
              <p>We provide tracking order services, allowing you to stay informed and updated on the status of your purchase every step of the way. We ensure a seamless and transparent shopping experience.</p>
            </div>
          </div>
        </div>
      </section>  
      
     < ServicesPage/>
     {/* <AboutFounder/> */}
    <ZoomImage/>
     <Blog/>
      {/* <ImageSlider /> */}
    </>
  );
}
