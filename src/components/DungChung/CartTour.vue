
<template>
    <div class="rounded-2xl p-[10px] border border-color-3 bg-white overflow-hidden cart-tour hover:border-color-1 transition-all duration-200">
        <div class="mb-2 overflow-hidden relative">
            <img src="https://res.cloudinary.com/dsxkwbfyq/image/upload/v1726751636/Web_Travel/sp2_xlmpuk.jpg" alt="Image" 
            class="rounded-lg w-full h-full transition-all duration-200">
            <!-- <div class="absolute bottom-0 right-0 z-10 flex justify-center items-center">
                    <div class="w-7 h-7 inline-flex justify-center items-center" style="background: rgba(0, 0, 0, 0.4);">
                        <v-icon name="fa-bus" class="text-white" scale="1.2" />
                    </div> 
                </div> -->
                <div class="absolute bottom-0 right-0 z-10 flex justify-center items-center">
                    <div class="w-7 h-7 inline-flex justify-center items-center" style="background: rgba(0, 0, 0, 0.4);">
                        <v-icon name="fa-plane" class="text-white" scale="1.2" />
                    </div> 
                </div>
        </div>
        <div>
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
            <div class="mb-1 text-base text-color-1 font-bold">15.000.000<sup>₫</sup></div>
            <div class="text-color-8 flex items-center gap-2 mb-1 text-sm">
                <v-icon name="fa-regular-clock"/>
                <p>Thời gian: 5N4Đ</p>
            </div>
        </div>
    </div>
</template>
