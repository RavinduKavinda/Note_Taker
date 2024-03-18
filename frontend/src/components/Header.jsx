import React from 'react'
import logo from './../assets/logo.png'

const Header = () => {
  return (
    <header className="text-white bg-gray-500 body-font font-semibold">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
            {/* logo */}
            <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <img src={logo} className=' w-[35px] h-[35px]' alt="" />
                <span className="ml-3 text-3xl font-extrabold">Note Taker</span>
            </div>
            {/* nav bar */}
            <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <a className="mx-5 cursor-default hover:font-extrabold">First Link</a>
                <a className="mx-5 cursor-default hover:font-extrabold">First Link</a>
            </nav>
        
        </div>
    </header>

  )
}

export default Header
