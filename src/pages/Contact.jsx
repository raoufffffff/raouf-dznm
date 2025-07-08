import { IoLogoWhatsapp } from "react-icons/io";
import { FaViber } from "react-icons/fa";
import { MdAlternateEmail } from "react-icons/md";
import { motion } from "framer-motion";
import SocialNetworks from "../components/social networks/SocialNetworks";
import getData from "../constans/getData";

// If getData is a function, you must call it
const { phone, email } = getData; // ← ensure you invoke it if it's a function

const Contact = () => {
    const contactData = [
        {
            name: "واتساب",
            link: `https://api.whatsapp.com/send/?phone=213${phone}&text&type=phone_number&app_absent=0`,
            icon: <IoLogoWhatsapp size={22} className="mx-2 text-green-600" />,
            text: phone,
        },
        {
            name: "فايبر",
            link: `viber://chat?number=213${phone}`,
            icon: <FaViber size={22} className="mx-2 text-purple-600" />,
            text: phone,
        },
        {
            name: "البريد الإلكتروني",
            link: `mailto:${email}`,
            icon: <MdAlternateEmail size={22} className="mx-2 text-orange-600" />,
            text: email,
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full px-5 mb-20 text-right"
            dir="rtl"
        >
            {/* العنوان الرئيسي */}
            <motion.h1
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-3 mt-7 font-bold text-xl md:text-3xl text-zinc-800 dark:text-white"
            >
                اتصل بنا
            </motion.h1>

            {/* وسائل الاتصال */}
            <div className="w-full mt-5 space-y-4">
                {contactData.map((e, index) => (
                    <motion.a
                        key={e.name}
                        href={e.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block border border-zinc-300 dark:border-zinc-700 p-4 rounded-xl hover:shadow-md transition-all duration-300"
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                    >
                        <p className="text-lg font-bold mb-1">{e.name}</p>
                        <p className="flex items-center text-sm font-medium text-zinc-700 dark:text-zinc-300">
                            {e.icon}
                            {e.text}
                        </p>
                    </motion.a>
                ))}
            </div>

            {/* الشبكات الاجتماعية */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="w-full mt-10"
            >
                <h2 className="mb-3 font-bold text-lg md:text-2xl">الشبكات الاجتماعية</h2>
                <SocialNetworks page />
            </motion.div>
        </motion.div>
    );
};

export default Contact;
