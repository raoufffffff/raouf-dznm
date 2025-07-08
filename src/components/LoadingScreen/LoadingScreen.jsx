import { motion } from 'framer-motion';
import getData from '../../constans/getData';

const LoadingScreen = () => {
    const { logo, main_color } = getData
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, ease: 'easeInOut' }}
            className="flex flex-col min-h-[70vh] items-center justify-center mt-16 space-y-4 text-center"
        >
            {/* Spinning Logo */}
            <motion.img
                src={logo}
                alt="Logo"
                className="w-16 h-16"
                animate={{
                    x: [0, -10, 10, -10, 10, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 3,
                    ease: 'linear',
                }}
            />

            {/* Loading Text */}
            <motion.div
                className="text-lg text-gray-700 flex gap-1"
                animate={{
                    opacity: [1, 0.4, 1],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 1.5,
                }}
            >
                جارٍ تحميل المنتجات...
            </motion.div>

            {/* Spinner Circle */}
            <motion.div
                style={{ borderColor: main_color, borderTopColor: "transparent" }}
                className={`w-10 h-10 border-4  rounded-full`}
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 1,
                    ease: 'linear',
                }}
            />
        </motion.div>
    );
};

export default LoadingScreen;
