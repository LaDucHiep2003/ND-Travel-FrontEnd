<template>
  <div class="p-5">
    <div class="flex">
      <div class="flex flex-grow">
        <div class="flex-1 min-w-[100px] ">
          <div class="flex items-center gap-2 relative">
            <div class="relative text-color-26 ml-3 mr-2">
                  <span class="w-5 h-5 text-color-22 m-auto block">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                      <path fill="rgb(163, 168, 175)" fill-rule="evenodd" d="M14.891 13.477a6.002 6.002 0 0 0-9.134-7.72 6 6 0 0 0 7.72 9.134l5.715 5.716 1.415-1.415zm-2.063-6.305a4 4 0 1 1-5.656 5.656 4 4 0 0 1 5.656-5.656" clip-rule="evenodd"></path>
                    </svg>
                  </span>
            </div>
            <input type="text" class="focus:outline-none pl-0 w-full resize-none text-left border border-transparent min-h-9
                  py-2 px-3" placeholder="Tìm kiếm theo mã tour hoặc tên tour" />
            <div class="absolute rounded-md border border-color-29 inset-0 pointer-events-none z-10"></div>
          </div>
        </div>
        <div class="ml-4 flex">
          <div class="flex group relative group">
            <button class="whitespace-nowrap inline-flex relative justify-center items-center text-center rounded-tl-md rounded-bl-md  min-w-9
                min-h-9 py-[7px] px-4 border border-color-29 bg-white hover:bg-color-30">
                <span class="flex justify-center items-center relative">
                  <span class="font-450">Trạng thái tour du lịch</span>
                  <span class="ml-1">
                    <span class="block w-5 h-5 font-450 text-color-22">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                        <path fill="currentColor" d="m7 9.5 5 5 5-5z"></path>
                      </svg>
                    </span>
                  </span>
                </span>
            </button>
            <div class="absolute top-full mt-1 w-full left-0 hidden group-focus-within:block z-50">
              <div class="relative overflow-hidden border border-color-29 bg-white rounded-md isolate"
                   style="box-shadow: rgba(23, 24, 24, 0.08) 0px 3px 6px -3px, rgba(23, 24, 24, 0.12) 0px 8px 20px -4px;">
                <div class="max-h-[400px] max-w-[500px] relative flex flex-col rounded-md">
                  <div class="flex-1 overflow-auto mx-w-full">
                    <div class="flex flex-col">
                      <div class="p-3">
                        <fieldset>
                          <ul>
                            <li class="py-[2px]">
                              <label for="status-1" class="inline-flex justify-start py-1 cursor-pointer">
                                  <span class="flex items-stretch w-5 h-5 mr-2">
                                    <span class="relative m-[1px] w-full">
                                      <input type="checkbox" id="status-1" class="cursor-pointer absolute w-full h-full opacity-0 m-0 peer">
                                      <span class="relative css-10dvs9w border-2 border-color-22 bg-white rounded-[4px] block w-full h-full peer-checked:border-color-25"></span>
                                      <span class="absolute top-1/2 left-1/2 opacity-0 scale-50 peer-checked:opacity-100 peer-checked:scale-100 transition-all duration-100 pointer-events-none transform -translate-x-1/2 -translate-y-1/2">
                                        <span class="block w-5 h-5 max-h-full max-w-full m-auto">
                                          <svg class="text-[#0088ff] scale-125" xmlns="http://www.w3.org/2000/svg" fill="#0088ff" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                                            <path fill="currentColor" d="m10.853 12.635-1.482-1.452-1.6 1.634 3.09 3.025 5.371-5.315-1.607-1.625z"></path>
                                          </svg>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                <span>Đang mở bán</span>
                              </label>
                            </li>
                            <li class="py-[2px]">
                              <label for="status-2" class="inline-flex justify-start py-1 cursor-pointer">
                                  <span class="flex items-stretch w-5 h-5 mr-2">
                                    <span class="relative m-[1px] w-full">
                                      <input type="checkbox" id="status-2" class="cursor-pointer absolute w-full h-full opacity-0 m-0 peer">
                                      <span class="relative css-10dvs9w border-2 border-color-22 bg-white rounded-[4px] block w-full h-full peer-checked:border-color-25"></span>
                                      <span class="absolute top-1/2 left-1/2 opacity-0 scale-50 peer-checked:opacity-100 peer-checked:scale-100 transition-all duration-100 pointer-events-none transform -translate-x-1/2 -translate-y-1/2">
                                        <span class="block w-5 h-5 max-h-full max-w-full m-auto">
                                          <svg class="text-[#0088ff] scale-125" xmlns="http://www.w3.org/2000/svg" fill="#0088ff" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                                            <path fill="currentColor" d="m10.853 12.635-1.482-1.452-1.6 1.634 3.09 3.025 5.371-5.315-1.607-1.625z"></path>
                                          </svg>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                <span>Hết chỗ</span>
                              </label>
                            </li>
                            <li class="py-[2px]">
                              <label for="status-3" class="inline-flex justify-start py-1 cursor-pointer">
                                  <span class="flex items-stretch w-5 h-5 mr-2">
                                    <span class="relative m-[1px] w-full">
                                      <input type="checkbox" id="status-3" class="cursor-pointer absolute w-full h-full opacity-0 m-0 peer">
                                      <span class="relative css-10dvs9w border-2 border-color-22 bg-white rounded-[4px] block w-full h-full peer-checked:border-color-25"></span>
                                      <span class="absolute top-1/2 left-1/2 opacity-0 scale-50 peer-checked:opacity-100 peer-checked:scale-100 transition-all duration-100 pointer-events-none transform -translate-x-1/2 -translate-y-1/2">
                                        <span class="block w-5 h-5 max-h-full max-w-full m-auto">
                                          <svg class="text-[#0088ff] scale-125" xmlns="http://www.w3.org/2000/svg" fill="#0088ff" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                                            <path fill="currentColor" d="m10.853 12.635-1.482-1.452-1.6 1.634 3.09 3.025 5.371-5.315-1.607-1.625z"></path>
                                          </svg>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                <span>Đã khởi hành</span>
                              </label>
                            </li>
                            <li class="py-[2px]">
                              <label for="status-3" class="inline-flex justify-start py-1 cursor-pointer">
                                  <span class="flex items-stretch w-5 h-5 mr-2">
                                    <span class="relative m-[1px] w-full">
                                      <input type="checkbox" id="status-3" class="cursor-pointer absolute w-full h-full opacity-0 m-0 peer">
                                      <span class="relative css-10dvs9w border-2 border-color-22 bg-white rounded-[4px] block w-full h-full peer-checked:border-color-25"></span>
                                      <span class="absolute top-1/2 left-1/2 opacity-0 scale-50 peer-checked:opacity-100 peer-checked:scale-100 transition-all duration-100 pointer-events-none transform -translate-x-1/2 -translate-y-1/2">
                                        <span class="block w-5 h-5 max-h-full max-w-full m-auto">
                                          <svg class="text-[#0088ff] scale-125" xmlns="http://www.w3.org/2000/svg" fill="#0088ff" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                                            <path fill="currentColor" d="m10.853 12.635-1.482-1.452-1.6 1.634 3.09 3.025 5.371-5.315-1.607-1.625z"></path>
                                          </svg>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                <span>Kết thúc</span>
                              </label>
                            </li>
                          </ul>
                        </fieldset>
                      </div>
                      <div class="flex px-3 pb-3 justify-between">
                        <button class="relative flex justify-center items-center text-center rounded-md w-full min-w-9 min-h-9 py-1.5 px-4 border
                            border-transparent text-white bg-color-28">
                          <span class="text-sm font-550">Lọc</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex group relative group">
            <button class="whitespace-nowrap inline-flex relative justify-center items-center text-center min-w-9
                min-h-9 py-[7px] px-4 border border-color-29 bg-white hover:bg-color-30">
                <span class="flex justify-center items-center relative">
                  <span class="font-450">Ngày khởi hành</span>
                  <span class="ml-1">
                    <span class="block w-5 h-5 font-450 text-color-22">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                        <path fill="currentColor" d="m7 9.5 5 5 5-5z"></path>
                      </svg>
                    </span>
                  </span>
                </span>
            </button>
            <div class="absolute top-full mt-1 w-[300px] left-1/2 -translate-x-1/2 hidden group-focus-within:block z-50">
              <div class="relative overflow-hidden border border-color-29 bg-white rounded-md isolate"
                   style="box-shadow: rgba(23, 24, 24, 0.08) 0px 3px 6px -3px, rgba(23, 24, 24, 0.12) 0px 8px 20px -4px;">
                <div class="max-h-[400px] max-w-[500px] relative flex flex-col rounded-md">
                  <div class="flex-1 overflow-auto mx-w-full">
                    <div class="flex flex-col">
                      <div class="p-3">
                        <fieldset>
                          <div class="py-[2px]">
                            <div class="flex flex-wrap">
                              <div class="w-[calc(50%-8px)] m-1">
                                <button class="w-full border border-color-29 relative inline-flex justify-center items-center
                                        text-center rounded-md min-w-9 min-h-9 py-[7px] px-4 bg-white hover:bg-color-30">
                                  <span>Hôm qua</span>
                                </button>
                              </div>
                              <div class="w-[calc(50%-8px)] m-1">
                                <button class="w-full border border-color-29 relative inline-flex justify-center items-center
                                        text-center rounded-md min-w-9 min-h-9 py-[7px] px-4 bg-white hover:bg-color-30">
                                  <span>Hôm nay</span>
                                </button>
                              </div>
                              <div class="w-[calc(50%-8px)] m-1">
                                <button class="w-full border border-color-29 relative inline-flex justify-center items-center
                                        text-center rounded-md min-w-9 min-h-9 py-[7px] px-4 bg-white hover:bg-color-30">
                                  <span>7 ngày qua</span>
                                </button>
                              </div>
                              <div class="w-[calc(50%-8px)] m-1">
                                <button class="w-full border border-color-29 relative inline-flex justify-center items-center
                                        text-center rounded-md min-w-9 min-h-9 py-[7px] px-4 bg-white hover:bg-color-30">
                                  <span>30 ngày qua</span>
                                </button>
                              </div>
                            </div>
                          </div>
                        </fieldset>
                      </div>
                      <div class="flex px-3 pb-3 justify-between">
                        <button class="relative flex justify-center items-center text-center rounded-md w-full min-w-9 min-h-9 py-1.5 px-4 border
                            border-color-29 bg-white hover:bg-color-30">
                          <span class="text-sm font-450">Tùy chọn</span>
                        </button>
                      </div>
                      <div class="flex px-3 pb-3 justify-between">
                        <button class="relative flex justify-center items-center text-center rounded-md w-full min-w-9 min-h-9 py-1.5 px-4 border
                            border-transparent text-white bg-color-28">
                          <span class="text-sm font-550">Lọc</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex group relative group">
            <button class="whitespace-nowrap inline-flex relative justify-center items-center text-center min-w-9
                min-h-9 py-[7px] px-4 border border-color-29 bg-white hover:bg-color-30">
                <span class="flex justify-center items-center relative">
                  <span class="font-450">Giá</span>
                  <span class="ml-1">
                    <span class="block w-5 h-5 font-450 text-color-22">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                        <path fill="currentColor" d="m7 9.5 5 5 5-5z"></path>
                      </svg>
                    </span>
                  </span>
                </span>
            </button>
            <div class="absolute top-full mt-1 w-[300px] right-0 hidden group-focus-within:block z-50">
              <div class="relative overflow-hidden border border-color-29 bg-white rounded-md isolate"
                   style="box-shadow: rgba(23, 24, 24, 0.08) 0px 3px 6px -3px, rgba(23, 24, 24, 0.12) 0px 8px 20px -4px;">
                <div class="max-h-[400px] max-w-[500px] relative flex flex-col rounded-md">
                  <div class="flex-1 overflow-auto mx-w-full">
                    <div class="flex flex-col">
                      <div class="p-3">
                        <fieldset>
                          <ul>
                            <li class="py-[2px]">
                              <label for="price-1" class="inline-flex justify-start py-1 cursor-pointer">
                                  <span class="flex items-stretch w-5 h-5 mr-2">
                                    <span class="relative m-[1px] w-full">
                                      <input type="checkbox" id="price-1" class="cursor-pointer absolute w-full h-full opacity-0 m-0 peer">
                                      <span class="relative css-10dvs9w border-2 border-color-22 bg-white rounded-[4px] block w-full h-full peer-checked:border-color-25"></span>
                                      <span class="absolute top-1/2 left-1/2 opacity-0 scale-50 peer-checked:opacity-100 peer-checked:scale-100 transition-all duration-100 pointer-events-none transform -translate-x-1/2 -translate-y-1/2">
                                        <span class="block w-5 h-5 max-h-full max-w-full m-auto">
                                          <svg class="text-[#0088ff] scale-125" xmlns="http://www.w3.org/2000/svg" fill="#0088ff" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                                            <path fill="currentColor" d="m10.853 12.635-1.482-1.452-1.6 1.634 3.09 3.025 5.371-5.315-1.607-1.625z"></path>
                                          </svg>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                <span>500 - 100000</span>
                              </label>
                            </li>
                            <li class="py-[2px]">
                              <label for="status-2" class="inline-flex justify-start py-1 cursor-pointer">
                                  <span class="flex items-stretch w-5 h-5 mr-2">
                                    <span class="relative m-[1px] w-full">
                                      <input type="checkbox" id="status-2" class="cursor-pointer absolute w-full h-full opacity-0 m-0 peer">
                                      <span class="relative css-10dvs9w border-2 border-color-22 bg-white rounded-[4px] block w-full h-full peer-checked:border-color-25"></span>
                                      <span class="absolute top-1/2 left-1/2 opacity-0 scale-50 peer-checked:opacity-100 peer-checked:scale-100 transition-all duration-100 pointer-events-none transform -translate-x-1/2 -translate-y-1/2">
                                        <span class="block w-5 h-5 max-h-full max-w-full m-auto">
                                          <svg class="text-[#0088ff] scale-125" xmlns="http://www.w3.org/2000/svg" fill="#0088ff" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                                            <path fill="currentColor" d="m10.853 12.635-1.482-1.452-1.6 1.634 3.09 3.025 5.371-5.315-1.607-1.625z"></path>
                                          </svg>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                <span>Hết chỗ</span>
                              </label>
                            </li>
                            <li class="py-[2px]">
                              <label for="status-3" class="inline-flex justify-start py-1 cursor-pointer">
                                  <span class="flex items-stretch w-5 h-5 mr-2">
                                    <span class="relative m-[1px] w-full">
                                      <input type="checkbox" id="status-3" class="cursor-pointer absolute w-full h-full opacity-0 m-0 peer">
                                      <span class="relative css-10dvs9w border-2 border-color-22 bg-white rounded-[4px] block w-full h-full peer-checked:border-color-25"></span>
                                      <span class="absolute top-1/2 left-1/2 opacity-0 scale-50 peer-checked:opacity-100 peer-checked:scale-100 transition-all duration-100 pointer-events-none transform -translate-x-1/2 -translate-y-1/2">
                                        <span class="block w-5 h-5 max-h-full max-w-full m-auto">
                                          <svg class="text-[#0088ff] scale-125" xmlns="http://www.w3.org/2000/svg" fill="#0088ff" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                                            <path fill="currentColor" d="m10.853 12.635-1.482-1.452-1.6 1.634 3.09 3.025 5.371-5.315-1.607-1.625z"></path>
                                          </svg>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                <span>Đã khởi hành</span>
                              </label>
                            </li>
                            <li class="py-[2px]">
                              <label for="status-3" class="inline-flex justify-start py-1 cursor-pointer">
                                  <span class="flex items-stretch w-5 h-5 mr-2">
                                    <span class="relative m-[1px] w-full">
                                      <input type="checkbox" id="status-3" class="cursor-pointer absolute w-full h-full opacity-0 m-0 peer">
                                      <span class="relative css-10dvs9w border-2 border-color-22 bg-white rounded-[4px] block w-full h-full peer-checked:border-color-25"></span>
                                      <span class="absolute top-1/2 left-1/2 opacity-0 scale-50 peer-checked:opacity-100 peer-checked:scale-100 transition-all duration-100 pointer-events-none transform -translate-x-1/2 -translate-y-1/2">
                                        <span class="block w-5 h-5 max-h-full max-w-full m-auto">
                                          <svg class="text-[#0088ff] scale-125" xmlns="http://www.w3.org/2000/svg" fill="#0088ff" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                                            <path fill="currentColor" d="m10.853 12.635-1.482-1.452-1.6 1.634 3.09 3.025 5.371-5.315-1.607-1.625z"></path>
                                          </svg>
                                        </span>
                                      </span>
                                    </span>
                                  </span>
                                <span>Kết thúc</span>
                              </label>
                            </li>
                          </ul>
                        </fieldset>
                      </div>
                      <div class="flex px-3 pb-3 justify-between">
                        <button class="relative flex justify-center items-center text-center rounded-md w-full min-w-9 min-h-9 py-1.5 px-4 border
                            border-transparent text-white bg-color-28">
                          <span class="text-sm font-550">Lọc</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>