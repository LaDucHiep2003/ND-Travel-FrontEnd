
<template>
    <div class="container mx-auto py-10 infomation">
        <div class="text-center">
            <div class="text-3xl font-bold text-color-6 max-md:text-[28px]">Thông tin liên hệ</div>
            <div class="text-base text-color-5 mt-2">Chúng tôi vinh hạnh vì đã có cơ hội đồng hành với hơn 10.000 khách hàng trên khắp thế giới</div>
        </div>
        <div class="grid grid-cols-3 gap-5 mt-10">
            <div class="border border-color-3 p-6 rounded-xl">
                <div class="text-center">
                    <v-icon name ="fa-map-marker-alt" scale="3" class="text-color-1" />
                    <div class="text-3xl font-bold text-color-6 max-md:text-[28px] mt-2">Địa chỉ</div>
                    <div class="text-base mt-2 text-color-15">Tòa nhà Ladeco, 266 Đội Cấn, Ba Đình, Hà Nội</div>
                </div>
            </div>
            <div class="border border-color-3 p-6 rounded-xl">
                <div class="text-center">
                    <v-icon name ="fa-envelope" scale="3" class="text-color-1" />
                    <div class="text-3xl font-bold text-color-6 max-md:text-[28px] mt-2">Email</div>
                    <div class="text-base mt-2 text-color-15">duchiep045@gmail.com</div>
                </div>
            </div>
            <div class="border border-color-3 p-6 rounded-xl">
                <div class="text-center">
                    <v-icon name ="fa-phone-alt" scale="3" class="text-color-1" />
                    <div class="text-3xl font-bold text-color-6 max-md:text-[28px] mt-2">EMail</div>
                    <div class="text-base mt-2 text-color-15">duchiep045@gmail.com</div>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-2 gap-5 my-16">
            <div>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29798.726595817083!2d105.81728839999998!3d20.999016800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135adcaeeb3b5cf%3A0xe480873c00de7333!2sBeta%20Cinemas%20Thanh%20Xu%C3%A2n!5e0!3m2!1svi!2s!4v1727791378769!5m2!1svi!2s" 
                     height="350" style="border:0;" class="rounded-lg w-full" allowfullscreen="false" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div>
                <el-input
                    v-model="input1"
                    class="w-full mb-4"
                    size="large"
                    placeholder="Họ và tên"
                    />
                <el-input
                    v-model="input1"
                    class="w-full mb-4"
                    size="large"
                    placeholder="Email"
                    />
                <el-input
                    v-model="input1"
                    class="w-full mb-4"
                    size="large"
                    placeholder="Điện thoại*"
                    />
                    <el-input
                        v-model="textarea"
                        class="w-full mb-3"
                        placeholder="Nội dung"
                        show-word-limit
                        type="textarea"
                    />
                    <button class="px-5 h-10 bg-color-1 text-white border border-color-1 rounded-lg text-sm hover:text-color-1  hover:bg-white max-md:w-full">Gửi thông tin</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

    const input1 = ref('');
    const textarea = ref('')
</script>