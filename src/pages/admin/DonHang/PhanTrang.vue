<template>
  <div class="p-4">
    <div class="flex flex-row items-center -mt-4 -ml-4">
      <div class="mt-4 ml-4 max-w-full">
        <span class="font-450">Từ 1 đến 1 trên tổng 1</span>
      </div>
      <div class="mt-4 ml-4 max-w-full flex-1 font-450">
        <div class="flex flex-wrap justify-center items-center -mt-2 -ml-2">
          <div class="mt-2 ml-2 max-w-full">
            <span>Hiển thị</span>
          </div>
          <div class="mt-2 ml-2 max-w-full">
            <div>
              <div class="relative">
                <input type="text" class="absolute top-0 left-0 opacity-0 appearance-none w-full h-full font-450 pl-3">
                <span class="border border-color-29 bg-white absolute inset-0 rounded-md"></span>
                <div class="flex items-center font-450 relative w-full min-h-9 px-2">
                  <span class="flex-1 whitespace-nowrap overflow-hidden overflow-ellipsis">20</span>
                  <span class="w-5 h-5 block max-w-full max-h-full m-auto text-color-22">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                    <path fill="currentColor" d="m7 9.5 5 5 5-5z"></path>
                  </svg>
                </span>
                </div>
<!--                <div class="absolute bottom-full left-0 w-full mb-1 " >-->
<!--                  <div class="p-2 bg-white w-full rounded-md border border-color-22" style="box-shadow: rgba(168, 168, 168, 0.5) -4px 4px 20px 0px;">-->
<!--                    <div class="flex flex-col items-center">-->
<!--                      <div class="hover:bg-color-30 flex justify-center items-center w-full h-full rounded-md">10</div>-->
<!--                    </div>-->
<!--                  </div>-->
<!--                </div>-->
              </div>
            </div>
          </div>
          <div class="mt-2 ml-2 max-w-full">
            <span>Kết quả</span>
          </div>
        </div>
      </div>
      <div class="mt-4 ml-4 max-w-full">
        <div class="flex items-center h-5">
          <button class="min-w-6 h-6 pointer-events-none bg-none appearance-none flex items-center justify-center relative px-1 duration-200">
              <span class="w-6 h-6 relative max-w-full max-h-full block text-color-22">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                  <path fill="currentColor" d="m14.298 5.99-6.01 6.01 6.01 6.01 1.414-1.414-4.596-4.596 4.596-4.596z"></path>
                </svg>
              </span>
          </button>
          <button class="min-w-6 h-6 appearance-none bg-color-28 flex justify-center items-center px-1 font-450 rounded-full mx-1 text-white relative">1</button>
          <button class="min-w-6 h-6 pointer-events-none bg-none appearance-none flex items-center justify-center relative px-1 duration-200">
              <span class="w-6 h-6 relative max-w-full max-h-full block text-color-22">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                  <path fill="currentColor" d="m9.702 18.01 6.01-6.01-6.01-6.01-1.414 1.414 4.596 4.596-4.596 4.596z"></path>
                </svg>
              </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>