
<template>
    <div class="container mx-auto py-10">
        <div class="text-2xl mb-10">Giỏ hàng của bạn</div>
        <div>
            <div class="border border-color-3">
                <div class="py-1 px-3 flex border-b border-color-3 font-bold max-md:hidden">
                    <div class="w-1/2 text-center">Thông tin sản phẩm</div>
                    <div class="w-[16%] text-center">Đơn giá</div>
                    <div class="w-[16%] text-center">Số lượng</div>
                    <div class="w-[16%] text-center">Thành tiền</div>
                </div>
                <div class="py-4 px-3 flex gap-3 items-center max-md:items-start">
                    <img src="https://bizweb.dktcdn.net/thumb/compact/100/505/645/products/sp2-04d95c8f-9688-4cbc-a200-dbfa6a9c5e12.jpg" alt="" class="w-28 h-16 max-md:w-20 max-md:h-10">
                    <div class="flex-1 flex gap-2 items-center max-md:flex-wrap">
                        <div class="w-1/2 max-md:w-full">
                            <div class="tetx-sm text-color-14 max-md:text-xs mb-1">Du lịch Nha Trang - VinWonders Nha Trang - Hòn Mun 3N2Đ</div>
                            <div class="text-[13px] max-md:text-xs mb-1">Người lớn</div>
                            <div class="text-color-16 italic max-md:text-xs">Ngày đi: 02/10/2024</div>
                            <button class="text-color-1">Xóa</button>
                        </div>
                        <div class="w-1/5 text-center max-md:hidden">
                            <div class="text-color-1 font-bold">6.500.000₫</div>
                        </div>
                        <div class="w-1/5 text-center max-md:hidden">
                            <el-input-number v-model="num" :min="1" :max="10" @change="handleChange" />
                        </div>
                        <div class="w-1/5 text-center">
                            <div class="text-color-1 font-bold">6.500.000₫</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-72 mt-5 ml-auto max-md:w-full">
                <div class="flex justify-between items-center mb-2">
                    <div class="text-base font-semibold">Tổng tiền:</div>
                    <div class="text-color-1 font-bold">6.500.000₫</div>
                </div>
                <button class="h-10 bg-[#333] w-full text-white border border-[#333] hover:bg-white hover:text-[#333]">Thanh toán</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const num = ref(1)
const handleChange = (value: number) => {
  console.log(value)
}
</script>