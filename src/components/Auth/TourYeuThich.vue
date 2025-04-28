
<template>
    <BreadCrumb />
    <div>
        <div>
            <div>Đăng nhập</div>
            <div>Nếu bạn chưa có tài khoản, <span> đăng ký tại đây</span></div>

            <div>
                <el-input
                    v-model="input1"
                    style="width: 240px"
                    size="large"
                    placeholder="Please Input"
                />
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
import BreadCrumb from './BreadCrumb.vue';
    const input1 = ref('')
</script>