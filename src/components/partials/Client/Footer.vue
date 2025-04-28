

<template>
    <div class="container mx-auto py-10 footer">
        <div class="grid grid-cols-4 text-color-4 max-md:grid-cols-1">
            <div>
                <div class="font-semibold uppercase tracking-wide text-lg">Thông tin liên hệ</div>
                <div class="my-2">
                    <div class="font-semibold">Địa chỉ</div>
                    <div class="text-sm">Tòa nhà 245</div>
                </div>
                <div class="my-2">
                    <div class="font-semibold">Email</div>
                    <div class="text-sm">duchiep045@gmail.com</div>
                </div>
                <div class="my-2">
                    <div class="font-semibold">Hotline</div>
                    <div class="text-sm">1900 2069</div>
                </div>
                <div class="my-2">
                    <div class="font-semibold">Thời gian hỗ trợ</div>
                    <div class="text-sm">8h - 22h hàng ngày</div>
                </div>
            </div>
            <div class="demo-collapse md:hidden">
                <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="Hướng dẫn" name="1" class="font-semibold uppercase tracking-wide text-lg">
                    <div class="text-sm my-2">Trang chủ</div>
                    <div class="text-sm my-2">Giới thiệu</div>
                    <div class="text-sm my-2">Tour du lịch</div>
                    <div class="text-sm my-2">Tin tức</div>
                    <div class="text-sm my-2">Faqs</div>
                    <div class="text-sm my-2">Liên hệ</div>
                </el-collapse-item>
                </el-collapse>
            </div>
            <div class="demo-collapse md:hidden">
                <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="Thông tin cần biết" name="2" class="font-semibold uppercase tracking-wide text-lg">
                    <div class="text-sm my-2">Về chúng tôi</div>
                    <div class="text-sm my-2">Câu hỏi thường gặp</div>
                    <div class="text-sm my-2">Điều kiện, điều khoản</div>
                    <div class="text-sm my-2">Quy chế hoạt động</div>
                    <div class="text-sm my-2">Liên hệ</div>
                </el-collapse-item>
                </el-collapse>
            </div>
            <div class="demo-collapse md:hidden">
                <el-collapse v-model="activeNames" @change="handleChange">
                <el-collapse-item title="Kết nối" name="3" class="font-semibold uppercase tracking-wide text-lg">
                    <div class="flex justify-start gap-3 my-2">
                        <v-icon name="fa-facebook" scale="1.5" />
                        <v-icon name="fa-youtube" scale="1.5" />
                        <v-icon name="fa-twitter" scale="1.5" />
                        <v-icon name="fa-instagram" scale="1.5"  />
                        <v-icon name="fa-google" scale="1.5" />
                    </div>
                    <div class="font-semibold uppercase tracking-wide text-lg mt-5">Tải ứng dụng ND Travel</div>
                    <div class="flex justify-start items-center gap-5 mt-3">
                        <img src="https://res.cloudinary.com/dsxkwbfyq/image/upload/v1723816581/upload/zqua2doi7afzuqzixffu.png" alt="Image">
                        <img src="https://res.cloudinary.com/dsxkwbfyq/image/upload/v1723816581/upload/zqua2doi7afzuqzixffu.png" alt="Image">
                    </div>

                    <div class="font-semibold uppercase tracking-wide text-lg mt-5">Phương thức thanh toán</div>
                    <div class="flex justify-start items-center gap-5 mt-3">
                        <img src="https://res.cloudinary.com/dsxkwbfyq/image/upload/v1723816581/upload/zqua2doi7afzuqzixffu.png" alt="Image">
                        <img src="https://res.cloudinary.com/dsxkwbfyq/image/upload/v1723816581/upload/zqua2doi7afzuqzixffu.png" alt="Image">
                    </div>
                </el-collapse-item>
                </el-collapse>
            </div>
            <div class="max-md:hidden">
                <div class="font-semibold uppercase tracking-wide text-lg">Hướng dẫn</div>
                <div class="text-sm my-2">Trang chủ</div>
                <div class="text-sm my-2">Giới thiệu</div>
                <div class="text-sm my-2">Tour du lịch</div>
                <div class="text-sm my-2">Tin tức</div>
                <div class="text-sm my-2">Faqs</div>
                <div class="text-sm my-2">Liên hệ</div>
            </div>
            <div class="max-md:hidden">
                <div class="font-semibold uppercase tracking-wide text-lg">Thông tin cần biết</div>
                <div class="text-sm my-2">Về chúng tôi</div>
                <div class="text-sm my-2">Câu hỏi thường gặp</div>
                <div class="text-sm my-2">Điều kiện, điều khoản</div>
                <div class="text-sm my-2">Quy chế hoạt động</div>
                <div class="text-sm my-2">Liên hệ</div>
            </div>
            <div class="max-md:hidden">
                <div class="font-semibold uppercase tracking-wide text-lg">Kết nối</div>
                <div class="flex justify-start gap-3 my-2">
                    <v-icon name="fa-facebook" scale="1.5" />
                    <v-icon name="fa-youtube" scale="1.5" />
                    <v-icon name="fa-twitter" scale="1.5" />
                    <v-icon name="fa-instagram" scale="1.5"  />
                    <v-icon name="fa-google" scale="1.5" />
                </div>
                <div class="font-semibold uppercase tracking-wide text-lg mt-5">Tải ứng dụng ND Travel</div>
                <div class="flex justify-start items-center gap-5 mt-3">
                    <img src="https://res.cloudinary.com/dsxkwbfyq/image/upload/v1723816581/upload/zqua2doi7afzuqzixffu.png" alt="Image">
                    <img src="https://res.cloudinary.com/dsxkwbfyq/image/upload/v1723816581/upload/zqua2doi7afzuqzixffu.png" alt="Image">
                </div>

                <div class="font-semibold uppercase tracking-wide text-lg mt-5">Phương thức thanh toán</div>
                <div class="flex justify-start items-center gap-5 mt-3">
                    <img src="https://res.cloudinary.com/dsxkwbfyq/image/upload/v1723816581/upload/zqua2doi7afzuqzixffu.png" alt="Image">
                    <img src="https://res.cloudinary.com/dsxkwbfyq/image/upload/v1723816581/upload/zqua2doi7afzuqzixffu.png" alt="Image">
                </div>
            </div>
        </div>
    </div>
    <div class="fixed bottom-10 left-4 top-auto z-[999] w-12 h-12 flex justify-center items-center rounded-[50%] bg-color-1 max-md:bottom-[70px] max-md:h-9 max-md:w-9">
        <div class="relative z-10">
            <v-icon name="fa-bell" scale="1.5" class="text-white" animation="ring" />
        </div>
        <div class="absolute z-50 rounded-xl hidden bg-color-1 text-white px-3 pt-5 pb-8 w-72 bottom-9 left-5" style="box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);">
                
        </div>
    </div>
    <div class="fixed flex-col bottom-10 right-4 top-auto z-[999] max-md:bottom-[70px]">
        <div class="w-12 h-12 flex justify-center items-center rounded-[50%] bg-red-500 mb-2 max-md:h-9 max-md:w-9">
            <v-icon name="fa-phone-alt" scale="1.5" class="text-white" />
        </div>
        <div class="w-12 h-12 flex justify-center items-center rounded-[50%] bg-color-1 mb-2 max-md:h-9 max-md:w-9">
            <v-icon name="fa-telegram-plane" scale="1.5" class="text-white" />
        </div>
        <div class="w-12 h-12 flex justify-center items-center rounded-[50%] bg-color-1 mb-2 max-md:h-9 max-md:w-9">
            <v-icon name="fa-facebook-messenger" scale="1.5" class="text-white" />
        </div>
        <div class="w-12 h-12 flex justify-center items-center rounded-[50%] bg-color-1 mb-2 max-md:h-9 max-md:w-9">
            <v-icon name="fa-instagram" scale="1.5" class="text-white" />
        </div>
        <div
            class="w-12 h-12 flex justify-center items-center rounded-[50%] bg-color-1 mb-2 max-md:h-9 max-md:w-9"
            @click="scrollToTop"
        >
            <v-icon name="fa-angle-up" scale="1.5" class="text-white" />
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const activeNames = ref(['1'])
const handleChange = (val: string[]) => {
  console.log(val)
}
const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
}
</script>