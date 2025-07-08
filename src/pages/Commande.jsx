import React from 'react'
import { FaSearch } from "react-icons/fa";

const Commande = () => {
    return (
        <div
            className='w-full px-5 mb-20'
        >
            <h1
                className='my-3  font-bold capitalize  text-2xl md:text-3xl'
            >État de votre commande
            </h1>
            <p
                className='text-[#000c] md:text-xl'
            >Saisissez votre numéro de commande ci-dessous pour vérifier son état.</p>
            <form
                className='w-full my-4 flex flex-col justify-center items-center'
            >
                <input
                    type='text'
                    className='bg-[#f3f4f6] shadow-sm w-[95%] border border-[#0007] placeholder:text-xl  my-2 rounded-2xl py-4 focus:outline-none px-5 mx-auto'
                    placeholder="Entrez votre numéro de commande"
                />
                <button
                    className='my-2 flex items-center px-5 py-2.5 capitalize rounded-xl font-bold text-white bg-black shadow-xl'
                >
                    <FaSearch
                        className='mr-2'
                    />
                    recherchez</button>
            </form>
        </div>
    )
}

export default Commande