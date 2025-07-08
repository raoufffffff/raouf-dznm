import { useState } from 'react'
import { IoIosSearch } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Search = ({ show, hide }) => {
  const router = useNavigate()
  const [search, setsearch] = useState("")

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (search == "") return
        router(`/search/?search=${search}`)
        if (hide) hide()
      }}
      className={`${!show ? "hidden  flex-1" : "w-full min-h-[3rem] justify-center"}  sm:flex h-[3rem]   rounded-2xl overflow-hidden`}
    >
      <label
        className={`${!show ? "sm:w-full md:w-10/12" : "w-full mx-auto"}  rounded-xl bg-[#f3f4f6] flex h-full items-center px-2`}
        htmlFor='search'
      >
        <IoIosSearch
          className={` mr-2 w-2/12 text-[#474646]`}
          size={25} />
        <input
          id='search'
          name="search"
          type='text'
          value={search}
          onChange={(e) => setsearch(e.currentTarget.value)}
          className={`w-9/12 ${show && "w-11/12"} bg-transparent   focus:outline-none placeholder:font-semibold`}
          placeholder='ابحث عن المنتج...'
        />
      </label>
      <input type='submit'
        className='hidden'
      />
    </form>
  )
}

export default Search