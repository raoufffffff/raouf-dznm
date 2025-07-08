import getData from "../../constans/getData"

const Logo = () => {
  const { logo, store_name } = getData
  return (
    <div
      className='w-full mb-5 sm:mb-3 font-bold  flex   sm:flex-col items-center mt-5 sm:mt-9'
    >
      <img
        src={logo}
        alt='logo-2'
        width={90}
        height={90}
        className='w-12 sm:w-24'
      />
      {store_name}
    </div>
  )
}

export default Logo