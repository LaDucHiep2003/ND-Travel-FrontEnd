

<template>
    <div class="flex-1">
        <div class="pb-3 border-b border-color-3 flex justify-between items-center">
            <div class="flex justify-start items-center gap-2">
                <div class="border border-color-1 flex justify-center items-center h-8 w-8 rounded-lg">
                    <v-icon name="fa-list-ul" class="text-color-1" scale="1.1" />
                </div>
                <div class="border border-color-2 h-8 w-8 rounded-lg flex justify-center items-center">
                    <v-icon name="fa-th-large" class="text-color-3"/>
                </div>
            </div>
            <div class="flex items-center gap-3">
                <div class="text-sm">Sắp xếp theo</div>
                <el-select v-model="value" placeholder="Select" style="width: 150px" >
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    />
                </el-select>
            </div>
        </div>
        <div class="mt-5">
            <div class="md:flex items-center gap-3 rounded-2xl p-[10px] mb-5 border border-color-3 bg-white overflow-hidden cart-tour hover:border-color-1 transition-all duration-200">
                <div class="mb-2 overflow-hidden md:w-1/3 relative">
                    <img src="https://res.cloudinary.com/dsxkwbfyq/image/upload/v1726751636/Web_Travel/sp2_xlmpuk.jpg" alt="Image" 
                        class="rounded-lg w-full h-full transition-all duration-200">
                    <div class="absolute top-2 right-2 z-10 flex justify-center items-center">
                        <div class="w-7 h-7 inline-flex rounded-md justify-center items-center " style="background: rgba(0, 0, 0, 0.4);">
                            <v-icon name="fa-regular-heart" class="text-white" />
                        </div> 
                    </div>
                    <div class="absolute bottom-0 right-0 z-10 flex justify-center items-center">
                        <div class="w-7 h-7 inline-flex justify-center items-center" style="background: rgba(0, 0, 0, 0.4);">
                            <v-icon name="fa-bus" class="text-white" scale="1.2" />
                        </div> 
                    </div>
                    <!-- <div class="absolute bottom-0 right-0 z-10 flex justify-center items-center">
                        <div class="w-7 h-7 inline-flex justify-center items-center" style="background: rgba(0, 0, 0, 0.4);">
                            <v-icon name="fa-plane" class="text-white" scale="1.2" />
                        </div> 
                    </div> -->
                </div>
                
                <div class="flex-1">
                    <div class="flex justify-between gap-2">
                        <div>
                            <div class="text-color-8">Mã tour: ND006</div>
                            <div class="text-base font-bold text-color-6 mb-1 hover:text-color-1 transition-all duration-100">HCM - Seoul - Đảo Nami - Trượt Tuyết Elysian 5N4Đ</div>
                            <div class="mb-1 text-color-1">
                                <v-icon name="fa-regular-star" />
                                <v-icon name="fa-regular-star" />
                                <v-icon name="fa-regular-star" />
                                <v-icon name="fa-regular-star" />
                                <v-icon name="fa-regular-star" />
                            </div>
                            <div class="text-color-8 flex items-center gap-2 mb-1 text-sm">
                                <v-icon name="fa-regular-clock"/>
                                <p>Thời gian: 5N4Đ</p>
                            </div>
                        </div>
                        <div>
                            <div class="text-color-8 flex items-center gap-2 mb-1">
                                <v-icon name="fa-map-marker-alt"/>
                                <div>Khởi hành từ: HCM</div>
                            </div>
                            <div class="text-base text-color-1 font-bold">15.000.000<sup>₫</sup></div>
                            <RouterLink :to="{ name : 'chi-tiet-tour'}" class="mt-5">
                                <button class="h-11 w-52 flex justify-center items-center text-color-1 text-base border border-color-1 rounded-xl
                                    hover:text-white hover:bg-color-1 transition-all duration-300 mx-auto">
                                    <p>Xem chi tiết</p>
                                </button>
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:flex items-center gap-3 rounded-2xl p-[10px] mb-5 border border-color-3 bg-white overflow-hidden cart-tour hover:border-color-1 transition-all duration-200">
                <div class="mb-2 overflow-hidden md:w-1/3 relative">
                    <img src="https://res.cloudinary.com/dsxkwbfyq/image/upload/v1726751636/Web_Travel/sp2_xlmpuk.jpg" alt="Image" 
                        class="rounded-lg w-full h-full transition-all duration-200">
                    <span class="absolute top-2 left-2 bg-bg-1 bg-no-repeat text-xs rounded text-white h-6 w-12 text-center flex justify-center items-center font-bold">-50%</span>
                </div>
                <div class="flex-1">
                    <div class="flex justify-between gap-2">
                        <div>
                            <div class="text-color-8">Mã tour: ND006</div>
                            <div class="text-base font-bold text-color-6 mb-1 hover:text-color-1 transition-all duration-100">HCM - Seoul - Đảo Nami - Trượt Tuyết Elysian 5N4Đ</div>
                            <div class="mb-1 text-color-1">
                                <v-icon name="fa-regular-star" />
                                <v-icon name="fa-regular-star" />
                                <v-icon name="fa-regular-star" />
                                <v-icon name="fa-regular-star" />
                                <v-icon name="fa-regular-star" />
                            </div>
                            <div class="text-color-8 flex items-center gap-2 mb-1 text-sm">
                                <v-icon name="fa-regular-clock"/>
                                <p>Thời gian: 5N4Đ</p>
                            </div>
                        </div>
                        <div>
                            <div class="text-color-8 flex items-center gap-2 mb-1">
                                <v-icon name="fa-map-marker-alt"/>
                                <div>Khởi hành từ: HCM</div>
                            </div>
                            <div class="text-base text-color-1 font-bold">15.000.000<sup>₫</sup></div>
                            <div class="mt-5">
                                <button class="h-11 w-52 flex justify-center items-center text-color-1 text-base border border-color-1 rounded-xl
                                    hover:text-white hover:bg-color-1 transition-all duration-300 mx-auto">
                                    <p>Xem chi tiết</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:flex items-center gap-3 rounded-2xl p-[10px] mb-5 border border-color-3 bg-white overflow-hidden cart-tour hover:border-color-1 transition-all duration-200">
                <div class="mb-2 overflow-hidden md:w-1/3 relative">
                    <img src="https://res.cloudinary.com/dsxkwbfyq/image/upload/v1726751636/Web_Travel/sp2_xlmpuk.jpg" alt="Image" 
                        class="rounded-lg w-full h-full transition-all duration-200">
                    <span class="absolute top-2 left-2 bg-bg-1 bg-no-repeat text-xs rounded text-white h-6 w-12 text-center flex justify-center items-center font-bold">-50%</span>
                </div>
                <div class="flex-1">
                    <div class="flex justify-between gap-2">
                        <div>
                            <div class="text-color-8">Mã tour: ND006</div>
                            <div class="text-base font-bold text-color-6 mb-1 hover:text-color-1 transition-all duration-100">HCM - Seoul - Đảo Nami - Trượt Tuyết Elysian 5N4Đ</div>
                            <div class="mb-1 text-color-1">
                                <v-icon name="fa-regular-star" />
                                <v-icon name="fa-regular-star" />
                                <v-icon name="fa-regular-star" />
                                <v-icon name="fa-regular-star" />
                                <v-icon name="fa-regular-star" />
                            </div>
                            <div class="text-color-8 flex items-center gap-2 mb-1 text-sm">
                                <v-icon name="fa-regular-clock"/>
                                <p>Thời gian: 5N4Đ</p>
                            </div>
                        </div>
                        <div>
                            <div class="text-color-8 flex items-center gap-2 mb-1">
                                <v-icon name="fa-map-marker-alt"/>
                                <div>Khởi hành từ: HCM</div>
                            </div>
                            <div class="text-base text-color-1 font-bold">15.000.000<sup>₫</sup></div>
                            <div class="mt-5">
                                <button class="h-11 w-52 flex justify-center items-center text-color-1 text-base border border-color-1 rounded-xl
                                    hover:text-white hover:bg-color-1 transition-all duration-300 mx-auto">
                                    <p>Xem chi tiết</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:flex items-center gap-3 rounded-2xl p-[10px] mb-5 border border-color-3 bg-white overflow-hidden cart-tour hover:border-color-1 transition-all duration-200">
                <div class="mb-2 overflow-hidden md:w-1/3 relative">
                    <img src="https://res.cloudinary.com/dsxkwbfyq/image/upload/v1726751636/Web_Travel/sp2_xlmpuk.jpg" alt="Image" 
                        class="rounded-lg w-full h-full transition-all duration-200">
                    <span class="absolute top-2 left-2 bg-bg-1 bg-no-repeat text-xs rounded text-white h-6 w-12 text-center flex justify-center items-center font-bold">-50%</span>
                </div>
                <div class="flex-1">
                    <div class="flex justify-between gap-2">
                        <div>
                            <div class="text-color-8">Mã tour: ND006</div>
                            <div class="text-base font-bold text-color-6 mb-1 hover:text-color-1 transition-all duration-100">HCM - Seoul - Đảo Nami - Trượt Tuyết Elysian 5N4Đ</div>
                            <div class="mb-1 text-color-1">
                                <v-icon name="fa-regular-star" />
                                <v-icon name="fa-regular-star" />
                                <v-icon name="fa-regular-star" />
                                <v-icon name="fa-regular-star" />
                                <v-icon name="fa-regular-star" />
                            </div>
                            <div class="text-color-8 flex items-center gap-2 mb-1 text-sm">
                                <v-icon name="fa-regular-clock"/>
                                <p>Thời gian: 5N4Đ</p>
                            </div>
                        </div>
                        <div>
                            <div class="text-color-8 flex items-center gap-2 mb-1">
                                <v-icon name="fa-map-marker-alt"/>
                                <div>Khởi hành từ: HCM</div>
                            </div>
                            <div class="text-base text-color-1 font-bold">15.000.000<sup>₫</sup></div>
                            <div class="mt-5">
                                <button class="h-11 w-52 flex justify-center items-center text-color-1 text-base border border-color-1 rounded-xl
                                    hover:text-white hover:bg-color-1 transition-all duration-300 mx-auto">
                                    <p>Xem chi tiết</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="md:flex items-center gap-3 rounded-2xl p-[10px] mb-5 border border-color-3 bg-white overflow-hidden cart-tour hover:border-color-1 transition-all duration-200">
                <div class="mb-2 overflow-hidden md:w-1/3 relative">
                    <img src="https://res.cloudinary.com/dsxkwbfyq/image/upload/v1726751636/Web_Travel/sp2_xlmpuk.jpg" alt="Image" 
                        class="rounded-lg w-full h-full transition-all duration-200">
                    <span class="absolute top-2 left-2 bg-bg-1 bg-no-repeat text-xs rounded text-white h-6 w-12 text-center flex justify-center items-center font-bold">-50%</span>
                </div>
                <div class="flex-1">
                    <div class="flex justify-between gap-2">
                        <div>
                            <div class="text-color-8">Mã tour: ND006</div>
                            <div class="text-base font-bold text-color-6 mb-1 hover:text-color-1 transition-all duration-100">HCM - Seoul - Đảo Nami - Trượt Tuyết Elysian 5N4Đ</div>
                            <div class="mb-1 text-color-1">
                                <v-icon name="fa-regular-star" />
                                <v-icon name="fa-regular-star" />
                                <v-icon name="fa-regular-star" />
                                <v-icon name="fa-regular-star" />
                                <v-icon name="fa-regular-star" />
                            </div>
                            <div class="text-color-8 flex items-center gap-2 mb-1 text-sm">
                                <v-icon name="fa-regular-clock"/>
                                <p>Thời gian: 5N4Đ</p>
                            </div>
                        </div>
                        <div>
                            <div class="text-color-8 flex items-center gap-2 mb-1">
                                <v-icon name="fa-map-marker-alt"/>
                                <div>Khởi hành từ: HCM</div>
                            </div>
                            <div class="text-base text-color-1 font-bold">15.000.000<sup>₫</sup></div>
                            <div class="mt-5">
                                <button class="h-11 w-52 flex justify-center items-center text-color-1 text-base border border-color-1 rounded-xl
                                    hover:text-white hover:bg-color-1 transition-all duration-300 mx-auto">
                                    <p>Xem chi tiết</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Pagination />
    </div>

</template>

<script setup>
    import CartTourNgang from '@/components/DungChung/CartTourNgang.vue';
    import Pagination from '@/components/DungChung/Pagination.vue';
    import { ref } from 'vue';

    
    const options = [
        {
            value: 'Option1',
            label: 'Mặc định',
        },
        {
            value: 'Option2',
            label: 'A -> Z',
        },
        {
            value: 'Option3',
            label: 'Z -> A',
        },
    ]
    const value = ref(options[0])
</script>