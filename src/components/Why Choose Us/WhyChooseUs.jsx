import React from 'react'
// import "./WhyChooseUs.css"
import AOS from 'aos';
import 'aos/dist/aos.css';

function WhyChooseUs() {
  return (
    <section className="whyUs" data-aos="fade-down">
    <p>BEST IN BUSINESS</p>
    <h4>Why Choose Us</h4>
    <div className="whyusContent">
      <img className="middleImage" src="\assets\model3.webp" alt="" />
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
  )
}

export default WhyChooseUs