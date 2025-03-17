import React from 'react';
import IntroSection from './IntroSection';
import Description from "./Description"

export default function HomePage() {
  return (
    <div className='min-h-fit h-screen text-white flex flex-col items-center justify-start bg-black pb-4'>
        <section className="text-center mt-24">
          <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold mt-2 sm:mt-10 lg:mt-20 mb-2'>Connect Communities</h1>
        <p className="text-2xl font-[300] text-gray-400">Connecting People Across Faiths & Interests</p>
        <IntroSection />
        <Description />
        <p className="mt-8 text-gray-300">Join events that foster unity, community, and support.</p>
      </section>
    </div>
  )
}
