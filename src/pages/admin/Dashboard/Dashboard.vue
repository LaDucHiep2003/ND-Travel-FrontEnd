<template>
  <div class="container mx-auto">
    <div class="pt-1 flex flex-wrap items-center z-0 gap-2 mb-4">
      <button class="flex justify-center items-center relative group mt-4 text-center rounded-md py-[7px] px-4 border border-[#d3d5d7] hover:bg-color-19 focus-within:border-color-21">
        <span class="flex justify-center items-center ">
          <span class="font-450">Tất cả nguồn đơn</span>
          <span class="ml-1">
            <span class="w-5 h-5 block font-semibold text-color-22 focus-within:text-color-21">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                <path fill="currentColor" d="m7 9.5 5 5 5-5z"></path>
              </svg>
            </span>
          </span>
        </span>
        <span class="absolute top-full w-full mt-1 z-[100] bg-white border border-[#d3d5d7] rounded-md hidden group-focus-within:block max-h-[400px]" style="box-shadow: rgba(168, 168, 168, 0.5) -4px 4px 20px 0px;">
          <span class="overflow-auto flex-1 scrollbar">
            <ul class="p-1">
              <li>
                <button class="min-h-9 text-left w-full rounded-md py-1.5 px-2 text-sm hover:bg-color-19" >Tất cả nguồn đơn</button>
              </li>
              <li>
                <button class="min-h-9 text-left w-full rounded-md py-1.5 px-2 text-sm hover:bg-color-19" >Website</button>
              </li>
              <li>
                <button class="min-h-9 text-left w-full rounded-md py-1.5 px-2 text-sm hover:bg-color-19" >POS</button>
              </li>
            </ul>
          </span>
        </span>
      </button>
      <button class="flex justify-center items-center relative group mt-4 ml-4 text-center rounded-md py-[7px] px-4 border border-[#d3d5d7] hover:bg-color-19 focus-within:border-color-21">
        <span class="flex justify-center items-center ">
          <span class="font-450">Tuần này</span>
          <span class="ml-1">
            <span class="w-5 h-5 block font-semibold text-color-22 focus-within:text-color-21">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                <path fill="currentColor" d="m7 9.5 5 5 5-5z"></path>
              </svg>
            </span>
          </span>
        </span>
        <span class="absolute top-full w-full mt-1 z-[100] bg-white border border-[#d3d5d7] rounded-md hidden group-focus-within:block max-h-[400px]" style="box-shadow: rgba(168, 168, 168, 0.5) -4px 4px 20px 0px;">
          <span class="overflow-auto flex-1 scrollbar">
            <ul class="p-1">
              <li>
                <button class="min-h-9 text-left w-full rounded-md py-1.5 px-2 text-sm hover:bg-color-19" >Hôm qua</button>
              </li>
              <li>
                <button class="min-h-9 text-left w-full rounded-md py-1.5 px-2 text-sm hover:bg-color-19" >Hôm nay</button>
              </li>
              <li>
                <button class="min-h-9 text-left w-full rounded-md py-1.5 px-2 text-sm hover:bg-color-19" >Tuần này</button>
              </li>
            </ul>
          </span>
        </span>
      </button>
      <div class="mt-4 ml-3 text-color-26 font-450">So với kỳ trước (21/04/2025 - 24/04/2025)</div>
    </div>

    <KetQuaKinhDoanh />

    <BieuDoDoanhThu />

    <ThongKeTruyNhap />

    <SanPhamBanChay />
  </div>
</template>
<script>
import KetQuaKinhDoanh from "@/pages/admin/Dashboard/KetQuaKinhDoanh.vue";
import BieuDoDoanhThu from "@/pages/admin/Dashboard/BieuDoDoanhThu.vue";
import ThongKeTruyNhap from "@/pages/admin/Dashboard/ThongKeTruyNhap.vue";
import SanPhamBanChay from "@/pages/admin/Dashboard/SanPhamBanChay.vue";
export default {
  components:{
    KetQuaKinhDoanh,
    BieuDoDoanhThu,
    ThongKeTruyNhap,
    SanPhamBanChay
  }
}
</script>

<style scoped>
.scrollbar{
  scrollbar-width: thin;
  scrollbar-color: rgb(43, 66, 99) rgb(24, 37, 55);
}
</style>