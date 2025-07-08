import ItemCard from '../itemCard/ItemCard'
import Items from '../../item.json'
const BestItem = () => {





  if (Items.length === 0) {
    return <div className="text-center text-gray-500 mt-5">لا توجد منتجات متاحة حالياً.</div>
  }

  const myBestItems = Items.filter(e => e.best).map((e, i) => (
    <ItemCard key={i} item={e} />
  ))
  // const mybestItems = items.filter(e => e.best).map((e, i) => <ItemCard key={i} item={e} />)

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-4 flex-wrap justify-evenly mt-3 items-center">
      {myBestItems}
    </div>
  )
}

export default BestItem
