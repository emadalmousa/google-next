import React from 'react'
import HomeHeader from './HomeHeader'
import Image from 'next/image'
import HomeSearch from './HomeSearch'

const Inhalt = () => {
  return (
    <div className=''>
      <HomeHeader />
      <div className='flex  flex-col items-center mt-24'>
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png"
          alt="Google Logo"
          width={300}
          height={100}
          priority
          style={{ width: "auto" }}
        />
        <HomeSearch />
      </div>
    </div>
  )
}

export default Inhalt