import axios from 'axios'
import { useEffect, useState } from 'react'
import getData from '../constans/getData'

const useItem = () => {
    const { id } = getData
    const [Items, setItems] = useState([])
    const [Loading, setLoading] = useState(true)
    const [Error, setError] = useState(false)
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const res = await axios.get(`https://true-fit-dz-api.vercel.app/item/my/${id}`)
                let result = res.data.result.filter(e => e.best)
                setItems(result)
            } catch {
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        fetchItems()
    }, [])

    return { Items, Error, Loading }
}

export default useItem