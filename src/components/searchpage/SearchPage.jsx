import { Suspense } from 'react'
import ItemCard from '../itemCard/ItemCard'
import { useSearchParams } from 'react-router-dom'
import Items from '../../item.json'

const SearchPageContent = () => {
  const [search] = useSearchParams()
  const searchTerm = search.get("search")?.toUpperCase().replace(" ", "") || ""

  const searchItems = Items.filter(e => e.name.toUpperCase().replace(" ", "").includes(searchTerm))
    .map(e => <ItemCard item={e} key={e.name} />)

  return (
    <div className='w-full' dir="rtl">
      <h1 className='mb-3 mt-7 font-bold text-xl md:text-3xl text-right'>
        نتائج البحث عن: {search.get("search")}
      </h1>

      {searchItems.length > 0 ? (
        <div className='w-full flex py-10 flex-wrap justify-evenly mt-3 items-center gap-4'>
          {searchItems}
        </div>
      ) : (
        <div className='text-center py-20 text-gray-500'>
          <p className='text-xl'>لا توجد نتائج مطابقة للبحث</p>
          <p className='mt-2'>حاول استخدام كلمات بحث مختلفة</p>
        </div>
      )}
    </div>
  )
}

const SearchPage = () => (
  <Suspense fallback={<div className='text-center py-20'>جاري التحميل...</div>}>
    <SearchPageContent />
  </Suspense>
)

export default SearchPage