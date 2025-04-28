
<template>
    <BreadCrumb />
    <div class="flex justify-center items-center py-10 login">
        <div class="p-6 border border-color-3 text-center rounded-xl w-[400px]">
            <div class="text-2xl uppercase font-semibold tracking-wider">Đăng ký</div>
            <div class="mt-2">Đã có tài khoản đăng nhập, <RouterLink :to="{ name : 'dang-nhap'}" class="text-color-1"> tại đây</RouterLink></div>
            <div class="mt-5">
                <el-input
                    v-model="input1"
                    class="mt-3"
                    size="large"
                    placeholder="Họ"
                />
                <el-input
                    v-model="input1"
                    class="mt-3"
                    size="large"
                    placeholder="Tên"
                />
                <el-input
                    v-model="input1"
                    class="mt-3"
                    size="large"
                    placeholder="Email"
                />
                <el-input
                    v-model="input1"
                    class="mt-3"
                    size="large"
                    placeholder="Số điện thoại"
                />
                <el-input
                    v-model="input1"
                    class="mt-4"
                    size="large"
                    type="password"
                    placeholder="Mật khẩu"
                />

                <button class="px-5 h-11 bg-color-1 w-full text-white border border-color-1 rounded-lg text-base hover:text-color-1  
                    hover:bg-white max-md:w-full mt-5">Đăng Ký</button>
                <div class="mt-5">
                    <div>Hoặc đăng ký bằng</div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import BreadCrumb from './BreadCrumb.vue';

    const input1 = ref('')
</script>