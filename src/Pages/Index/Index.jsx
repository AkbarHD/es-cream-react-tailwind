import React from 'react'
import Nav from '../../components/Nav/Nav'
import heroImage from './../../assets/rev_home3_01.png'
import element01 from './../../assets/h5_decor4.png'
import element02 from './../../assets/rev_home3_04.png'
import element03 from './../../assets/rev_home3_05.png'
import element04 from './../../assets/rev_home3_06.png'

import slideImage01 from './../../assets/h3_cat-4.jpg'
import slideImage02 from './../../assets/h3_cat-1.jpg'
import slideImage03 from './../../assets/h3_cat-2.jpg'
import slideImage04 from './../../assets/h3_cat-3.jpg'
import slideImage05 from './../../assets/h3_cat-7.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import { Autoplay } from 'swiper/modules'

const index = () => {
  return (
    <>
      <div className="flex flex-col gap-[20px] relative min-h-[100vh] bg-[#ffded1]">
        <Nav />

        {/* hero section */}
        <div className="w-full px-[12%] pt-[100px] flex gap-[20px] flex-col lg:flex-row">
          {/* tulisan */}
          <div className="flex flex-col lg:w-[50%] w-full items-start gap-4 justify-center">
            <small className="text-4xl title font-dancing">Best Seller</small>
            <h2 className="text-7xl 2xl:text-8xl font-medium text-red-600 font-kalnia">
              Ice Cream <br /> Novelties
            </h2>
            <p className="text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga
              quaerat voluptatibus dolore hic ipsam, unde ipsum autem. Impedit,
              praesentium officiis.
            </p>
            <button className="btn header-btn">
              Shop Now <i className="ri-arrow-right-line"></i>{' '}
            </button>
          </div>

          {/* gambar */}
          <div className="lg:w-[50%] full flex items-center justify-center z-[1] relative md:absolute right-0 bottom-0">
            <img
              src={heroImage}
              alt="hero-image"
              className="w-full sm:w-[400px] 2xl:w-[600px] "
            />
          </div>

          {/* hiasan */}
          <img
            src={element01}
            alt="element1"
            className="w-[80px] h-[80px] absolute -top-[-80%] left-5"
          />
          <img
            src={element02}
            alt="element2"
            className="w-[80px] h-[80px] absolute -top-[-20%] lg:left-[90%] left-[65%] hidden sm:flex"
          />
          <img
            src={element03}
            alt="element3"
            className="w-[90px] h-[90px] absolute -top-[-10%] left-5"
          />
          <img
            src={element04}
            alt="element4"
            className="w-[90px] h-[90px] absolute -top-[-85%] sm:-top-[85%] lg:left-[-80%] left-[-75%] "
          />
        </div>
      </div>

      {/* category section */}
      <section id="category">
        <h3 className="section_heading">Shop By Category</h3>

        <Swiper
          className="w-full mt-[80px]"
          slidesPerView={5}
          spaceBetween={10}
          breakpoints={{
            0: {
              slidesPerView: 1.5,
            },
            768: {
              slidesPerView: 2.5,
            },
            1024: {
              slidesPerView: 4.5,
            },
          }}
          autoplay={{
            delay: 2500,
          }}
          modules={[Autoplay]}
          loop={true}
        >
          <SwiperSlide>
            <div className="w-[180px] card group">
              <img
                src={slideImage01}
                alt="slider-image"
                className="w-full rounded-full mb-4"
              />

              <span className="Slide_text">Ice Cream Bar</span>
              <span className="text-center w-full text-base hidden group-hover:inline-block">
                2 Products
              </span>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[180px] card group">
              <img
                src={slideImage02}
                alt="slider-image"
                className="w-full rounded-full mb-4"
              />

              <span className="Slide_text">Ice Cream Bar</span>
              <span className="text-center w-full text-base hidden group-hover:inline-block">
                2 Products
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[180px] card group">
              <img
                src={slideImage03}
                alt="slider-image"
                className="w-full rounded-full mb-4"
              />

              <span className="Slide_text">Ice Cream Bar</span>
              <span className="text-center w-full text-base hidden group-hover:inline-block">
                2 Products
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[180px] card group">
              <img
                src={slideImage04}
                alt="slider-image"
                className="w-full rounded-full mb-4"
              />

              <span className="Slide_text">Ice Cream Bar</span>
              <span className="text-center w-full text-base hidden group-hover:inline-block">
                2 Products
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[180px] card group">
              <img
                src={slideImage05}
                alt="slider-image"
                className="w-full rounded-full mb-4"
              />

              <span className="Slide_text">Ice Cream Bar</span>
              <span className="text-center w-full text-base hidden group-hover:inline-block">
                2 Products
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="w-[180px] card group">
              <img
                src={slideImage01}
                alt="slider-image"
                className="w-full rounded-full mb-4"
              />

              <span className="Slide_text">Ice Cream Bar</span>
              <span className="text-center w-full text-base hidden group-hover:inline-block">
                2 Products
              </span>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      {/*  */}
      <section>
        <div className="flex gap-[10px] flex-wrap lg:flex-nowrap">
          <div className="w-full sm:w-[46%] lg:w-[33%] h-[550px] bg-[url(assets/h3_bn-2.jpg)] bg-cover p-6 flex flex-col items-center pt-15 gap-2 text-white">
            <small className='text-2xl'>Save 20% off</small>
            <h3>Summer 2025</h3>
            <p className='text-center'>Smooth & Refreshing, intensely, Flavoful, 100% Dairy Free</p>
            <button className='btn headerbtn'>
              Shop Now <i className="ri-arrow-right-line"></i>{' '}
            </button>
          </div>
          <div className="w-full sm:w-[46%] lg:w-[33%] h-[550px] bg-[url(assets/h3_bn-1.jpg)] bg-cover p-6 flex flex-col items-center pt-15 gap-2 text-white">
            <small className='text-2xl'>Save 20% off</small>
            <h3>Summer 2025</h3>
            <p className='text-center'>Smooth & Refreshing, intensely, Flavoful, 100% Dairy Free</p>
            <button className='btn headerbtn'>
              Shop Now <i className="ri-arrow-right-line"></i>{' '}
            </button>
          </div>
          <div className="w-full lg:w-[33%] h-[550px] flex flex-col gap-10">
            <div className="h-[250px] w-full bg-[url(assets/h3_bn-4.jpg)] bg-cover p-6 flex flex-col pt-4 gap-2 text-white">
              <h3 className='text-3xl'>Best Selling</h3>
              <p className='pt-20'>
                The 1# Best <br /> Selling Gelato
              </p>
            </div>
            <div className="h-[250px] w-full bg-[url(assets/h3_bn-3.jpg)] bg-cover p-6 flex flex-col pt-4 gap-2 text-white">
              <h3 className='text-3xl'>Best Selling</h3>
              <p className='pt-20'>
                Smooth & Creamy <br /> texture , low in calorie
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default index
