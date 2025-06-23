import React from 'react';
import { assets, plans } from '../assets/assets';
import { AppContext } from '../context/AppContext';
import { motion } from 'framer-motion';

const BuyCredit = () => {
  const { user } = React.useContext(AppContext);

  return (
    <motion.div
      className="min-h-[100vh] pt-14 px-4 sm:px-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Header */}
      <motion.div
        className="text-center mb-10"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="border border-black-900 text-black-900 px-6 py-2 rounded-full mb-3 text-sm hover:bg-gray-100 transition"
        >
          Our Plans
        </motion.button>
        <h1 className="text-3xl sm:text-4xl font-semibold mb-2 text-black-900">
          Find the Right Plan for You
        </h1>
        <p className="text-gray-600 max-w-xl mx-auto">
          Choose a credit plan that fits your needs and unlock premium features instantly.
        </p>
      </motion.div>

      {/* Plans Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plans.map((item, index) => (
          <motion.div
            key={index}
            className={`relative bg-white shadow-md rounded-2xl p-6 text-left flex flex-col justify-between border ${
              item.id === 2 ? 'border-blue-900' : 'border-transparent'
            }`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 + index * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, boxShadow: '0px 10px 20px rgba(0,0,0,0.1)' }}
          >
            {/* Recommended tag */}
            {item.id === 2 && (
              <motion.span
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="absolute top-4 right-4 bg-purple-900 text-white text-xs px-2 py-1 rounded-full"
              >
                Recommended
              </motion.span>
            )}

            <div>
              <img
                src={assets.lock_icon}
                alt="lock icon"
                className="w-10 h-10 mb-4"
              />
              <p className="text-lg font-semibold text-gray-800 mb-2">Plan #{item.id}</p>
              <p className="text-gray-600 mb-4">{item.desc}</p>
              <p className="text-purple-500 text-3xl font-bold mb-2">
                ₹{item.price}
                <span className="text-base font-normal text-gray-500"> / {item.credits} credits</span>
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="mt-4 bg-purple-700 text-white py-2 px-4 rounded-lg hover:bg-indigo-800 transition"
            >
              {user ? 'Purchase' : 'Subscribe'}
            </motion.button>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default BuyCredit;
