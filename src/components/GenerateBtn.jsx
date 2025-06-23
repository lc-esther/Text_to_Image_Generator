import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { motion } from 'framer-motion'
import {useNavigate} from 'react-router-dom'
import {AppContext} from '../context/AppContext'

const GenerateBtn = () => {
  const {user, setShowLogin} = useContext(AppContext)
  const navigate = useNavigate()
  const onClickHandler = ()=>{
    if(user)
      navigate('/result')
    else
      setShowLogin(true)
  }
  return (

    <motion.div
      className='text-center'
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <motion.h1
        className='text-2xl md:text-3xl lg:text-4xl mt-4 font-semibold text-neutral-800 py-6 md:py-16'
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        See the magic. Try now
      </motion.h1>

      <motion.button
        onClick={onClickHandler}
        className='inline-flex items-center gap-2 px-12 py-3 rounded-full bg-black text-white mx-auto hover:scale-105 transition-transform duration-500'
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
      >
        Generate Images
        <img src={assets.star_group} alt="star icon" className='h-6' />
      </motion.button>
    </motion.div>
  )
}

export default GenerateBtn
