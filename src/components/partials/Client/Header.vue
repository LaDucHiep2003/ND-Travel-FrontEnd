
<template>
    <div class="container mx-auto py-3">
        <div class="flex justify-between items-center">
            <RouterLink :to="{ name : 'Home' }">
                <img src="https://res.cloudinary.com/dsxkwbfyq/image/upload/v1725807628/Web_Travel/logo_rrgexo.png" alt="Logo">
            </RouterLink>
            <div class="max-lg:hidden">
                <ul class="flex justify-between items-center gap-3">
                    <RouterLink :to="{ name : 'Home'}" class="py-2 text-base px-4 hover:bg-color-2 hover:text-color-1 rounded-lg" active-class="bg-color-2 text-color-1" >Trang chủ</RouterLink>
                    <li class="inline-block">
                        <el-dropdown placement="bottom-start">
                            <RouterLink :to="{ name : 'gioi-thieu'}" class="py-2 text-base px-4 hover:bg-color-2 hover:text-color-1 rounded-lg" active-class="bg-color-2 text-color-1" > Giới thiệu </RouterLink>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <RouterLink :to="{ name : 'bao-hiem-tour'}"><el-dropdown-item>Bảo hiểu tour</el-dropdown-item></RouterLink>
                                    <RouterLink :to="{ name : 'visa'}"><el-dropdown-item>Visa</el-dropdown-item></RouterLink>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </li>
                    <li class="inline-block">
                        <el-dropdown placement="bottom-start">
                            <RouterLink :to="{ name : 'danh-sach-san-pham'}" active-class="bg-color-2 text-color-1" class="py-2 text-base px-4 hover:bg-color-2 hover:text-color-1 rounded-lg"> Tour du lịch </RouterLink>
                            <template #dropdown>
                                <el-dropdown-menu>
                                    <div class="grid grid-cols-2 py-5 px-4 gap-10 text-color-4">
                                        <div>
                                            <div class="font-semibold text-base hover:text-color-1">Tour trong nước</div>
                                            <div class="text-sm mt-2 hover:text-color-1">Phú Quốc</div>
                                            <div class="text-sm mt-2 hover:text-color-1">Nha Trang</div>
                                            <div class="text-sm mt-2 hover:text-color-1">Đà Nẵng</div>
                                        </div>
                                        <div>
                                            <div class="font-semibold text-base hover:text-color-1">Tour nước ngoài</div>
                                            <div class="text-sm mt-2 hover:text-color-1">Hàn quốc</div>
                                            <div class="text-sm mt-2 hover:text-color-1">Trung quốc</div>
                                            <div class="text-sm mt-2 hover:text-color-1">Thái lan</div>
                                        </div>
                                    </div>
                                </el-dropdown-menu>
                            </template>
                        </el-dropdown>
                    </li>
                    <!-- <li>Tour du lịch</li> -->
                    <li class="inline-block">
                        <RouterLink :to="{ name : 'tin-tuc'}" class="py-2 px-4 text-base hover:bg-color-2 hover:text-color-1  rounded-lg" active-class="bg-color-2 text-color-1">Tin tức</RouterLink>
                    </li>
                    <li class="inline-block">
                        <RouterLink :to="{ name : 'faqs'}" class="py-2 px-4 text-base hover:bg-color-2 hover:text-color-1  rounded-lg" active-class="bg-color-2 text-color-1" >Faqs</RouterLink>
                    </li>
                    <li class="inline-block">
                        <RouterLink :to="{ name : 'lien-he'}" class="py-2 px-4 text-base hover:bg-color-2 hover:text-color-1  rounded-lg" active-class="bg-color-2 text-color-1" >Liên hệ</RouterLink>
                    </li>
                    
                </ul>
            </div>
            <div class="flex justify-end items-center">
                <div class="px-3 border-r border-color-3">
                    <v-icon name="fa-search" class="text-color-1" scale="1.5"/>
                </div>
                <div class="px-3 border-r border-color-3 relative user-header">
                    <v-icon name="fa-regular-user-circle" class="text-color-1 hover:opacity-70" scale="1.5"/>
                    <div class="absolute w-32 top-full right-0 bg-white text-center z-[999] shadow-box-2 opacity-0 invisible subnav">
                        <RouterLink :to="{ name : 'dang-nhap'}">
                            <div class="leading-8 border-b border-color-3 hover:text-color-1">Đăng nhập</div>
                        </RouterLink>
                        <RouterLink :to="{ name : 'dang-nhap'}">
                            <div class="leading-8 border-b border-color-3 hover:text-color-1">Đăng kí</div>
                        </RouterLink>
                        <RouterLink :to="{ name : 'dang-nhap'}">
                            <div class="leading-8 border-b border-color-3 hover:text-color-1">Giỏ hàng</div>
                        </RouterLink>
                        <RouterLink :to="{ name : 'dang-nhap'}">
                            <div class="leading-8 border-b border-color-3 hover:text-color-1">Tour yêu thích</div>
                        </RouterLink>
                    </div>
                </div>
                <RouterLink :to="{ name : 'gio-hang'}" class="px-3 border-r border-color-3">
                    <v-icon name="fa-shopping-basket" class="text-color-1" scale="1.5" />
                </RouterLink>
                
                <div class="px-3 flex items-center gap-1 max-lg:hidden">
                    <v-icon name="fa-headset" scale="1.5" class="text-color-1" />
                    <div>
                        <div>Hotline</div>
                        <div class="text-color-1 font-semibold">1900 2069</div>
                    </div>
                </div>
                <div class="px-3 lg:hidden">
                    <v-icon name="fa-stream" class="text-color-1" scale="1.3" />
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { RouterLink } from 'vue-router';
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>