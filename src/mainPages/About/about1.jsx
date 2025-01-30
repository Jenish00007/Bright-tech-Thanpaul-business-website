import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ZoomImage = ({ scale = 4.5, duration = 1, ease = "power2.out" }) => {
  const firstImageRef = useRef();
  const secondImageRef = useRef();
  const firstTextRef = useRef();
  const secondTextRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // First section animations
      gsap.from(firstImageRef.current, {
        scale: 1 / scale,
        opacity: 0,
        ease: ease,
        duration: duration,
        scrollTrigger: {
          trigger: firstImageRef.current,
          scrub: 1,
          start: "top 80%",
          end: "bottom 80%"
        }
      });

      gsap.from(firstTextRef.current, {
        x: -100,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: firstTextRef.current,
          scrub: true,
          start: "top 80%",
          end: "top 30%"
        }
      });

      // Second section animations
      gsap.from(secondImageRef.current, {
        scale: 1 / scale,
        opacity: 0,
        ease: ease,
        duration: duration,
        scrollTrigger: {
          trigger: secondImageRef.current,
          scrub: 1,
          start: "top 80%",
          end: "bottom 80%"
        }
      });

      gsap.from(secondTextRef.current, {
        x: 100,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: secondTextRef.current,
          scrub: true,
          start: "top 80%",
          end: "top 30%"
        }
      });
    });

    return () => ctx.revert();
  }, [scale, duration, ease]);

  return (
    <>
      <section className="aboutFounder">
        <img ref={firstImageRef} src="\assets\shop1.png" alt="Founder Photo" width="300px" />
        <div className="textContent" ref={firstTextRef}>
          <h3>About the Founder</h3>
          <h5>Dhanapal Jewellers</h5>
          <p>
            Founded by Mr. Dhanapal, Dhanapal Jewellers is a cornerstone in the jewelry market of Dharmapuri, Tamil Nadu. Specializing in custom-designed jewelry and precious gemstones, the store has become a trusted name in the region. With a focus on quality craftsmanship and customer satisfaction, Mr. Dhanapal built a legacy of excellence that continues to this day.
          </p>
        </div>
      </section>

      <section className="aboutFounder">
        <div className="textContent" ref={secondTextRef}>
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