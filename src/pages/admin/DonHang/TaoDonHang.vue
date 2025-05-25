<template>
  <div class="px-9 mx-auto">
    <div class="py-4">
      <div class="flex justify-start min-h-8 items-center">
        <div class="pr-4">
          <button class="inline-flex relative justify-center items-center text-center rounded-md min-w-9 min-h-9 p-1.5
            border border-color-29 bg-white hover:bg-color-30">
            <span class="flex justify-center items-center relative">
              <span class="block w-5 h-5 max-w-full max-h-full m-auto text-color-22">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" focusable="false" aria-hidden="true">
                   <path fill="currentColor" d="M16.667 9.167h-10.142l2.983-2.992-1.175-1.175-5 5 5 5 1.175-1.175-2.983-2.992h10.142z"></path>
                 </svg>
              </span>
            </span>
          </button>
        </div>
        <div class="py-1.5 px-[2px] ">
          <h1 class="font-550 text-[22px]">Tạo đơn hàng</h1>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap justify-center items-start -mt-4 -ml-4 ">
      <div class="min-w-[51%] mt-4 ml-4" style="flex: 2.04425 2.04425 693px;">
        <div class="flex flex-col">
          <div class="relative overflow-clip bg-white outline outline-transparent rounded-md"
                style="box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 1px, rgba(0, 0, 0, 0.15) 0px 1px 2px 0px;">
            <div class="pt-5 px-5 font-550 text-base">
              <h2>Sản phẩm</h2>
            </div>
            <div class="p-5 flex flex-col gap-2">
              <div class="w-full block">
                <div class="flex flex-wrap items-stretch -mt-2 -ml-2">
                  <div class="mt-2 ml-2 flex-1">
                    <div class="flex items-center relative">
                      <div class="relative ml-3 mr-2 text-color-22 z-20">
                        <svg class="w-5 h-5 block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                          <path fill="currentColor" fill-rule="evenodd"
                                d="M14.891 13.477a6.002 6.002 0 0 0-9.134-7.72 6 6 0 0 0 7.72 9.134l5.715 5.716 1.415-1.415zm-2.063-6.305a4 4 0 1 1-5.656 5.656 4 4 0 0 1 5.656-5.656"
                                clip-rule="evenodd"></path>
                        </svg>
                      </div>
                      <input
                          placeholder="Tìm kiếm (Ctrl K)"
                          type="text"
                          class="w-full pr-3 py-2 text-sm text-left z-30 text-gray-900 placeholder-gray-400 bg-transparent focus:outline-none"
                      >
                      <div class="absolute inset-0 pointer-events-none rounded-md border border-color-29 bg-white z-10"></div>
                    </div>
                  </div>
                  <div class="mt-2 ml-2 max-w-full">
                    <button class="inline-flex relative justify-center items-center text-center rounded-md min-w-9 min-h-9 py-1.5
                        border border-color-29 bg-white px-4">
                       <span class="flex justify-center items-center relative font-550">
                         Chọn nhiều
                       </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="p-6">
              <div class="flex flex-col items-center gap-4">
                <div class="relative flex justify-center items-center">
                  <img src="data:image/svg+xml,%3csvg%20width='80'%20height='80'%20viewBox='0%200%2080%2080'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M73.0068%2042.1336L65.7805%2031.496L73.0068%2020.8583C73.3454%2020.3505%2073.4235%2019.7125%2073.2282%2019.1396C73.0329%2018.5667%2072.5772%2018.111%2072.0043%2017.9157L48.4373%2010.1034C47.591%209.81696%2046.6796%2010.1425%2046.1978%2010.8716L40.0001%2020.1682L33.8154%2010.8846C33.3206%2010.1425%2032.4092%209.82998%2031.5759%2010.1164L8.00892%2017.9287C7.43602%2018.124%206.9803%2018.5667%206.785%2019.1526C6.58969%2019.7255%206.66781%2020.3635%207.00634%2020.8713L14.2197%2031.496L6.99332%2042.1336C6.65479%2042.6414%206.57667%2043.2794%206.77198%2043.8523C6.96728%2044.4252%207.423%2044.8809%207.9959%2045.0762L31.5629%2052.8885C32.3962%2053.1619%2033.3206%2052.8625%2033.8024%2052.1203L39.9871%2042.8367L46.1718%2052.1203C46.6665%2052.8625%2047.591%2053.1619%2048.4113%2052.8885L71.9782%2045.0762C72.5511%2044.8809%2073.0068%2044.4382%2073.2021%2043.8523C73.4235%2043.2794%2073.3454%2042.6414%2073.0068%2042.1336ZM40.0001%2037.251L22.735%2031.496L40.0001%2025.7409L57.2652%2031.496L40.0001%2037.251Z'%20fill='%23E8EAEB'/%3e%3cpath%20d='M49.6603%2056.5867C47.1995%2057.407%2044.4261%2056.5216%2042.9288%2054.2821L39.9992%2049.8682L37.0566%2054.2821C35.5722%2056.5216%2032.7859%2057.42%2030.312%2056.5867L14.6094%2051.3525V62.7453C14.6094%2063.5917%2015.1432%2064.3338%2015.9505%2064.5942L39.3742%2072.4065C39.4393%2072.4325%2039.5174%2072.4455%2039.5825%2072.4716C39.7258%2072.4976%2039.856%2072.5106%2039.9992%2072.5106C40.1424%2072.5106%2040.2856%2072.4976%2040.4419%2072.4585C40.507%2072.4455%2040.5721%2072.4325%2040.6372%2072.4065L64.0609%2064.5942C64.8552%2064.3338%2065.402%2063.5786%2065.402%2062.7453V51.3395L49.6603%2056.5867Z'%20fill='%23E8EAEB'/%3e%3c/svg%3e" alt="">
                </div>
                <div class="flex flex-col items-center">
                  <div class="pb-4">
                    <span class="block text-center text-color-26">
                      Bạn chưa thêm sản phẩm nào
                    </span>
                  </div>
                  <div class="flex flex-wrap justify-start gap-4">
                    <button class="inline-flex justify-center items-center relative text-center border border-color-28 rounded-md
                      min-w-9 min-h-9 py-1.5 px-4 text-color-28 bg-white hover:bg-[#f2f9ff]">
                      <span class="flex justify-center items-center relative font-550">Thêm sản phẩm</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-4 relative overflow-clip bg-white outline outline-transparent rounded-md"
               style="box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 1px, rgba(0, 0, 0, 0.15) 0px 1px 2px 0px;">
            <div class="pt-5 px-5 font-550 text-base">
              <h2>Thanh toán</h2>
            </div>
            <div class="p-5">
              <div class="flex flex-col flex-wrap items-stretch">
                <div class="grid" style="row-gap: 8px;">
                  <div class="flex flex-wrap items-stretch">
                    <div class="text-sm" style="flex: 1 0 0%;"><p>Tổng tiền hàng</p></div>
                    <div class="text-sm text-color-26" style="flex: 1 0 0%;">
                      <p>---</p>
                    </div>
                    <div class="text-sm block text-end" style="flex: 1 0 0%;">
                      <p>0d</p>
                    </div>
                  </div>
                  <div class="grid " style="grid-template-columns: 1fr 2fr;">
                    <div class="text-sm text-color-26" style="flex: 1 0 0%;">Thêm giảm giá</div>
                    <div class="flex flex-col flex-wrap items-stretch">
                      <div class="flex flex-wrap items-stretch"  style="flex: 1 0 0%;">
                        <div class="text-sm text-color-26" style="flex: 1 0 0%;">
                          <p>---</p>
                        </div>
                        <div class="text-sm block text-end" style="flex: 1 0 0%;">
                          <p>0d</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-wrap items-stretch mt-0 ml-0">
                    <div class="text-sm text-color-26" style="flex: 1 0 0%;"><p>Thêm phí giao hàng</p></div>
                    <div class="text-sm text-color-26" style="flex: 1 0 0%;">
                      <p>---</p>
                    </div>
                    <div class="text-sm block text-end" style="flex: 1 0 0%;">
                      <p>0d</p>
                    </div>
                  </div>
                  <div class="flex flex-wrap items-stretch">
                    <div class="font-550" style="flex: 1 0 0%;">Thành tiền</div>
                    <div class="text-sm block text-end" style="flex: 1 0 0%;">
                      <p>0d</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 ml-4" style="flex: 1 1 339px;">
        <div class="flex flex-col flex-wrap items-stretch -mt-4 -ml-4"></div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>