import React from 'react'

const Nav = () => {
  return (
    <>
      <div className="h-[80px] flex justify-between items-center px-[12%] py-[0] relative">
        <div className="flex items-center justify-center">
          <span className="text-2xl text-red-600 font-medium cursor-pointer">
            Mixue
          </span>
        </div>

        <div className="">
          <ul className="w-full flex gap-[15px] justify-center">
            <li className="border-b">
              <a
                href="javascript:void(0)"
                className="text-base hover:text-red-600 font-medium"
              >
                Home
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="Nav-link">
                Category
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="Nav-link">
                Popular
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="Nav-link">
                Shop
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="Nav-link">
                Testimonials
              </a>
            </li>
            <li>
              <a href="javascript:void(0)" className="Nav-link">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div className='flex gap-[20px] items-center justify-center'>
          <button className="btn">
            Show Now <i className="ri-arrow-right-line"></i>
          </button>
          <i className="ri-menu-3-line"></i>
        </div>
      </div>
    </>
  )
}

export default Nav
