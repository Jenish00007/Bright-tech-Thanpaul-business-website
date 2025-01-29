import React, { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ZoomImage = ({scale = 4.5, duration = 1, ease = "power2.out" }) => {
    const imageRef = useRef()

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            gsap.from(imageRef.current, {
                scale: 1 / scale,
                opacity: 0,
                ease: ease,
                duration: duration,
                scrollTrigger: {
                    trigger: imageRef.current,
                    scrub: 1,
                    start: "top 80%",
                    end: "bottom 80%"
                }
            })
        }, imageRef)

        return () => ctx.revert();
    })

    return (
        <div>


            <section className="aboutFounder">

                <div className="textContent">

                    <h3>About the Founder</h3>
                    <h5>Dhanapal Jewellers</h5>

                    <p>
                        NK Dhanapal Jewellers is a jewelry store located at 10-L, Duraisamy Naidu Street, Dharmapuri, Tamil Nadu 636701, India.
                        For a broader selection of jewelry options in Dharmapuri, other notable jewelers include Sahana Jewellers, Malabar Gold and Diamond Jewellers, STS Jewellery, Tanishq, and Sivaraj.
                    </p>
                </div>

                <img
                    ref={imageRef}
                    src="\assets\shop.png" width="300px"
                    alt=""
                />
            </section>

        </div>
    );
};

export default ZoomImage;