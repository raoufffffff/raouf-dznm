import React, { useRef, useState, useCallback, lazy, Suspense } from 'react';
import 'react-photo-view/dist/react-photo-view.css';
import getData from '../../../constans/getData';

// تحميل PhotoSlider فقط عند الحاجة
const PhotoSlider = lazy(() =>
  import('react-photo-view').then((mod) => ({ default: mod.PhotoSlider }))
);

const ItemImages = ({ imgs }) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const { main_color } = getData;

  // تحسين scroll إلى الصورة المطلوبة
  const scrollToImage = useCallback((idx) => {
    if (!ref.current) return;
    const containerWidth = ref.current.offsetWidth;
    ref.current.scrollTo({
      left: -containerWidth * idx,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className="w-full flex flex-col md:py-3 md:px-5">
      {/* الصور الكبيرة */}
      <div
        ref={ref}
        className="w-full flex scroll-smooth snap-x snap-mandatory overflow-x-auto a"
      >
        {imgs.map((e, i) => (
          <div
            key={i}
            className="min-w-full item-img rounded-xl mx-[10px] snap-center "
          >
            <img
              src={e}
              alt={`item-${i}`}
              width={300}
              height={300}
              loading="lazy"
              className="min-w-full mb-2 hover:scale-110 transition-all cursor-pointer"
              onClick={() => {
                setVisible(true);
                setIndex(i);
              }}
            />
          </div>
        ))}
      </div>

      {/* الصور المصغّرة */}
      <div className="w-full flex flex-wrap justify-center mt-2">
        {imgs.map((e, i) => (
          <span
            key={i}
            onClick={() => scrollToImage(i)}
            className="w-[20%] item-img rounded-xl mx-1 cursor-pointer overflow-hidden"
            style={{
              border: `1px solid ${main_color}`,
              color: main_color,
            }}
          >
            <img
              src={e}
              alt={`thumb-${i}`}
              width={300}
              height={300}
              loading="lazy"
              className="min-w-full mb-2 hover:scale-110 transition-all"
            />
          </span>
        ))}
      </div>

      {/* PhotoSlider يظهر فقط عند الطلب */}
      <Suspense fallback={null}>
        {visible && (
          <PhotoSlider
            images={imgs.map((item) => ({ src: item, key: item }))}
            visible={visible}
            onClose={() => setVisible(false)}
            index={index}
            onIndexChange={setIndex}
          />
        )}
      </Suspense>
    </div>
  );
};

export default ItemImages;
