import { useParams } from "react-router-dom"
import TypeItems from "../components/TypeItems/TypeItems"

const Categories = () => {
    const params = useParams()
    const id = params.id
    return (
        <div
            className='w-full px-5'
        >
            <h1
                className='mt-3 font-bold text-xl md:text-2xl'
            >
                {id}
            </h1>
            <TypeItems name={id} />
        </div>
    )
}

export default Categories