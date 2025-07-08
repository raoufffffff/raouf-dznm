
import { Link } from 'react-router-dom';
import Menu from './Menu';
import Search from './Search';
import getData from '../../constans/getData';

const Header = () => {
  const { logo, store_name } = getData
  return (
    <header
      className='w-full flex px-1 py-2 min-h-[4rem] items-center border-b border-b-[#e5e7eb]'
    >
      <Menu />
      <Link
        to={'/'}
        className='flex items-center font-bold ml-5'
      >
        <img
          src={logo}
          alt='logo'
          className='mr-3 w-16'
        />
        <span
          className='mx-x'
        >
          {store_name}
        </span>
      </Link>
      <Search show={false} />
    </header>
  )
}

export default Header