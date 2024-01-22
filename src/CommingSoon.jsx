import React from 'react'
import banner from './assets/banner.jpg'
const CommingSoon = () => {
  return (
<div>
  <section className="h-screen w-full bg-gray-800 p-12 flex flex-col items-center justify-center text-center">
    <div className="mx-auto px-6 lg:px-8 flex flex-col items-center justify-center">
      <h2 className="text-2xl lg:text-5xl text-white font-bold mb-4 lg:mb-8">
        <span className="text-purple-400">ISLE</span> Website is Coming Soon
      </h2>
      <p className="text-gray-400 text-[10px] lg:text-xl leading-relaxed mb-8">
        Stay tuned for updates and get ready for an extraordinary experience!
      </p>

      <div className="flex-grow mb-36">
        <img
          src={banner}
          alt="img"
          className="lg:w-[700px] lg:h-[350px] w-[250px] sm:h-[200px]"
        />
      </div>
    </div>
  </section>
</div>
  )
}

export default CommingSoon
