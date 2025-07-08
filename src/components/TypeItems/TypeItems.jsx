import Items from '../../item.json'
import ItemCard from '../itemCard/ItemCard'
const TypeItems = ({ name }) => {
  const FiltterItem = Items.filter(e => e.type === name).filter(e => e.best)
  if (FiltterItem.length == 0) {
    return <p
      className='text-center mt-7 mb-52 capitalize text-[#0007] text-xl'
    >لا توجد بيانات للعرض.</p>
  }
  const mytype = FiltterItem.map(e => (<ItemCard item={e} key={e._id} />))
  return (
    <div
      className='w-full grid grid-cols-2  md:grid-cols-3   lg:grid-cols-4 justify-center items-center mt-3 mb-8'
    >
      {mytype}
    </div>
  )
}

export default TypeItems