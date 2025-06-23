import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import {useNavigate} from 'react-router-dom'
import {AppContext} from '../context/AppContext'

const Header = () => {
  const sampleImages = [
    assets.sample_img_1,
    assets.sample_img_2,
    assets.sample_img_3,
    assets.sample_img_4,
    assets.sample_img_5,
    assets.sample_img_6
  ];
  const {user, setShowLogin} = useContext(AppContext)
  const navigate = useNavigate()
    const onClickHandler = ()=>{
      console.log('user:', user); 
      if(user)
        navigate('/result')
      else
        setShowLogin(true)
    }

  return (
    <motion.div
      className='flex flex-col items-center justify-center my-12 px-4'
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      {/* Badge */}
      <motion.div
        className='flex items-center bg-white px-4 py-1.5 rounded-full border border-gray-300 shadow-sm'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        viewport={{ once: true }}
      >
        <p className='text-xs sm:text-sm text-gray-700 font-medium tracking-wide'>
          Best text to image generator
        </p>
        <img src={assets.star_icon} alt="star" className='w-4 h-4 sm:w-5 sm:h-5 ml-2' />
      </motion.div>

      {/* Heading */}
      <motion.h1
        className='text-4xl sm:text-4xl mt-4 sm:mt-6 text-center font-bold tracking-tight leading-snug text-zinc-800 max-w-[90%] sm:max-w-xl'
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        viewport={{ once: true }}
      >
        Turn text to image in seconds with{' '}
        <motion.span
          className='text-purple-600'
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          viewport={{ once: true }}
        >
          Texelate
        </motion.span>
      </motion.h1>

      {/* Description */}
      <motion.p
        className='mt-3 text-sm sm:text-base text-center text-gray-600 max-w-md leading-relaxed'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
        viewport={{ once: true }}
      >
        Convert your ideas into beautiful visuals using AI.
        <br />
        Just type a prompt and watch Texelate generate images instantly.
      </motion.p>

      {/* Button */}
      <motion.button
      onClick={onClickHandler}
        className='sm:text-lg text-white bg-black w-auto mt-8 px-12 py-2.5 flex items-center gap-2 rounded-full hover:scale-105 transition-all duration-300'
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.5 }}
        viewport={{ once: true }}
      >
        Generate Image
        <img className="h-6" src={assets.star_group} alt="star group" />
      </motion.button>

      {/* Image Gallery */}
      <motion.div
        className='flex flex-wrap justify-center gap-4 mt-8'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.15
            }
          }
        }}
      >
        {sampleImages.map((img, index) => (
          <motion.img
            key={index}
            src={img}
            alt={`sample ${index + 1}`}
            className='rounded hover:scale-105 transition-all duration-300 cursor-pointer w-24 sm:w-32'
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 }
            }}
            transition={{ duration: 0.5 }}
          />
        ))}
      </motion.div>

      {/* Label under images */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.4 }}
        viewport={{ once: true }}
      >
        <p className='mt-2 text-neutral-600'>
          Generated images from Texelate
        </p>
      </motion.div>
    </motion.div>
  );
};

export default Header;
