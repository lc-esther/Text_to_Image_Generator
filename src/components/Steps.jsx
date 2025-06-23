import React from 'react'
import { stepsData } from '../assets/assets'
import { motion } from 'framer-motion'

const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
}

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
}

const Steps = () => {
  return (
    <motion.div
      className='px-4 sm:px-10 lg:px-20 my-16 text-center'
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariant}
    >
      <motion.h1
        className='text-3xl sm:text-4xl font-semibold mb-2'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        How it works
      </motion.h1>

      <motion.p
        className='text-lg text-gray-600 mb-10'
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        viewport={{ once: true }}
      >
        Transform words into stunning images
      </motion.p>

      <motion.div
        className='grid sm:grid-cols-2 lg:grid-cols-3 gap-8'
        variants={containerVariant}
      >
        {stepsData.map((item, index) => (
          <motion.div
            key={index}
            className='bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition'
            variants={cardVariant}
            transition={{ duration: 0.5 }}
          >
            <div className='flex items-center gap-4 mb-4'>
              <img src={item.icon} alt="step icon" className='w-10 h-10' />
              <h2 className='text-lg font-semibold'>{item.title}</h2>
            </div>
            <p className='text-sm text-gray-600'>{item.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  )
}

export default Steps
