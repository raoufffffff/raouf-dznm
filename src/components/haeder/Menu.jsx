import React, { useState } from 'react'
import { HiOutlineBars3BottomLeft } from 'react-icons/hi2'
import { AnimatePresence, motion } from 'motion/react'
import Search from './Search'
import Links from './Links'
import { IoMdClose } from "react-icons/io";
import Logo from '../logo/Logo'

const Menu = () => {
    const [show, setshow] = useState(false)
    const hide = () => setshow(false)
    return (
        <>
            <button
                onClick={() => setshow(true)}
                className='p-1 hover:bg-[#aaa7] rounded-xl mr-4'
            >
                <HiOutlineBars3BottomLeft
                    size={25}
                />
            </button>
            <AnimatePresence>
                {show && <>

                    <div
                        onClick={hide}
                        className='fixed top-0 z-50 left-0 w-full items-end sm:justify-center sm:items-center md:justify-start flex h-full bg-[#7777]'
                    >
                        <motion.nav
                            initial={{ y: 1000 }}
                            animate={{ y: 0 }}
                            exit={{ y: 1000 }}
                            transition={{ duration: 0.5, type: 'spring' }}
                            className='z-[200] h-[75%] flex px-5 a relative flex-col items-center overflow-hidden overflow-y-scroll w-full sm:rounded-2xl md:h-full rounded-t-3xl  md:rounded-none  sm:w-[500px] md:w-[400px] bg-white'
                            onClick={(e) => e.stopPropagation()}  // Prevents the event from propagating to the parent div
                        >
                            <span
                                onClick={hide}
                                className='md:hidden absolute top-5 left-5'
                            >
                                <IoMdClose size={30} />
                            </span>
                            <Logo />
                            <Search show hide={hide} />
                            <Links hide={hide} />
                        </motion.nav>
                    </div>

                </>
                }
            </AnimatePresence>
        </>
    )
}

export default Menu