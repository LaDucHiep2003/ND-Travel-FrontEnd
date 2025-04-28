
<template>
    <div class="md:flex items-center gap-3 rounded-2xl p-[10px] mb-5 border border-color-3 bg-white overflow-hidden cart-tour hover:border-color-1 transition-all duration-200">
        <div class="mb-2 overflow-hidden md:w-1/2 relative">
            <img src="https://res.cloudinary.com/dsxkwbfyq/image/upload/v1726751636/Web_Travel/sp2_xlmpuk.jpg" alt="Image" 
                 class="rounded-lg w-full h-full transition-all duration-200">
            <span class="absolute top-2 left-2 bg-bg-1 bg-no-repeat text-xs rounded text-white h-6 w-12 text-center flex justify-center items-center font-bold">-50%</span>
        </div>
        <div class="flex-1">
            <div class="text-color-8 flex items-center gap-2 mb-1">
                <v-icon name="fa-map-marker-alt"/>
                <div>Khởi hành từ: HCM</div>
            </div>
            <div class="text-base font-bold text-color-6 mb-1 hover:text-color-1 transition-all duration-100">HCM - Seoul - Đảo Nami - Trượt Tuyết Elysian 5N4Đ</div>
            <div class="mb-1 text-color-1">
                <v-icon name="fa-regular-star" />
                <v-icon name="fa-regular-star" />
                <v-icon name="fa-regular-star" />
                <v-icon name="fa-regular-star" />
                <v-icon name="fa-regular-star" />
            </div>
            <div class="mb-1 flex items-center gap-2">
                <div class="text-base text-color-1 font-bold">15.000.000<sup>₫</sup></div>
                <del class="text-xs text-color-8">15.000.000<sup>₫</sup></del>
            </div>
            <div class="text-color-8 flex items-center gap-2 mb-1 text-sm">
                <v-icon name="fa-regular-clock"/>
                <p>Thời gian: 5N4Đ</p>
            </div>
        </div>
    </div>
</template>
