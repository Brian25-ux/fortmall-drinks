import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { Carousel } from 'bootstrap'

const Mycarousel = () => {

  useEffect(() => {
    const element = document.querySelector('#carouselExample')
    if (element) {
      new Carousel(element, {
        interval: 3000,
        ride: 'carousel',
        pause: false
      })
    }
  }, [])

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-10 mx-auto">

          <div id="carouselExample" className="carousel slide">

            {/* Indicators */}
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></button>
              <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
              <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
            </div>

            {/* Slides */}
            <div className="carousel-inner">

              <div className="carousel-item active">
                <img
                  src="/images/slide1.jpg"
                  className="d-block w-100"
                  alt="First slide"
                  height="550px"
                />
                <div className="carousel-caption d-none d-md-block bg-dark opacity-50"></div>
              </div>

              <div className="carousel-item">
                <img
                  src="/images/slide2.jpg"
                  className="d-block w-100"
                  alt="Second slide"
                  height="550px"
                />
                <div className="carousel-caption d-none d-md-block bg-dark opacity-50"></div>
              </div>

              <div className="carousel-item">
                <img
                  src="/images/slide3.jpg"
                  className="d-block w-100"
                  alt="Third slide"
                  height="550px"
                />
                <div className="carousel-caption d-none d-md-block bg-dark opacity-50"></div>
              </div>

            </div>

            {/* Controls */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon"></span>
            </button>

            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon"></span>
            </button>

          </div>

        </div>
      </div>
    </div>
  )
}

export default Mycarousel
