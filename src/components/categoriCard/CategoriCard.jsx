import { FaArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import getData from "../../constans/getData";

const CategoriCard = ({ e, home }) => {
    const { main_color } = getData
    return (
        <Link
            style={{
                border: `1px solid ${main_color}`,
                color: main_color,
            }}
            className={`${home ? "min-w-[60%] max-h-[200px] sm:min-w-[40%] md:min-w-[23%] md:max-w-[23%] " : "w-[45%] sm:w-[31%] md:w-[23%] my-2 mx-2"} bg-white  mx-2 rounded-xl overflow-hidden relative `}
            key={e.name}
            to={`/categories/${e.name}`}>
            <img
                src={e.img}
                alt={`${e.img}-img`}
                className="w-full h-full "
            />
            <div
                className='absolute w-full h-full flex justify-end flex-col  bottom-0 left-0'
            >
                <p
                    className={`text-xl mb-3 ${!home && "text-[16px] sm:text-lg pl-3 mb-2"} font-bold  w-10/12 mx-auto text-black `}
                >{e.name}</p>
                <p
                    style={{
                        background: main_color
                    }}
                    className={`${home ? "p-2.5  mb-5" : "mb-2 py-1 sm:py-2.5"} font-bold w-10/12 mx-auto flex items-center justify-center  uppercase rounded-lg  text-white`}
                >
                    <FaArrowRight
                        className='mx-2'
                    />
                    اكتشف
                </p>
            </div>
        </Link>
    )
}

export default CategoriCard