import React from 'react'

function Trends() {
  return (
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
      <img className="bigImage" src='\assets\model2.webp' width="400px" />
      <img className="smallImage" src='\assets\hands.webp' alt="" height="200px" />
    </div>
  </section>
  )
}

export default Trends