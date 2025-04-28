
<template>
    <div class="w-2/3">
        <div class="h-[450px] w-[780px]">
            <img src="https://bizweb.dktcdn.net/100/505/645/products/sp2-5-1d784c9b-172a-4d70-992b-1f25ba0b0c56.jpg?v=1703428505093" alt="Imgae" class="w-full h-full rounded-lg">
        </div>
        <div class="flex items-center gap-2 mt-3 text-color-5">
            <v-icon name="fa-share-alt" class="text-color-5" scale="1.2" />
            <p class="text-sm">Chia sẻ</p>
            <div class="h-6 w-6 bg-color-1 text-white flex justify-center items-center rounded-[50%]">
                <v-icon name="fa-facebook-f" />
            </div>
            <div class="h-6 w-6 bg-color-1 text-white flex justify-center items-center rounded-[50%]">
                <v-icon name="fa-pinterest-p" />
            </div>
            <div class="h-6 w-6 bg-color-1 text-white flex justify-center items-center rounded-[50%]">
                <v-icon name="fa-twitter" />
            </div>
        </div>

        <TabThongTinChiTiet />
    </div>
</template>

<script>
    import TabThongTinChiTiet from './TabThongTinChiTiet.vue';

    export default{
        components:{
            TabThongTinChiTiet,
        }
    }
</script>