import React, { useState, useRef, useEffect } from 'react'

const FAQ = () => {

    const [active1, setActive1] = useState(false);
    const contentRef1 = [useRef(null)];

    useEffect(() => {
        contentRef1.current.style.maxHeight = active1
            ? `${contentRef1.current.scrollHeight}px`
            : "0px";
    }, [contentRef1, active1]);

    const toggleAccordion1 = () => {
        setActive1(!active1);
    };

    const [active2, setActive2] = useState(false);
    const contentRef2 = [useRef(null)];

    useEffect(() => {
        contentRef2.current.style.maxHeight = active2
            ? `${contentRef2.current.scrollHeight}px`
            : "0px";
    }, [contentRef2, active2]);

    const toggleAccordion2 = () => {
        setActive2(!active2);
    };

    return (
        <div id="faq">
            <section className="relative pt-24 pb-28 bg-blueGray-50 overflow-hidden">
                <div className="relative z-10 container px-4 mx-auto">
                    <div className="md:max-w-4xl mx-auto">
                        <p className="mb-7 text-sm text-[#5555bd] text-center font-semibold uppercase tracking-px">Have any questions?</p>
                        <h2 className="text-[40px] mb-2  text-center font-bold font-heading tracking-px-n leading-none">Frequently Asked Questions</h2>
                        <div className=" w-full flex items-center justify-center">
                            <div className="w-[300px] h-2 flex items-center justify-center"></div>
                            <div className="w-[700px] h-2 bg-[#5c5ca5] flex items-center justify-center"></div>
                            <div className="w-[200px] h-2 flex items-center justify-center"></div>
                        </div>
                        <div className="mt-14 mb-11 flex flex-wrap -m-1">
                            <div className="w-full p-1">

                                <div className={`py-7 px-8 bg-white bg-opacity-60 ${active1 ? "border-2" : "border"} ${active1 ? "border-[#5555bd] duration-300" : "border-gray-200 hover:border-gray-300"} rounded-2xl shadow-10xl`} onClick={toggleAccordion1}>
                                    <div className="flex flex-wrap justify-between -m-2">
                                        <div className="flex-1 p-2">
                                            <h3 className={`text-lg font-semibold leading-normal`}>How to support any Club?</h3>

                                            <div ref={contentRef1} className="accordion">
                                                <p className="text-gray-600 font-medium mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit quos reiciendis maiores reprehenderit non eveniet quas vitae magnam fuga? Facere odit tempore provident quam. Excepturi rem accusamus fugit hic ipsum.</p>
                                            </div>

                                        </div>
                                        <div className="w-auto p-2">
                                            <svg className="relative top-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                {active1 ? (<path d="M4.16732 12.5L10.0007 6.66667L15.834 12.5" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>) : (<path d="M14.25 6.75L9 12L3.75 6.75" stroke="#18181B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>)}

                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="w-full p-1">
                                <div className={`py-7 px-8 bg-white bg-opacity-60 ${active2 ? "border-2" : "border"} ${active2 ? "border-[#5555bd] duration-300" : "border-gray-200 hover:border-gray-300"} rounded-2xl shadow-10xl`} onClick={toggleAccordion2}>
                                    <div className="flex flex-wrap justify-between -m-2">
                                        <div className="flex-1 p-2">
                                            <h3 className={`text-lg font-semibold leading-normal`}>How to get support from any Club?</h3>

                                            <div ref={contentRef2} className="accordion">
                                                <p className="text-gray-600 font-medium  mt-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit quos reiciendis maiores reprehenderit non eveniet quas vitae magnam fuga? Facere odit tempore provident quam. Excepturi rem accusamus fugit hic ipsum.</p>
                                            </div>

                                        </div>
                                        <div className="w-auto p-2">
                                            <svg className="relative top-1" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                {active2 ? (<path d="M4.16732 12.5L10.0007 6.66667L15.834 12.5" stroke="#4F46E5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>) : (<path d="M14.25 6.75L9 12L3.75 6.75" stroke="#18181B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>)}

                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-gray-600 text-center font-medium">
                            <span>Still have any questions?</span>
                            <a className="font-semibold text-[#5555bd] hover:text-indigo-700" href="/">Contact us</a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FAQ
