import React from 'react';
import './slider.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




function Slider() {
    return (
        <div className="slider-container">
        <div
            id="myCarousel"
            className="carousel slide"
            data-ride="carousel"
            data-interval="2700" // Controls auto-slide interval (3000ms = 3 seconds)
        >
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
            </ol>
            <div className="carousel-inner row">
                <div className="carousel-item active">
                    <div className="row slide-part">
                        <div className="col-md-6 col-sm-12">
                            <div className="slide-des">
                                <h2 className="text-white scale-up">Dhanapal Jewellers</h2>
                                <h3 className="text-white bounce-in">SHOP</h3>
                                {/* <h2 className="text-white scale-up">{" "} <ReactTyped strings={["Dhanapal Jewellers"]} typeSpeed={100} loop /></h2> */}
                                {/* <h3 className="text-white bounce-in">{" "} <ReactTyped strings={["SHOP"]} typeSpeed={400} loop /></h3> */}
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="/assets/girl2.png" className="slide-image" alt="" />
                        </div>
                    </div>
                </div>
                <div className="carousel-item">
                    <div className="row slide-part">
                        <div className="col-md-6 col-sm-12">
                            <div className="slide-des">
                                <h2 className="text-white scale-up">Dhanapal Jewellers</h2>
                                <h3 className="text-white bounce-in">SHOP</h3>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <img src="/assets/girl.png" className="slide-image" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    )
}

export default Slider;
