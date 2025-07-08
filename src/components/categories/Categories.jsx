import CategoriCard from "../categoriCard/CategoriCard"
import categories from '../../categories.json'


const Categories = () => {
  const mycat = categories.map(e => <CategoriCard key={e.name} home e={e} />
  )

  if (categories.length == 0) return
  return (
    <section
      className="w-full my-5"
    >
      <h1
        className="text-xl font-bold md:text-2xl"
      >اكتشف فئات منتجاتنا!</h1>
      <div
        className='w-full flex overflow-x-scroll md:overflow-hidden a mt-5'
      >
        {mycat}
      </div>
    </section>
  )
}

export default Categories