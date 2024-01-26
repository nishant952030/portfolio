import React from 'react'

const SideNavbar = () => {
    const navItems = ['Home', 'About', 'Contact', 'Work'];
  return (
      <div className='h-full absolute top-8 right-0 w-48  bg-gradient-to-l from-[#092635] to-transparent p-4 z-20'>
          {navItems.map((item) => (
              <div key={item} className='text-[#9EC8B9] h-8 flex justify-center align-middle hover:cursor-pointer hover:bg-[#133c50] rounded-lg font-bold'>{item}</div>
          ))}
    </div>
  )
}

export default SideNavbar
