import React, { useEffect, useRef } from "react";

function WhyUs() {
    const sectionsRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate");
                    } else {
                        entry.target.classList.remove("animate"); // Re-trigger animation
                    }
                });
            },
            { threshold: 0.01 } // Trigger when 20% of the element is visible
        );

        sectionsRef.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => {
            sectionsRef.current.forEach((section) => observer.unobserve(section));
        };
    }, []);

    return (
        <>
            <style>
                {`
          /* Styling the entire section */
          .whyUs {
            padding: 50px 20px;
            font-family: "Arial, sans-serif";
            background: #1e1e2c;
            color: #ffffff;
          }

          .whyUs h3 {
            font-size: 2rem;
            margin-bottom: 20px;
            text-align: center;
            font-family: "Times New Roman", serif;
          }

          .whyUs p {
            text-align: center;
            font-size: 1.2rem;
            font-weight: bold;
            margin-bottom: 30px;
          }

          /* Container layout for the content */
          .whyusContent {
            display: flex;
            align-items: flex-start;
            justify-content: center;
            gap: 40px;
            flex-wrap: wrap; /* Ensure responsiveness */
          }
        /* Image styles */
          .middleImage {
           width: auto;
            height: 100%; /* Match the content height */
            max-height: 500px; /* Adjust as needed */
            border-radius: 15px;
            box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.5);
            object-fit: cover;
          }

          /* Description container */
          .whyUsDescription {
            width: 50%;
            max-width: 600px;
            display: grid;
            grid-template-columns: 1fr 1fr; /* Two columns for items */
            gap: 20px; /* Space between grid items */
          }

          .whyUsDescription div {
            padding: 20px;
            background: #28283a;
            border-radius: 10px;
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
            text-align: left;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
          }

          .whyUsDescription div.animate {
            opacity: 1;
            transform: translateY(0);
          }

          .whyUsDescription div img {
            width: 30px;
            height: 30px;
            margin-right: 10px;
            vertical-align: middle;
          }

          .whyUsDescription div h3 {
            display: inline-block;
            margin: 0;
            font-size: 1.5rem;
            color: #e0c097;
          }

          .whyUsDescription div p {
            margin-top: 10px;
            font-size: 0.9rem;
            color: #d1d1d1;
            line-height: 1.5;
          }

          /* Fade-in animation */
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(50px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
            </style>

            <section className="whyUs">
                <p ref={(el) => (sectionsRef.current[0] = el)} className="scroll-animation">
                    WHY CHOOSE US
                </p>
                <h3 ref={(el) => (sectionsRef.current[1] = el)} className="scroll-animation">
                    Why Choose Us
                </h3>
                <div className="whyusContent">
                    {/* Image */}
                    <img
                        ref={(el) => (sectionsRef.current[2] = el)}
                        className="middleImage scroll-animation"
                        src="/assets/model3.webp"
                        alt="Model"
                    />

                    {/* Content */}
                    <div className="whyUsDescription">
                        {[
                            {
                                img: "percent-solid.svg",
                                title: "Big Discount",
                                desc: "We provide higher discounts without compromising on quality or craftsmanship.",
                            },
                            {
                                img: "truck-fast-solid.svg",
                                title: "Free Delivery",
                                desc: "Sit back, relax, and let us take care of delivering your exquisite jewelry.",
                            },
                            {
                                img: "wallet-solid.svg",
                                title: "Secure Payments",
                                desc: "Your financial security is of utmost importance to us.",
                            },
                            {
                                img: "boxes-packing-solid.svg",
                                title: "Order Tracking",
                                desc: "Stay informed on the status of your purchase every step of the way.",
                            },
                        ].map((item, index) => (
                            <div
                                key={index}
                                ref={(el) => (sectionsRef.current[index + 3] = el)}
                                className="scroll-animation"
                            >
                                <img src={`/assets/whyUsIcons/${item.img}`} alt={item.title} />
                                <h3>{item.title}</h3>
                                <p>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default WhyUs;
