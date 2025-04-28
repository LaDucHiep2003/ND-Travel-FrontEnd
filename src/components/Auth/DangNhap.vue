<template>
    <BreadCrumb />
    <div class="flex justify-center items-center py-10 login">
        <div class="p-6 border border-color-3 text-center rounded-xl w-[400px]">
            <div class="text-2xl uppercase font-semibold">Đăng nhập</div>
            <div class="mt-2">Nếu bạn chưa có tài khoản, <RouterLink :to="{ name : 'dang-ki'}" class="text-color-1"> đăng ký tại đây</RouterLink></div>

            <div class="my-5">
                <el-input
                    v-model="input1"
                    class=""
                    size="large"
                    placeholder="Email"
                />
                <el-input
                    v-model="input2"
                    class=" mt-4"
                    size="large"
                    type="password"
                    placeholder="Mật khẩu"
                />
                <button class="px-5 h-11 bg-color-1 w-full text-white border border-color-1 rounded-lg text-base hover:text-color-1  
                    hover:bg-white max-md:w-full mt-5">Đăng nhập</button>

                <div class="mt-5">
                    <div>Quên mật khẩu</div>
                    <el-input
                        v-model="input1"
                        class="mt-10"
                        size="large"
                        placeholder="Email"
                    />
                    <button class="px-5 h-11 bg-color-1 w-full text-white border border-color-1 rounded-lg text-base hover:text-color-1  
                    hover:bg-white max-md:w-full mt-5">Lấy lại mật khẩu</button>
                </div>
                <div class="mt-5">
                    <div>Hoặc đăng nhập bằng</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import BreadCrumb from './BreadCrumb.vue';
import { RouterLink } from 'vue-router';

    const input1 = ref('');
    const input2 = ref('')
</script>