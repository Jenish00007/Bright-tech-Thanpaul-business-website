import './about.css';  // Import your styles if needed
import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const ZoomImage = ({ scale = 4.5, duration = 1, ease = "power2.out" }) => {
  const firstImageRef = useRef();
  const secondImageRef = useRef();

  // GSAP animation for the first image on scroll
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(firstImageRef.current, {
        scale: 1 / scale,
        opacity: 0,
        ease: ease,
        duration: duration,
        scrollTrigger: {
          trigger: firstImageRef.current,
          scrub: 1, // Smooth scroll effect
          start: "top 80%", // When the top of the image is 80% from the top of the viewport
          end: "bottom 80%" // When the bottom of the image is 80% from the top of the viewport
        }
      });
    }, firstImageRef);

    // Cleanup on unmount
    return () => ctx.revert();
  }, [scale, duration, ease]);

  // GSAP animation for the second image on scroll
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(secondImageRef.current, {
        scale: 1 / scale,
        opacity: 0,
        ease: ease,
        duration: duration,
        scrollTrigger: {
          trigger: secondImageRef.current,
          scrub: 1, // Smooth scroll effect
          start: "top 80%", // When the top of the image is 80% from the top of the viewport
          end: "bottom 80%" // When the bottom of the image is 80% from the top of the viewport
        }
      });
    }, secondImageRef);

    // Cleanup on unmount
    return () => ctx.revert();
  }, [scale, duration, ease]);

  return (
    <>
    <section className="aboutFounder">
  <img ref={firstImageRef} src="\assets\shop1.png" alt="Founder Photo" width="300px" />
  <div className="textContent">
    <h3>About the Founder</h3>
    <h5>Dhanapal Jewellers</h5>
    <p>
      Founded by Mr. Dhanapal, Dhanapal Jewellers is a cornerstone in the jewelry market of Dharmapuri, Tamil Nadu. Specializing in custom-designed jewelry and precious gemstones, the store has become a trusted name in the region. With a focus on quality craftsmanship and customer satisfaction, Mr. Dhanapal built a legacy of excellence that continues to this day.
    </p>
   
  </div>
</section>

<section className="aboutFounder">
  <div className="textContent">
    <h3>Our Legacy and Vision</h3>
    <h5>Dhanapal Jewellers</h5>
    <p>
      The store is known for its exclusive collection of 22KT gold jewelry, silver items, and wedding essentials. Customers can find personalized pieces that cater to every occasion, from engagements to milestone celebrations.
    </p>
  </div>
  <img ref={secondImageRef} src="\assets\shop.png" alt="Founder Photo" width="300px" />
</section>

    </>
  );
}

export default ZoomImage;
