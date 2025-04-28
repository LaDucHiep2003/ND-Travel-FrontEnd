

<template>
    <div class="w-1/4">
        <div class=" bg-white border border-color-3 p-3 rounded-2xl">
            <div class="sticky top-0">
                <div class="text-lg font-semibold text-color-1 h-10 px-5 bg-color-2 inline-flex rounded-xl justify-center 
                        items-center hover:bg-color-1 hover:text-white mb-2">Danh mục tour</div>
                <div>
                    <el-collapse>
                        <el-collapse-item title="Tour trong nước" name="1">
                            <div class="hover:text-color-1">
                                Phú Quốc
                            </div>
                            <div class="hover:text-color-1">
                                Nha Trang
                            </div class="hover:text-color-1">
                            <div>Đà Nẵng</div>
                        </el-collapse-item>
                    </el-collapse>
                    <el-collapse>
                        <el-collapse-item title="Tour nước ngoài" name="2">
                            <div class="hover:text-color-1">
                                Hàn Quốc
                            </div>
                            <div class="hover:text-color-1">
                                Trung Quốc
                            </div class="hover:text-color-1">
                            <div>Thái Lan</div>
                        </el-collapse-item>
                    </el-collapse>
                </div>
            </div>
        </div>
        <div class=" bg-white border border-color-3 p-3 rounded-2xl mt-5">
            <div>
                <div class="border-b border-color-3 pb-2">
                <div class="text-xl font-semibold text-color-1 h-12 px-5 bg-color-2 inline-flex rounded-xl justify-center 
                    items-center hover:bg-color-1 hover:text-white">Cẩm nang du lịch</div>
            </div>
            </div>
            <div class="flex items-start gap-2 py-2">
                <img src="https://res.cloudinary.com/dsxkwbfyq/image/upload/v1726844320/Web_Travel/t6-727933d9-27d2-4ca1-9fb3-53e88ede2fb7_cxgwqi.jpg" alt="Image" class="h-auto w-24">
                <div class="flex-1">
                    <div class="min-h-10 text-color-4 line-clamp-2 text-sm my-3 hover:text-color-1 transition-all duration-200">Du lịch Đà Lạt - Cẩm nang từ A đến Z (update thông tin mới nhất năm 2023)</div>
                </div>
            </div>
            <div class="flex items-start gap-2 pb-2">
                <img src="https://res.cloudinary.com/dsxkwbfyq/image/upload/v1726844320/Web_Travel/t6-727933d9-27d2-4ca1-9fb3-53e88ede2fb7_cxgwqi.jpg" alt="Image" class="h-auto w-24">
                <div class="flex-1">
                    <div class="min-h-10 text-color-4 line-clamp-2 text-sm my-3 hover:text-color-1 transition-all duration-200">Du lịch Đà Lạt - Cẩm nang từ A đến Z (update thông tin mới nhất năm 2023)</div>
                </div>
            </div>

        </div>
    </div>
</template>