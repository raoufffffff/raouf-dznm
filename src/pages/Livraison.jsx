import React from 'react'
import states from '../constans/states'

const Livraison = () => {
    const mystates = states.map(e => (
        <div
            key={e.id}
            className='flex justify-center items-center border-b hover:bg-[#f2f2f2] border-b-[#eee] p-4'
        >
            <span className='w-4/12 text-right'>{e.ar_name}</span>
            <span className='w-4/12 text-right'>{e.stop_back} دج</span>
            <span className='w-4/12 text-right'>{e.prix_initial} دج</span>
        </div>
    ))

    return (
        <div className='w-full px-5 mb-20'>
            <h1 className='mb-3 mt-7 font-bold text-xl md:text-3xl text-right'>
                أسعار التوصيل
            </h1>
            <div className='w-full'>
                <div className='flex justify-center items-center bg-[#f2f2f2] p-4'>
                    <span className='w-4/12 font-[600] text-xs text-right'>الولاية</span>
                    <span className='w-4/12 font-[600] text-xs text-right'>للتوصيل إلى المنزل</span>
                    <span className='w-4/12 font-[600] text-xs text-right'>للتوصيل إلى المكتب</span>
                </div>
                {mystates}
            </div>
        </div>
    )
}

export default Livraison