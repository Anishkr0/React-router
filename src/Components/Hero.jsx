import React from 'react'

function Hero() {
    return (
        <div>
        <div class="flex gap-4 max-sm:flex-col items-center justify-center text-center bg-blue-600 text-white px-6 py-3.5 rounded font-[sans-serif]">
      <p class="text-base">Limited Time Offer: Get 20% Off!</p>

      <div class="flex gap-2">
        <button type="button" class="bg-white text-blue-500 py-2.5 px-5 rounded text-sm hover:underline">
          Learn More
        </button>
      </div>
    </div>
       
            <div class="font-sans bg-gray-800 px-6 py-12 overflow-hidden">
                <div class="max-w-7xl max-md:max-w-md mx-auto">
                    <div class="grid md:grid-cols-2 items-center gap-12">
                        <div>
                            <h2 class="text-white lg:text-5xl md:text-4xl text-3xl font-bold mb-4 lg:!leading-[55px]">All your business finances in one app.</h2>
                            <p class="text-white mt-6 text-base leading-relaxed">Explore a curated collection of ready-to-use components and design blocks, empowering you to create stunning, responsive interfaces with ease. Streamline your workflow, amplify your creativity, and discover the future of web development, all at your fingertips.</p>
                            <div class="mt-12">
                                <button type='button'
                                    class="bg-white hover:bg-gray-100 transition-all text-gray-800 font-bold text-sm rounded px-5 py-3">Getting Started</button>
                                <a href="javascript:void(0)" class="text-white text-sm font-bold underline sm:ml-6 max-sm:mt-4 max-sm:block whitespace-nowrap">API Documentation</a>
                            </div>
                        </div>

                        <div>
                            <img src='https://readymadeui.com/readymadeui_banner.webp' class="shrink-0 w-full h-full md:skew-x-[-22deg] md:-rotate-1 rounded-md object-contain" />
                        </div>
                    </div>
                </div>
            </div>
            <div class="font-[sans-serif] bg-gray-800 py-20 px-6">
                <div class="max-w-4xl mx-auto text-center">
                    <h2 class="md:text-5xl text-3xl font-bold md:!leading-[55px] text-white">Supercharge your website with Tailwind readymadeui.</h2>
                    <p class="mt-6 text-sm leading-relaxed text-gray-300">Indulge in a symphony of flavors as we curate culinary masterpieces designed to tantalize your taste buds. Our dishes, meticulously crafted with passion and precision, promise to transform your dining experience into a gastronomic journey.</p>
                </div>

                <div class="xl:max-w-7xl max-w-5xl mx-auto mt-12">
                    <div class="grid xl:grid-cols-4 md:grid-cols-2 gap-6">
                        <div class="p-6 bg-gray-300 rounded">
                            <h3 class="text-gray-800 text-xl font-bold mb-4">Customization</h3>
                            <p class="text-sm text-gray-600">Qui elit labore in nisi dolore tempor anim laboris ipsum ad ad consequat id. Dolore et sint mollit in nisi tempor culpa consectetur.</p>
                            <button class="text-sm text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 tracking-wide mt-6 rounded">Read More</button>
                        </div>
                        <div class="p-6 bg-gray-300 rounded">
                            <h3 class="text-gray-800 text-xl font-bold mb-4">Security</h3>
                            <p class="text-sm text-gray-600">Qui elit labore in nisi dolore tempor anim laboris ipsum ad ad consequat id. Dolore et sint mollit in nisi tempor culpa consectetur.</p>
                            <button class="text-sm text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 tracking-wide mt-6 rounded">Read More</button>
                        </div>
                        <div class="p-6 bg-gray-300 rounded">
                            <h3 class="text-gray-800 text-xl font-bold mb-4">Performance</h3>
                            <p class="text-sm text-gray-600">Qui elit labore in nisi dolore tempor anim laboris ipsum ad ad consequat id. Dolore et sint mollit in nisi tempor culpa consectetur.</p>
                            <button class="text-sm text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 tracking-wide mt-6 rounded">Read More</button>
                        </div>
                        <div class="p-6 bg-gray-300 rounded">
                            <h3 class="text-gray-800 text-xl font-bold mb-4">Support</h3>
                            <p class="text-sm text-gray-600">Qui elit labore in nisi dolore tempor anim laboris ipsum ad ad consequat id. Dolore et sint mollit in nisi tempor culpa consectetur.</p>
                            <button class="text-sm text-white bg-orange-500 hover:bg-orange-600 px-4 py-2 tracking-wide mt-6 rounded">Read More</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

    )
}

export default Hero
