import { Link } from "react-router-dom"
import useUser from "../../hooks/useUser"

const MinCategories = ({ hide }) => {
    const { Loading, UserCategories } = useUser()
    if (Loading) return <h1>تحميل ....</h1>
    if (UserCategories.length == 0) return
    return (
        <div>
            <strong>تصنيفات المتجر</strong>
            <div
                className="flex flex-wrap items-center justify-around"
            >

                {UserCategories.map(e => (
                    <Link
                        className="flex w-6/12 my-1.5"
                        to={`/categories/${e.name}`}
                        onClick={hide}
                    >
                        {e.name}

                    </Link>
                ))}
            </div>
        </div>
    )
}

export default MinCategories