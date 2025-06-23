import React from 'react';
import { assets } from '../assets/assets';
import { motion } from 'framer-motion';
import { AppContext } from '../context/AppContext';

const Result = () => {
  const [image, setImage] = React.useState(assets.sample_img_3);
  const [isImageLoaded, setIsImageLoaded] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [progress, setProgress] = React.useState(0);
  const [input, setInput] = React.useState('');
  const { generateImage } = React.useContext(AppContext);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    setProgress(0);


    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 5) + 1;
      if (current < 95) {
        setProgress(current);
      } else {
        clearInterval(interval);
      }
    }, 120);

    try {
      const generatedImage = await generateImage(input);
      clearInterval(interval);
      setProgress(100);
      setTimeout(() => setProgress(0), 500); 

      if (generatedImage) {
        setImage(generatedImage);
        setIsImageLoaded(true);
      } else {
        setImage(assets.sample_img_7);
      }
    } catch (error) {
      clearInterval(interval);
      setImage(assets.sample_img_7);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.form
      onSubmit={onSubmitHandler}
      className='flex flex-col items-center gap-10 my-10'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Image with loading bar */}
      <motion.div
        className='relative'
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.img
          src={image}
          alt="Generated sample"
          className='w-80 sm:w-96 h-[250px] rounded-xl shadow-md object-cover'
        />
        {/* Only show loading bar while loading */}
        {loading && (
          <motion.div
            className="absolute bottom-0 left-0 h-1 bg-blue-500 rounded-full"
            animate={{ width: `${progress}%` }}
            initial={{ width: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          />
        )}
      </motion.div>

      {/* Loading text */}
      {loading && (
        <motion.div
          className='w-80 sm:w-96 -mt-6 text-center text-sm text-gray-600'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          Generating image...
        </motion.div>
      )}

      {/* Input form */}
      {!isImageLoaded && (
        <motion.div
          className='flex w-full max-w-xl items-center bg-white text-black rounded-full px-2 py-1 shadow-md'
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <input
            onChange={(e) => setInput(e.target.value)}
            value={input}
            type="text"
            placeholder='Enter your idea to make it real....'
            className='flex-1 bg-transparent text-black placeholder-gray-400 px-4 py-2 outline-none text-sm'
          />
          <motion.button
            type='submit'
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className='bg-black text-white px-6 sm:px-10 py-2 sm:py-3 rounded-full text-sm transition-transform duration-300'
            disabled={loading || !input.trim()}
          >
            {loading ? 'Generating...' : 'Generate'}
          </motion.button>
        </motion.div>
      )}

      {/* Action buttons after image generated */}
      {isImageLoaded && (
        <motion.div
          className='flex gap-2 flex-wrap justify-center text-white text-sm p-0.5 mt-10 rounded-full'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.p
            onClick={() => setIsImageLoaded(false)}
            className='bg-transparent border border-zinc-900 text-black px-8 py-3 rounded-full cursor-pointer'
            whileHover={{ scale: 1.05 }}
          >
            Create More
          </motion.p>
          <motion.a
            href={image}
            download
            className='bg-zinc-900 px-10 py-3 rounded-full cursor-pointer'
            whileHover={{ scale: 1.05 }}
          >
            Download
          </motion.a>
        </motion.div>
      )}
    </motion.form>
  );
};

export default Result;
