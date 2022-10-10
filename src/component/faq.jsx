import React from 'react'

const faq = () => {
    return (
        <div>
            <section class="relative pt-24 pb-28 bg-blueGray-50 overflow-hidden">
                {/* <img class="absolute bottom-0 left-1/2 transform -translate-x-1/2" src="flaro-assets/images/faqs/gradient.svg" alt="" /> */}
                <div class="relative z-10 container px-4 mx-auto">
                    <div class="md:max-w-4xl mx-auto">
                        <p class="mb-7 text-sm text-[#5555bd] text-center font-semibold uppercase tracking-px">Have any questions?</p>
                        <h2 class="mb-16 text-6xl  text-center font-bold font-heading tracking-px-n leading-none">Frequently Asked Questions</h2>
                        <div class="mb-11 flex flex-wrap -m-1">
                            <div class="w-full p-1">

                                <div class="py-7 px-8 bg-white bg-opacity-60 border-2 border-[#5555bd] rounded-2xl shadow-10xl">
                                    <div class="flex flex-wrap justify-between -m-2">
                                        <div class="flex-1 p-2">
                                            <h3 class="mb-4 text-lg font-semibold leading-normal">Do you provide any free plan?</h3>
                                            <p class="text-gray-600 font-medium">Lorem ipsum dolor sit amet, to the consectr adipiscing elit. Volutpat tempor to the condi mentum vitae vel purus.</p>
                                        </div>
                                        <div class="w-auto p-2">
                                            <svg class="relative top-1" width="20" height="20" viewbox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.16732 12.5L10.0007 6.66667L15.834 12.5" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full p-1">
                                <div class="py-7 px-8 bg-white bg-opacity-60 border border-gray-200 hover:border-gray-300 rounded-2xl shadow-10xl">
                                    <div class="flex flex-wrap justify-between -m-2">
                                        <div class="flex-1 p-2">
                                            <h3 class="text-lg font-semibold leading-normal">How to claim your 25% discount offer?</h3>
                                        </div>
                                        <div class="w-auto p-2">
                                            <svg class="relative top-1" width="18" height="18" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.25 6.75L9 12L3.75 6.75" stroke="#18181B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full p-1">
                                <div class="py-7 px-8 bg-white bg-opacity-60 border border-gray-200 hover:border-gray-300 rounded-2xl shadow-10xl">
                                    <div class="flex flex-wrap justify-between -m-2">
                                        <div class="flex-1 p-2">
                                            <h3 class="text-lg font-semibold leading-normal">What&rsquo;s your refund policy?</h3>
                                        </div>
                                        <div class="w-auto p-2">
                                            <svg class="relative top-1" width="18" height="18" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.25 6.75L9 12L3.75 6.75" stroke="#18181B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full p-1">
                                <div class="py-7 px-8 bg-white bg-opacity-60 border border-gray-200 hover:border-gray-300 rounded-2xl shadow-10xl">
                                    <div class="flex flex-wrap justify-between -m-2">
                                        <div class="flex-1 p-2">
                                            <h3 class="text-lg font-semibold leading-normal">How to get support for the product?</h3>
                                        </div>
                                        <div class="w-auto p-2">
                                            <svg class="relative top-1" width="18" height="18" viewbox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.25 6.75L9 12L3.75 6.75" stroke="#18181B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p class="text-gray-600 text-center font-medium">
                            <span>Still have any questions?</span>
                            <a class="font-semibold text-[#5555bd] hover:text-indigo-700" href="#">Contact us</a>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default faq
