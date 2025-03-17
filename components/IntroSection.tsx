import React from 'react'

export default function IntroSection() {
  return (
    <section className='min-w-[96vw] min-h-[60vh] w-full px-[10vw] block lg:px-[16vw] xl:flex'>
          <div className=' w-full flex items-center flex-col xl:w-1/2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-[5vh] lg:mt-[12vh]'>
            <h2 className='flex items-center mb-4'><span className='mr-6'>Unite , Innovate </span><img src="event1.jpeg" alt="Photo1" className='w-20 lg:w-24 rounded-full' /></h2>
            <h2 className='flex items-center'><img src="rayul.jpg" alt="Photo2" className='h-20 rounded-full' /><span className='ml-6 '> Connect , Inspires</span></h2>
            <h2 className='flex items-center mb-4'><span className='mr-6'>Together </span>
            <div className='flex bg-blue-200 rounded-full mt-6 pl-[1px]'>
              <img src="joseph.jpg" alt="Photo3" className='h-12 w-12 rounded-full border' />
              <img src="rafaella.jpg" alt="Photo4" className='h-12 w-12 rounded-full relative right-4 border' />
              <img src="rayul.jpg" alt="Photo5" className='h-12 w-12 rounded-full relative right-8 border' />
              <span className='flex items-center min-w-fit text-black font-semibold relative right-6 text-lg'>+10 People</span>
              </div></h2>
          </div>
          <div className='w-full xl:w-1/2 lg:mt-0 flex justify-center lg:justify-normal gap-6'>
          <img src="rafaella.jpg" alt="Event1" className='rounded-full h-36 sm:h-60 md:h-72 lg:h-80 xl:h-72 mt-10 md:mt-20 xl:mt-28' />
          <img src="rafaella.jpg" alt="Event1" className='rounded-full h-36 sm:h-60 md:h-72 lg:h-80 xl:h-72 mt-10 md:mt-20 xl:mt-16' />
          <img src="rafaella.jpg" alt="Event1" className='rounded-full h-36 sm:h-60 md:h-72 lg:h-80 xl:h-72 mt-10 md:mt-20 xl:mt-2' />
          </div>
        </section>
  )
}
