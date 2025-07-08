import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import getData from "../../constans/getData";
import { useState } from "react";

const ItemCard = ({ item }) => {
  const [isHoverg, setisHoverg] = useState(false)
  const { main_color } = getData
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, type: "spring" }}
      className=" mx-1 overflow-hidden my-4 rounded-xl shadow-xl"
      onMouseEnter={() => setisHoverg(true)}
      onMouseLeave={() => setisHoverg(false)}
    >
      <Link
        to={`/item/${item._id}`}
        className="flex flex-col items-center justify-center px-2 py-4 space-y-3"
      >
        {/* صورة المنتج */}
        <div className="rounded-xl w-full overflow-hidden shadow-inner">
          <img
            src={item.imgs[0]}
            alt={item.name}

            className="w-full mb-2 h-[150px] transition-transform duration-300 ease-in-out hover:scale-105"
          />
        </div>

        {/* اسم المنتج */}
        <p className="text-center text-sm text-gray-600 font-semibold truncate w-full">
          {item.name}
        </p>

        {/* السعر */}
        <span className="text-center  text-lg font-bold">
          {item.price} دج
        </span>

        {/* زر الطلب */}
        <div

          style={
            isHoverg ?
              {
                background: main_color,
                border: `1px solid ${main_color}`,
                color: "#fff",
              }
              : {
                border: `1px solid ${main_color}`,
                color: main_color,
              }
          }

          className="w-[90%] mt-2  uppercase font-bold text-sm  text-center py-2 rounded-xl ">
          اطلب الآن
        </div>
      </Link>
    </motion.article>
  );
};

export default ItemCard;
