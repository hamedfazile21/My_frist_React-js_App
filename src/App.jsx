import React from 'react'
import Style from './Style'
import Navbar from './Navbar'
import Header from './Header'
import Search from './Search'
import NavbarRight from './NavbarRight'
import MainContent from './MainContent'

const App = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center w-full overflow-hidden'>
        <div className='flex flex-row items-center justify-between w-[90%] mt-2'>
          <Navbar />
        </div>
        <div className='flex flex-col items-center justify-center w-screen'>
          <Header />
        </div> 
        <div className='flex flex-col items-center justify-center w-screen'>
          <Search />
        </div>
      </div>
      <div className='flex flex-row items-center justify-center w-full'>
        <div className='flex flex-row items-start justify-start w-[90%] mt-36 gap-x-5'>
          <div className='w-[25%]  flex-row lg:flex-col hidden lg:flex'>
            <NavbarRight />
          </div>
          <div className='w-full lg:w-[75%] overflow-scroll h-[185vh] '>
            <MainContent />
          </div>
        </div>
      </div>
    </>
  )
}

export default App