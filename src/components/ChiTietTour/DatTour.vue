

<template>
    <div class="w-1/3">
        <div class="sticky top-0  bg-color-2 p-3 rounded-2xl">
            <div class="text-3xl text-color-1">
                6.500.000₫
            </div>
            <div class="font-medium text-sm text-color-6 mt-3 border-b border-color-10 pb-3">Mã tour : <span class="font-normal">ND025</span></div>
            <div class="flex justify-start items-center gap-3 mt-3 border-b border-color-10 pb-3">
                <div class="font-medium text-sm text-color-6">Mã giảm giá : </div>
                <div>
                    <span class="font-normal discount inline-block py-1 px-2 bg-color-1 text-color-2 relative left-[-3px] align-top">Giảm 50%</span>
                </div>
            </div>
            <div class="flex items-center gap-5 max-md:mb-2 py-5">
                <div class="p-2 inline-block rounded-2xl bg-color-1">
                    <v-icon name="fa-calendar-alt" scale="1.5" class="text-white" />
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
            <div class="mt-5 border-b border-color-10 pb-3">
                <div class="font-medium text-sm text-color-6">Loại khách </div>
                <div class="py-3">
                  <div class="flex gap-2 items-center">
                    <div class="text-[13px] w-5/12">Người lớn </div>
                    <div class="relative w-1/3">
                      <button class="absolute text-lg h-9 w-5 top-0 left-0">-</button>
                      <input type="number" class="w-full h-9 p-0 text-center bg-white border border-color-1 pl-[10px] rounded-lg" disabled value="1">
                      <button class="absolute text-lg h-9 w-5 top-0 right-0">+</button>
                    </div>
                    <div class="text-[13px] text-color-1 w-1/4 text-right">4.500.000d</div>
                  </div>
                </div>
            </div>
            <div class="my-3 flex justify-between items-center">
                <div class="font-medium text-sm text-color-6">Tổng tiền</div>
                <div class="text-color-1 font-semibold text-xl">6.500.000đ</div>
            </div>
            <div class="flex justify-center items-center gap-5">
                <button class="h-10 w-full bg-color-1 text-white border border-color-1 rounded-lg text-sm">Đặt ngay</button>
                <button class="h-10 w-full text-color-1 border border-color-1 rounded-lg text-sm hover:bg-color-1 hover:text-white">Liên hệ tư vấn</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';


    const dataDate = ref('')
</script>

<style scoped>
.discount::before{
  content: "";
  width: 6px;
  height: calc(100% - 5px);
  position: absolute;
  top: 2.5px;
  background-image: radial-gradient(#e6f4ff 2px, transparent 0);
  background-size: 6px 6px;
  background-position-x: -6px;
  right: -3px;
}
.discount::after{
  content: "";
  width: 6px;
  height: calc(100% - 5px);
  position: absolute;
  top: 2.5px;
  background-image: radial-gradient(#e6f4ff 2px, transparent 0);
  background-size: 6px 6px;
  background-position-x: -6px;
  left: -3px;
}
</style>