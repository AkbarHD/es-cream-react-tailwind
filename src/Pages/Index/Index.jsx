import React from 'react'
import Nav from '../../components/Nav/Nav'
import heroImage from './../../assets/rev_home3_01.png'
import element01 from './../../assets/h5_decor4.png'
import element02 from './../../assets/rev_home3_04.png'

const index = () => {
  return (
    <div className='flex flex-col gap-[20px] relative min-h-[90vh] bg-[#ffded1]'>
        <Nav/>

        <div className='w-full px-[12%] pt-[100px] flex gap-[20px flex-col lg:flex-row'>
          <div className='flex flex-col w-[50%] items-start gap-4 justify-center'>
            <small className='text-4xl title font-dancing'>Best Seller</small>
            <h2 className='text-7xl 2xl:text-8xl font-medium text-red-600 font-kalnia'>Ice Cream <br /> Novelties</h2>
            <p className='text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga quaerat voluptatibus dolore hic ipsam, unde ipsum autem. Impedit, praesentium officiis.</p>
            <button className='btn header-btn'>Shop Now <i className='ri-arrow-right-line'></i> </button>
          </div>
          <div className='w-[50%] flex items-center justify-center z-[1] relative md:absolute right-0 bottom-0'>
            <img src={heroImage} alt="hero-image" className='w-full sm:w-[400px] 2xl:w-[600px] '/>
          </div>

          <img src={element01} alt="element1" className='w-[80px] h-[80px] absolute -top-[-80%] left-5'/>
          <img src={element02} alt="element1" className='w-[80px] h-[80px] absolute -top-[-20%] lg:left-[90%] left-[65%] hidden sm:flex'/>
        </div>
    </div>
  )
}

export default index
