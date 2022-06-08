import React from 'react'
import firstPhoto from '../../../assets/home/carousel/firstPhoto.png'
import secondPhoto from '../../../assets/home/carousel/secondPhoto.png'
import thirdPhoto from '../../../assets/home/carousel/thirdPhoto.png'
import fourthPhoto from '../../../assets/home/carousel/fourthPhoto.png'
function Carousel() {
  return (
    <>
        <div id="carouselExampleCaptions" className="carousel-fade carousel pt-16 slide relative" data-bs-ride="carousel">
          <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active hidden"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
            className='hidden'
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              className='hidden'
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              className='hidden'
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner relative w-full overflow-hidden">
            <div className="carousel-item active relative float-left w-full">
              <img
                src={firstPhoto}
                className="block w-full"
                alt="..."
              />
              <div className="carousel-caption hidden md:block absolute text-center">
                
              </div>
            </div>
            <div className="carousel-item relative float-left w-full">
              <img
                src={secondPhoto}
                className="block w-full"
                alt="..."
              />
              <div className="carousel-caption hidden md:block absolute text-center">
              </div>
            </div>
            <div className="carousel-item relative float-left w-full">
              <img
                src={thirdPhoto}
                className="block w-full"
                alt="..."
              />
              <div className="carousel-caption hidden md:block absolute text-center">
              </div>
            </div>
            <div className="carousel-item relative float-left w-full">
              <img
                src={fourthPhoto}
                className="block w-full"
                alt="..."
              />
              <div className="carousel-caption hidden md:block absolute text-center">
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    
    </>
  )
}

export default Carousel