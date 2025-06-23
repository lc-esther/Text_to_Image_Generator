import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between gap-4 py-6 px-6 mt-20 border-t'>
      <img src={assets.logo} alt="Logo" width={150} />

      <p className='text-gray-700 text-sm text-center'>
        © {new Date().getFullYear()} Esther_lc. All rights reserved.
      </p>

      <div className='flex gap-3'>
        <img src={assets.facebook_icon} alt="Facebook" width={30} />
        <img src={assets.twitter_icon} alt="Twitter" width={30} />
        <img src={assets.instagram_icon} alt="Instagram" width={30} />
      </div>
    </div>
  )
}

export default Footer
