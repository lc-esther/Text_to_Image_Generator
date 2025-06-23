import React from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'

const Description = () => {
  return (
    <motion.div 
      className='flex flex-col items-center justify-center my-24 p-6 md:px-28'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h1 
        className='text-3xl sm:text-4xl font-semibold mb-2'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Imagine. Describe. Watch It Come Alive.
      </motion.h1>

      <motion.p 
        className='text-gray-500 mb-8'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Turn your imagination into visuals
      </motion.p>

      <div className='flex flex-col gap-5 md:gap-14 md:flex-row'>
        {/* Image section */}
        <motion.img
          src={assets.sample_img_2}
          className='w-80 xl:w-96 rounded-lg'
          alt='Sample AI generated'
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        />
        
        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className='text-2xl font-semibold mb-2'>
            Introducing the AI-Powered Text-to-Image Generator
          </h2>
          <p className='text-gray-600 mb-4'>
            Bring your imagination to life with just a few words. Whether you're crafting stunning visuals or dreaming up unique concepts, our free AI tool transforms your text prompts into eye-catching images — instantly.
          </p>
          <p className='text-gray-600'>
            Just describe what you envision, and let our cutting-edge AI generate high-quality visuals in seconds. From product designs to fantasy characters, even ideas that don't exist — visualize it all with ease. Creativity has no limits.
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Description
