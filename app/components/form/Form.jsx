"use client"
// components/ExpertAdviceForm.js

import React, { useState } from 'react';

const countries = [
    { code: 'US', flag: '🇺🇸', dialCode: '+1' },
    { code: 'CA', flag: '🇨🇦', dialCode: '+1' },
    { code: 'GB', flag: '🇬🇧', dialCode: '+44' },
    { code: 'IN', flag: '🇮🇳', dialCode: '+91' },
    // Add more countries as needed
];

export default function ExpertAdviceForm() {
    const [selectedCountry, setSelectedCountry] = useState(countries[0]);
    const [phone, setPhone] = useState('');
    return (
        <div className="flex justify-center items-center  mt-20 ">
            <div className="bg-gray-200 w-full max-w-lg p-8 rounded-lg shadow-md">
                <div className="text-center mb-6">
                    <div className="flex justify-center mb-3">
                        <svg
                            width={66}
                            height={49}
                            viewBox="0 0 66 49"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M42.7866 36.2338C43.0741 36.4206 43.3759 36.5931 43.6633 36.78C44.5545 37.3549 44.9713 38.4328 44.5832 39.3958C43.6921 41.5805 42.7866 43.7651 41.8093 45.9211C41.2343 47.1859 40.0558 47.8326 38.8054 48.3357C36.6063 49.2124 34.3498 49.1262 32.1076 48.6231C28.0258 47.7177 24.4182 45.7342 21.0406 43.3627C14.386 38.6915 8.85246 32.9424 4.61249 25.986C2.84463 23.0971 1.46484 20.0213 0.904306 16.6437C0.45875 13.956 0.674342 11.3401 2.44219 9.09798C2.87338 8.53744 3.50578 8.04876 4.15256 7.76131C6.03539 6.88457 7.97572 6.10844 9.8873 5.30356C11.2671 4.71427 12.2732 5.0161 13.0637 6.29528C13.1499 6.43901 13.2505 6.56836 13.5092 6.69772C13.5092 6.22342 13.5092 5.73474 13.5092 5.26044C13.5092 4.64241 13.4949 4.01001 13.538 3.39198C13.6673 1.60975 15.0902 0.186846 16.8725 0.0287456C17.1312 2.14171e-09 17.4043 0 17.663 0C32.1651 0 46.6816 0 61.1838 0C62.118 0 62.9948 0.129355 63.7565 0.704267C64.6476 1.39416 65.2082 2.2709 65.2657 3.4351C65.28 3.67943 65.2944 3.9094 65.2944 4.15374C65.2944 13.4242 65.2944 22.6946 65.2944 31.9507C65.2944 34.0635 64.2883 35.5008 62.5061 35.932C62.0461 36.047 61.5575 36.0613 61.0832 36.0613C55.2766 36.0757 49.47 36.0613 43.6633 36.0613C43.3903 36.0613 43.1172 36.0613 42.8441 36.0613C42.8154 36.1188 42.801 36.1763 42.7866 36.2338ZM39.4521 1.4804C32.1364 1.4804 24.8206 1.4804 17.5192 1.4804C15.852 1.4804 15.0184 2.31402 15.004 3.99564C15.004 5.64851 14.9896 7.287 15.0184 8.93987C15.0328 9.32794 15.1477 9.74475 15.3346 10.0753C16.2257 11.6276 17.1456 13.1655 18.0798 14.689C18.6834 15.652 18.7266 16.5718 18.166 17.5779C17.1743 19.3458 16.2544 21.1567 15.2627 22.9246C14.8747 23.6001 14.9753 24.0744 15.5358 24.6206C18.7553 27.797 21.9461 30.9877 25.1225 34.1929C25.6542 34.7247 26.0998 34.8109 26.761 34.4516C28.5144 33.4742 30.311 32.5687 32.0501 31.577C33.0994 30.9734 34.0623 30.9877 35.0828 31.6201C36.5057 32.4969 37.943 33.3449 39.409 34.1641C39.7971 34.3797 40.3001 34.5234 40.7457 34.5378C47.5296 34.5666 54.3136 34.5522 61.1119 34.5522C63.081 34.5522 63.8427 33.8048 63.8427 31.8214C63.8427 22.6228 63.8427 13.4386 63.8427 4.23997C63.8427 2.24216 63.0666 1.4804 61.0688 1.4804C53.8393 1.4804 46.6529 1.4804 39.4521 1.4804ZM35.6002 47.5164C36.0314 47.4446 36.7357 47.4015 37.3968 47.2146C38.9635 46.7691 40.2714 46.0648 40.8607 44.3544C41.4643 42.6297 42.2836 40.9624 43.0022 39.2808C43.3471 38.4903 43.2753 38.2604 42.5423 37.8148C39.7971 36.1763 37.0375 34.5666 34.2923 32.9137C33.7605 32.5831 33.3149 32.5831 32.7688 32.8849C30.9434 33.891 29.1037 34.854 27.2784 35.8314C25.9992 36.5069 25.2231 36.4063 24.1882 35.3858C20.9112 32.1376 17.6486 28.8893 14.386 25.6267C13.308 24.5487 13.193 23.7438 13.8973 22.4216C14.8603 20.6106 15.8089 18.7852 16.815 16.9886C17.1312 16.4137 17.1168 15.9538 16.7862 15.3933C15.1477 12.6768 13.538 9.94597 11.9139 7.21514C11.4539 6.43901 11.1808 6.35277 10.3329 6.72647C8.42127 7.54571 6.50969 8.36496 4.61249 9.19858C4.3394 9.31357 3.99446 9.47167 3.85073 9.70163C3.31893 10.6215 2.71528 11.5557 2.44219 12.5618C1.73793 15.2208 2.41345 17.7791 3.36205 20.2513C4.88557 24.2181 7.24271 27.6964 9.90167 30.959C14.8603 37.0387 20.6525 42.1266 27.767 45.6049C30.1529 46.7547 32.6538 47.5452 35.6002 47.5164Z"
                                fill="#0C314E"
                            />
                            <path
                                d="M45.1871 18.5557C47.6161 20.4241 49.9876 22.2351 52.3447 24.0605C54.4863 25.6989 56.6278 27.3518 58.7694 28.9903C58.8987 29.0909 59.0281 29.1915 59.1574 29.3065C59.5168 29.6083 59.6317 29.9964 59.3299 30.3701C59.0281 30.7582 58.64 30.7294 58.2519 30.4276C57.0446 29.4934 55.8229 28.5735 54.6156 27.6393C51.2811 25.0809 47.9323 22.5369 44.6122 19.9498C44.1379 19.5905 43.8504 19.5761 43.4049 19.9786C42.3413 20.9703 41.2058 21.8902 40.1135 22.8675C39.5817 23.3562 39.1218 23.3131 38.6187 22.8531C37.5551 21.8902 36.4484 20.9847 35.3848 20.0073C35.0255 19.6768 34.7956 19.6193 34.3787 19.9498C31.3461 22.3932 28.2991 24.8078 25.252 27.2368C25.1083 27.3518 24.9502 27.553 24.7921 27.5674C24.4759 27.5818 23.9585 27.5962 23.8579 27.4237C23.7141 27.1793 23.8004 26.7338 23.9154 26.4176C23.9728 26.2307 24.2603 26.1014 24.4471 25.9577C27.3505 23.658 30.2538 21.3584 33.1571 19.0587C33.3152 18.9294 33.4733 18.7856 33.6889 18.5844C32.6109 17.6502 31.5761 16.7447 30.5412 15.8392C26.948 12.7203 23.3548 9.6158 19.7616 6.4969C19.7041 6.45379 19.6466 6.39629 19.6035 6.35318C19.2586 6.03697 19.1436 5.67766 19.4598 5.28959C19.776 4.90152 20.1784 4.93027 20.5378 5.2321C21.4864 6.03697 22.4206 6.84185 23.3692 7.6611C28.5003 12.1023 33.6314 16.5435 38.7624 20.9703C38.9637 21.1428 39.1649 21.3009 39.4236 21.5165C40.674 20.4241 41.9245 19.3605 43.1605 18.2826C48.076 14.0282 52.9771 9.7739 57.8926 5.51955C57.9501 5.47644 58.0076 5.43332 58.0507 5.37583C58.4388 5.03088 58.87 4.78654 59.2868 5.26084C59.718 5.73515 59.4161 6.13758 59.0281 6.48253C57.907 7.44551 56.7859 8.42286 55.6792 9.40021C52.3016 12.3466 48.8953 15.2931 45.5033 18.2395C45.417 18.3113 45.3452 18.3976 45.1871 18.5557Z"
                                fill="#0C314E"
                            />
                        </svg>
                    </div>
                    <h2 className="text-xl font-bold " style={{ color: "rgb(30, 65, 100)" }}>Need Expert Advice?</h2>
                    <p className="text-gray-600 text-sm">Fill out the form and one of our property consultants will contact you.</p>
                </div>

                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="name">Name <span className="text-red-500">*</span></label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Your Name"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="location">Location <span className="text-red-500">*</span></label>
                        <select
                            id="location"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                            required
                        >
                            <option>Preferred Location</option>
                            <option>Location 1</option>
                            <option>Location 2</option>
                        </select>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="phone">
                            Phone <span className="text-red-500">*</span>
                        </label>
                        <div className="flex">
                            <select
                                value={selectedCountry.code}
                                onChange={(e) => {
                                    const country = countries.find((c) => c.code === e.target.value);
                                    setSelectedCountry(country);
                                }}
                                className="w-1/5 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none"
                            >
                                {countries.map((country) => (
                                    <option key={country.code} value={country.code}>
                                        {country.flag} {country.dialCode}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="tel"
                                id="phone"
                                placeholder="Phone Number"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-4/5 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                                required
                            />
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2" htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            placeholder="Your message"
                            rows="3"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
                        ></textarea>
                    </div>

                    <button
                        style={{ backgroundColor: "rgb(30, 65, 100)" }}
                        type="submit"
                        className="w-full py-2 text-white font-semibold rounded-md transition-colors"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
}