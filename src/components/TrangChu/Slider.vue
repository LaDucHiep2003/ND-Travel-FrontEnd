

<template>
    <div>
        <img src="https://res.cloudinary.com/dsxkwbfyq/image/upload/v1725810519/Web_Travel/slider_1_mhao0o.png" alt="">
    </div>
    <div class="container mx-auto mt-[-50px] slider max-md:mt-8">
        <div class="p-6 bg-white border-2 border-color-1 rounded-lg flex justify-between items-center z-20 relative max-lg:flex-wrap">
            <input type="text" class="outline-none border border-color-1 px-3 h-11 rounded-lg text-sm max-md:w-full max-md:mb-2" placeholder="Bạn muốn đi đâu?">
            <div class="flex justify-between items-center gap-5 max-md:mb-2">
                <div class="p-2 bg-color-2 inline-block rounded-2xl">
                    <v-icon name="fa-map-marker-alt" scale="1.5" class="text-color-1" />
                </div>
                <div class="relative location">
                    <input type="text" class="outline-none border border-color-1 px-3 h-11 rounded-lg text-sm" placeholder="Chọn điểm đi" readonly>
                    <div class="absolute p-3 border border-color-1 rounded-lg w-full bg-white hidden z-20">
                        <input type="text" class="outline-none border border-color-1 text-base px-3 h-11 rounded-lg w-full" placeholder="Thành phố">
                        <ul class="text-color-5 mt-2 text-sm">
                            <li class="hover:text-color-1">Hà Nội</li>
                            <li class="hover:text-color-1">Hồ Chí Minh</li>
                            <li class="hover:text-color-1">Đà Nẵng</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="flex items-center gap-5 max-md:mb-2">
                <div class="p-2 bg-color-2 inline-block rounded-2xl">
                    <v-icon name="fa-map-marker-alt" scale="1.5" class="text-color-1" />
                </div>
                <div class="relative location">
                    <input type="text" class="outline-none border border-color-1 px-3 h-11 rounded-lg text-sm" placeholder="Chọn điểm đến" readonly>
                    <div class="absolute p-3 border border-color-1 rounded-lg w-full bg-white hidden z-20">
                        <input type="text" class="outline-none border border-color-1 text-base px-3 h-11 rounded-lg w-full" placeholder="Thành phố">
                        <ul class="text-color-5 mt-2 text-sm">
                            <li class="hover:text-color-1">Hà Nội</li>
                            <li class="hover:text-color-1">Hồ Chí Minh</li>
                            <li class="hover:text-color-1">Đà Nẵng</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="flex items-center gap-5 max-md:mb-2">
                <div class="p-2 bg-color-2 inline-block rounded-2xl">
                    <v-icon name="fa-calendar-alt" scale="1.5" class="text-color-1" />
                </div>
                <div class="demo-date-picker">
                    <div class="block">
                        <el-date-picker
                            v-model="dataDate"
                            type="date"
                            placeholder="Chọn ngày đi"
                            size="default"
                        />
                    </div>
                </div>
            </div>
            <button class="px-3 h-11 bg-color-1 text-white rounded-lg text-sm max-md:w-full">Tìm kiếm</button>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';


    const dataDate = ref('')
</script>