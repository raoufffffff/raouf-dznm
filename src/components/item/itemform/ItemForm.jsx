// ItemForm.jsx
import React, { useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import states from "../../../constans/states";
import etat from "../../../constans/etat";
import getData from "../../../constans/getData";

const ItemForm = ({ item }) => {
    const { main_color, id } = getData;
    const navigate = useNavigate();
    const formRef = useRef(null);
    const inputRef = useRef(null);

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [stateid, setStateid] = useState("0");

    const [Livrition, setLivrition] = useState({ beru: 0, home: 0 });

    const [user, setUser] = useState({
        userId: id,
        name: "",
        phone: "",
        state: "",
        city: "",
        ride: 0,
        item: item,
        q: 1,
        price: item.price,
        home: true,
    });

    const scrollToForm = () => {
        formRef.current?.scrollIntoView({ behavior: "smooth" });
        inputRef.current?.focus();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser((prev) => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    };

    const handleStateChange = (e) => {
        const selectedState = e.target.value;
        const selectedStateObj = states.find((state) => state.name === selectedState);
        setStateid(selectedStateObj?.id || "0");
        setLivrition({
            beru: selectedStateObj?.stop_back || 0,
            home: selectedStateObj?.prix_initial || 0,
        });
        setUser({
            ...user,
            state: selectedState,
            ride: selectedStateObj?.prix_initial || 0,
        });
        if (errors.state) setErrors((prev) => ({ ...prev, state: "" }));
    };

    const handleCityChange = (e) => {
        setUser({ ...user, city: e.target.value });
        if (errors.city) setErrors((prev) => ({ ...prev, city: "" }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!user.name.trim()) newErrors.name = "الاسم الكامل مطلوب";
        if (!user.phone.trim()) newErrors.phone = "رقم الهاتف مطلوب";
        else if (!/^(\+?213|0)(5|6|7)[0-9]{8}$/.test(user.phone))
            newErrors.phone = "رقم هاتف غير صحيح";
        if (!user.state) newErrors.state = "الولاية مطلوبة";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) {
            scrollToForm();
            return;
        }

        setIsSubmitting(true);
        try {
            const response = await axios.post(`https://true-fit-dz-api.vercel.app/order`, user);
            if (response.data.good) {
                navigate("/thanks");
            } else {
                setErrors({ submit: "حدث خطأ أثناء إرسال الطلب" });
            }
        } catch (err) {
            console.error(err);
            setErrors({ submit: "خطأ في الخادم، حاول لاحقًا" });
        } finally {
            setIsSubmitting(false);
        }
    };

    const totalPrice = (user.price * user.q) + (user.home ? Livrition.home : Livrition.beru);

    return (
        <>
            <div ref={formRef} className="mx-auto w-full sm:w-11/12 mt-10 rounded-lg border-2 p-6 font-[Cairo] text-right" style={{ borderColor: main_color }}>
                <h2 className="text-center font-bold" style={{ color: main_color }}>
                    املأ النموذج لإتمام الطلب
                </h2>

                {errors.submit && <p className="text-red-500 text-center mt-2">{errors.submit}</p>}

                <div className="mt-4 space-y-4">
                    <input
                        ref={inputRef}
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                        placeholder="الاسم الكامل"
                        className={`w-full p-3 rounded-xl border-2 text-right ${errors.name ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

                    <input
                        name="phone"
                        value={user.phone}
                        onChange={handleChange}
                        placeholder="رقم الهاتف"
                        className={`w-full p-3 rounded-xl border-2 text-right ${errors.phone ? "border-red-500" : "border-gray-300"}`}
                    />
                    {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

                    <div className="flex gap-2 flex-wrap">
                        <select
                            name="state"
                            value={user.state}
                            onChange={handleStateChange}
                            className={`w-full sm:w-1/2 p-3 rounded-xl border-2 ${errors.state ? "border-red-500" : "border-gray-300"}`}
                        >
                            <option value="">اختر الولاية</option>
                            {states.map((s) => (
                                <option key={s.id} value={s.name}>
                                    {s.ar_name}
                                </option>
                            ))}
                        </select>

                        <select
                            name="city"
                            value={user.city}
                            onChange={handleCityChange}
                            disabled={!etat.filter((c) => c.state_code == stateid).length}
                            className="w-full sm:w-1/2 p-3 rounded-xl border-2 border-gray-300"
                        >
                            <option value="">اختر المدينة</option>
                            {etat
                                .filter((c) => c.state_code == stateid)
                                .map((c, i) => (
                                    <option key={i} value={c.name}>
                                        {c.ar_name}
                                    </option>
                                ))}
                        </select>
                    </div>
                </div>

                <h3 className="mt-6 font-bold" style={{ color: main_color }}>مكان التوصيل</h3>

                <div className="mt-2 space-y-2">
                    <DeliveryOption
                        label="إلى المنزل"
                        selected={user.home}
                        price={Livrition.home}
                        onClick={() => setUser({ ...user, home: true, ride: Livrition.home })}
                        mainColor={main_color}
                    />
                    <DeliveryOption
                        label="إلى مكتب التوصيل"
                        selected={!user.home}
                        price={Livrition.beru}
                        onClick={() => setUser({ ...user, home: false, ride: Livrition.beru })}
                        mainColor={main_color}
                    />
                </div>

                <div className="mt-6 space-y-2 text-sm">
                    <div className="flex justify-between">
                        <span>سعر التوصيل</span>
                        <span className="font-bold" style={{ color: main_color }}>
                            {user.state ? (user.home ? Livrition.home : Livrition.beru) + " دج" : "اختر الولاية"}
                        </span>
                    </div>
                    <div className="flex justify-between">
                        <span>ثمن المنتجات</span>
                        <span className="font-bold">{user.price * user.q} دج</span>
                    </div>
                    <div className="flex justify-between text-lg">
                        <span className="font-bold">الإجمالي</span>
                        <span className="font-bold" style={{ color: main_color }}>
                            {totalPrice} دج
                        </span>
                    </div>
                </div>

                <div className="mt-4 flex items-center gap-4">
                    <button
                        type="button"
                        onClick={() => setUser({ ...user, q: Math.max(1, user.q - 1) })}
                        className="bg-gray-100 p-3 rounded-xl text-lg"
                    >−</button>
                    <span className="text-xl font-bold">{user.q}</span>
                    <button
                        type="button"
                        onClick={() => setUser({ ...user, q: user.q + 1 })}
                        className="bg-gray-100 p-3 rounded-xl text-lg"
                    >+</button>
                </div>

                <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="w-full mt-6 p-3 font-bold rounded-xl text-white"
                    style={{ backgroundColor: main_color }}
                >
                    {isSubmitting ? "جاري المعالجة..." : "اطلب الآن"}
                </button>
            </div>

            <button
                onClick={scrollToForm}
                className="fixed bottom-4 right-4 left-4 md:right-10 md:left-auto font-bold py-3 px-6 rounded-xl text-white z-40"
                style={{ backgroundColor: main_color }}
            >
                اشترِ الآن
            </button>
        </>
    );
};

const DeliveryOption = ({ label, selected, price, onClick, mainColor }) => (
    <div className="flex items-center cursor-pointer" onClick={onClick}>
        <span className="p-1 rounded-full border border-black mr-2 flex items-center justify-center">
            <span className={`w-3 h-3 rounded-full ${selected ? "" : "bg-transparent"}`} style={{ backgroundColor: selected ? mainColor : "transparent" }}></span>
        </span>
        <span className="flex-1">{label}</span>
        <span className="font-bold">{price} دج</span>
    </div>
);

export default ItemForm;
