import React, { useState } from 'react'
import { FaStar } from "react-icons/fa";
import { motion } from 'motion/react';
const Avis = () => {
  const [show, setshow] = useState(false)
  const [rating, setRating] = useState(0); // Holds the current rating (0 to 5)
  const handleRating = (value) => {
    setRating(value); // Update the rating when a star is clicked
  };
  return (
    <div
      className='border-t py-5 items-center border-t-[#0003] w-full flex justify-between mt-4'
    >
      <span
        className='font-bold capitalize'
      >
        avis des clients
      </span>
      <span
        onClick={() => setshow(true)}
        className='text-white cursor-pointer bg-black flex items-center px-3 py-1 rounded-xl uppercase'
      >ajoutez un avis
        <FaStar
          className='ml-2'
        />
      </span>
      {show && <div
        onClick={() => setshow(false)}
        className='fixed top-0 bg-[#000a] left-0 w-full h-full flex justify-center items-center'
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          onClick={(e) => e.stopPropagation()}  // Prevents the event from propagating to the parent div
          className='w-11/12 md:w-7/12 px-4 py-7 h-5/6 a overflow-y-scroll bg-white rounded-xl'
        >
          <h4
            className='font-bold capitalize mb-3'
          >ajoutez votre avis</h4>
          <div
            className='flex flex-wrap justify-center items-center'
          >
            <label
              htmlFor='Prénom'
              className='w-6/12 capitalize px-2'
            >
              <span>
                Prénom
              </span>
              <input
                name='Prénom'
                id='Prénom'
                placeholder='Prénom'
                className='w-11/12  my-2 mx-auto placeholder:capitalize px-2 py-1.5 border border-[#aaaa] rounded-lg'
              />
            </label>
            <label
              htmlFor='nom'
              className='w-6/12 capitalize px-2'
            >
              <span>
                nom
              </span>
              <input
                name='nom'
                id='nom'
                placeholder='nom'
                className='w-11/12  my-2 mx-auto placeholder:capitalize px-2 py-1.5 border border-[#aaaa] rounded-lg'
              />
            </label>
            <label
              htmlFor='email'
              className='w-full capitalize px-2'
            >
              <span>
                email
              </span>
              <input
                name='email'
                id='email'
                placeholder='email'
                className='w-11/12  my-2 mx-auto placeholder:capitalize px-2 py-1.5 border border-[#aaaa] rounded-lg'
              />
            </label>
            <div
              className='w-full my-4 px-3'
            >
              <span
                className='w-full'
              >Évaluation</span>
              <div className="flex items-center space-x-1">
                {/* Create 5 radio buttons with conditional star rendering */}
                {[1, 2, 3, 4, 5].map((value) => (
                  <div key={value}>
                    <input
                      type="radio"
                      id={`star-${value}`}
                      name="rating"
                      value={value}
                      checked={rating === value} // Check if the current rating matches the value
                      onChange={() => handleRating(value)} // Update rating on change
                      className="hidden" // Hide the radio button itself
                    />
                    <label
                      htmlFor={`star-${value}`}
                      className={`cursor-pointer ${rating >= value ? 'text-orange-400' : 'text-gray-300'}`}
                      style={{ fontSize: '2rem' }} // Size of the stars
                    >
                      ★
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <label
              htmlFor='Votre avis...'
              className='w-full capitalize px-2'
            >
              <span>
                Votre avis...
              </span>
              <textarea
                name='Votre avis...'
                id='Votre avis...'
                placeholder='Votre avis...'
                className='w-11/12  my-2 mx-auto placeholder:capitalize px-2 py-1.5 border border-[#aaaa] rounded-lg'
              />
            </label>
            <button
              onClick={() => setshow(false)}
              className='bg-black text-white font-bold ml-auto mr-5 uppercase mt-5  text-sm px-4 py-3 rounded-lg '
            >confirmer</button>
          </div>

        </motion.div>
      </div>}
    </div>
  )
}

export default Avis