import React, { useEffect, useState } from 'react'
import getData from '../constans/getData'
import axios from 'axios'

const useUser = () => {
    const { id } = getData
    const [UserCategories, setUserCategories] = useState([])
    const [Loading, setLoading] = useState(true)
    const [Error, setError] = useState(false)
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await axios.get(`https://true-fit-dz-api.vercel.app/user/${id}`)
                setUserCategories(res.data.result.Categories)

            } catch {
                setError(true)
            } finally {
                setLoading(false)
            }
        }
        fetchUser()
    }, [])

    return { UserCategories, Loading, Error }
}

export default useUser