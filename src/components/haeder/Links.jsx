import SocialNetworks from '../social networks/SocialNetworks';
import { Link, useLocation } from 'react-router-dom';
import MinCategories from './MinCategories';

const Links = ({ hide }) => {
    const router = useLocation()

    const mylinks = [
        {
            name: "الصفحة الرئيسية",
            link: "/"
        },
        {
            name: "حالة الطلب",
            link: "/commande"
        },
        {
            name: "توصيل",
            link: "/livraison"
        },
        {
            name: "اتصل بنا",
            link: "/contact"
        }
    ]
        .map(e => (
            <Link
                onClick={hide}
                key={e.name}
                to={`${e.link}`}
                className={`w-full ${router == e.link && "font-bold"} hover:font-bold hover:bg-[#f3f4f6]   py-2  mb-1 md:mb-3 sm:mb-2 sm:text-xl px-3 capitalize `}
            >{e.name}</Link>
        ))

    return (
        <div
            className='flex flex-col items-start w-full px-2 mt-5   '
        >
            {mylinks}
            <div
                className='border-b border-b-[#3a3b3b55] w-full my-2 '
            ></div>
            <MinCategories hide={hide} />

            <div
                className='border-b border-b-[#3a3b3b55] w-full my-2 '
            ></div>
            <SocialNetworks />
        </div>
    )
}

export default Links