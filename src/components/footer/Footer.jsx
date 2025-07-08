import { Link } from "react-router-dom"
import getData from "../../constans/getData"

const Footer = () => {
    const { logo, store_name } = getData

    const time = new Date().getFullYear()
    const footerlinks = [
        {
            titel: "المتجر",
            links: [
                {
                    name: "اتصل بنا",
                    link: "/contact"
                },
                {
                    name: "معلومات عنا",
                    link: "/about"
                },
                {
                    name: "الأسئلة الشائعة",
                    link: "/faq"
                }
            ]
        },
        {
            titel: "التوصيل",
            links: [
                {
                    name: "أسعار التوصيل",
                    link: "/livraison"
                }
            ]
        }
    ].map(e => (
        <div
            key={e.titel}
            className='w-full sm:w-4/12 flex flex-col items-center justify-center my-2 sm:my-0'
        >
            <strong
                className='uppercase text-gray-700  flex mb-2'
            >{e.titel}</strong>
            <div
                className='flex flex-col items-center '
            >
                {e.links.map(e => (
                    <Link
                        className='my-0.5 capitalize'
                        key={e.name}
                        to={e.link}
                    >{e.name}</Link>
                ))}
            </div>
        </div>
    ))
    return (
        <>
            <footer
                className='border-t  p-3 border-t-green-800 w-[98%] mx-auto flex flex-col sm:flex-row sm:justify-center items-center sm:items-start'
            >
                <div
                    className='flex flex-col items-center my-2 sm:my-0 w-full sm:w-4/12 font-bold'
                >
                    <img
                        src={logo}
                        alt='logo-footer'
                        width={90}
                        height={90}
                        className='mb-2'
                    />
                    {store_name}
                </div>
                {footerlinks}
            </footer>
            <p
                className='text-center px-7 mt-2 mb-4 capitalize text-[#000a]'
            >
                جميع الحقوق محفوظة © {time} - ناتور ستور
            </p>
        </>
    )
}

export default Footer