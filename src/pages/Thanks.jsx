import React from 'react';
import getData from '../constans/getData';

const Thanks = () => {
    const { main_color, phone, logo } = getData;

    return (
        <div
            className="min-h-screen flex flex-col justify-center items-center text-center p-6"
            style={{ backgroundColor: "#f9f9f9" }}
        >
            {/* الشعار */}
            {logo && (
                <img
                    src={logo}
                    alt="logo"
                    className="w-28 h-28 mb-6 rounded-full shadow-lg"
                />
            )}

            {/* رسالة الشكر */}
            <h1 className="text-3xl font-bold mb-4" style={{ color: main_color }}>
                شكرًا لك!
            </h1>
            <p className="text-lg text-gray-700 mb-4 max-w-md">
                تم إرسال طلبك بنجاح. سنقوم بالتواصل معك في أقرب وقت ممكن.
            </p>

            {/* معلومات التواصل */}
            <p className="text-md text-gray-600">
                هل لديك أي استفسار؟ لا تتردد في التواصل معنا عبر الرقم:
            </p>
            <a
                href={`tel:${phone}`}
                className="mt-2 text-lg font-semibold"
                style={{ color: main_color }}
            >
                {phone}
            </a>
        </div>
    );
};

export default Thanks;
