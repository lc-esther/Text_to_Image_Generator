import React from 'react'
import { testimonialsData } from '../assets/assets'
import { motion } from 'framer-motion'

const Testimonials = () => {
  return (
    <motion.div
      className='flex flex-col items-center justify-center my-20 py-12 md:px-28'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h1
        className='text-3xl sm:text-4xl font-semibold mb-2'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        What People Are Saying
      </motion.h1>

      <motion.p
        className='text-gray-500 mb-8 text-center'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        Hear from our happy users who brought their ideas to life with AI.
      </motion.p>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full'>
        {testimonialsData.map((testimonial, index) => (
          <motion.div
            key={index}
            className='bg-white shadow-lg rounded-lg p-6 w-full'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className='w-16 h-16 rounded-full mb-4'
            />
            <h3 className='text-lg font-semibold mb-1'>{testimonial.name}</h3>
            <p className='text-sm text-gray-600 mb-2'>{testimonial.role}</p>
            <div className='mb-3'>
              {Array(testimonial.stars)
                .fill()
                .map((_, starIndex) => (
                  <span key={starIndex} className='text-yellow-500'>★</span>
                ))}
            </div>
            <p className='text-sm text-gray-700 mb-2'>{testimonial.feedback}</p>
            <p className='text-sm text-gray-600'>{testimonial.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Testimonials
