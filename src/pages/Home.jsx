import BestItem from "../components/BestItem/BestItem";
import Categories from "../components/categories/Categories";

export default function Home() {
    return (
        <div
            className="w-full px-5 my-2"
        >


            <Categories />
            <section
                className="w-full my-5"
            >
                <h2
                    className="text-xl font-bold md:text-2xl"
                >أفضل المنتجات</h2>
                <p
                    className="text-sm"
                >اكتشف أفضل المنتجات بأفضل الأسعار 🔥</p>
                <BestItem />
            </section>
        </div>
    );
}