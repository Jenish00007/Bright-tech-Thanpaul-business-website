import React from 'react';
import './slider.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';




function Slider() {
    return (
        <div className="slider-container">
        <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="2700">
            {/* Indicators */}
            <ol className="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
            </ol>
    
            {/* Carousel Items */}
            <div className="carousel-inner">
                {/* Slide 1 */}
                <div className="carousel-item active">
                    <div className="row slide-part align-items-center">
                        {/* Text Section */}
                        <div className="col-md-6 col-12 text-center text-md-left">
                            <div className="slide-des">
                                <h2 className="text-white scale-up">Dhanapal Jewellers</h2>
                                <h3 className="text-white bounce-in">SHOP</h3>
                            </div>
                        </div>
                        {/* Image Section */}
                        <div className="col-md-6 col-12 text-center">
                            <img src="/assets/girl2.png" className="slide-image img-fluid w-100" alt="Jewellery" />
                        </div>
                    </div>
                </div>
    
                {/* Slide 2 */}
                <div className="carousel-item">
                    <div className="row slide-part align-items-center">
                        {/* Text Section */}
                        <div className="col-md-6 col-12 text-center text-md-left">
                            <div className="slide-des">
                                <h2 className="text-white scale-up">Dhanapal Jewellers</h2>
                                <h3 className="text-white bounce-in">SHOP</h3>
                            </div>
                        </div>
                        {/* Image Section */}
                        <div className="col-md-6 col-12 text-center">
                            <img src="/assets/girl.png" className="slide-image img-fluid w-100" alt="Jewellery" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    
    )
}

export default Slider;
