<template>
  <div class="relative ">
    <div class="absolute top-0 left-0 right-0" style="visibility: hidden;">
      <div>
        <div class="min-h-12 opacity-0 relative pl-4 pr-2 bg-white flex items-center"
             style="transition: opacity 100ms cubic-bezier(0.25, 0.1, 0.25, 1);visibility: hidden;"></div>
      </div>
    </div>
    <div class="overflow-x-auto overscroll-contain">
      <table class="w-full max-w-full border-collapse">
        <thead>
          <tr>
            <th class="bg-[#f4f6f8] py-3.5 px-4 text-left font-550 text-sm whitespace-nowrap sticky left-0 w-5">
                <span class="cursor-pointer">
                  <span class="block w-5 h-5 max-w-full max-h-full m-auto text-color-22">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                      <path fill="currentColor" d="M11.744 8a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m0 6a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5m9.208-.3a2.256 2.256 0 0 1 0-3.908 1.085 1.085 0 0 0 .392-1.475l-1.669-2.886a1.083 1.083 0 0 0-1.476-.4 2.26 2.26 0 0 1-3.39-1.95 1.087 1.087 0 0 0-1.087-1.081h-3.956a1.09 1.09 0 0 0-1.087 1.086 2.26 2.26 0 0 1-3.389 1.95 1.084 1.084 0 0 0-1.477.394l-1.669 2.889a1.084 1.084 0 0 0 .4 1.479 2.254 2.254 0 0 1 0 3.906 1.08 1.08 0 0 0-.4 1.479l1.672 2.884a1.084 1.084 0 0 0 1.478.4 2.26 2.26 0 0 1 2.255 0l.01.006a2.25 2.25 0 0 1 1.12 1.946 1.087 1.087 0 0 0 1.085 1.086h3.96a1.087 1.087 0 0 0 1.085-1.085 2.26 2.26 0 0 1 3.39-1.951 1.083 1.083 0 0 0 1.477-.394l1.674-2.889a1.084 1.084 0 0 0-.398-1.483zm-2.377 3.274a3.758 3.758 0 0 0-5.244 3.023h-3.177a3.758 3.758 0 0 0-5.24-3.024l-1.277-2.2a3.755 3.755 0 0 0 0-6.047l1.277-2.2a3.76 3.76 0 0 0 5.242-3.026h3.175a3.76 3.76 0 0 0 5.244 3.023l1.276 2.2a3.755 3.755 0 0 0 0 6.046z"></path>
                    </svg>
                  </span>
                </span>
            </th>
            <th class="left-[52px] bg-[#f4f6f8] py-3.5 pr-4 pl-0 text-left font-550 text-sm whitespace-nowrap sticky w-5">
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
              </label>
            </th>
            <th class="left-[88px] bg-[#f4f6f8] sticky py-3.5 px-4 text-left font-550 whitespace-nowrap">
              <button v-if="!hasSelection" class="appearance-none static inline-flex justify-center items-center font-550">
                <span>Mã tour</span>
                <span class="opacity-50">
                    <span class="block w-5 h-5 max-h-full max-w-full m-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                        <path fill="currentColor" d="m7 13.582 5 5.416 5-5.416z"></path><path fill="currentColor" d="m7 11.416 5-5.416 5 5.416z"></path>
                      </svg>
                    </span>
                  </span>
              </button>
              <RouterLink :to="{ name : 'edit_product', params: { id : selectedRows[0]}}" v-if="hasSelection" class="appearance-none static inline-flex justify-center items-center font-550">
                <span>Sửa</span>
              </RouterLink>
            </th>
            <th class="bg-[#f4f6f8] py-3.5 px-4 max-w-[300px] text-left font-550 whitespace-nowrap">
              <button v-if="!hasSelection" class="appearance-none static inline-flex justify-center items-center font-550">
                <span>Tên tour</span>
                <span class="opacity-50">
                    <span class="block w-5 h-5 max-h-full max-w-full m-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                        <path fill="currentColor" d="m7 13.582 5 5.416 5-5.416z"></path><path fill="currentColor" d="m7 11.416 5-5.416 5 5.416z"></path>
                      </svg>
                    </span>
                  </span>
              </button>
              <button @click="handleDelete" v-if="hasSelection" class="appearance-none static inline-flex justify-center items-center font-550">
                <span>Xóa</span>
              </button>
            </th>
            <th class="bg-[#f4f6f8] py-3.5 px-4 text-left font-550 whitespace-nowrap">
              <button v-if="!hasSelection" class="appearance-none static inline-flex justify-center items-center font-550">
                <span>Ngày khởi hành</span>
                <span class="opacity-50">
                    <span class="block w-5 h-5 max-h-full max-w-full m-auto">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                        <path fill="currentColor" d="m7 13.582 5 5.416 5-5.416z"></path><path fill="currentColor" d="m7 11.416 5-5.416 5 5.416z"></path>
                      </svg>
                    </span>
                  </span>
              </button>
            </th>
            <th class="bg-[#f4f6f8] py-3.5 px-4 text-left font-550 whitespace-nowrap">
              <span v-if="!hasSelection">Điểm đến </span>
            </th>
            <th class="bg-[#f4f6f8] py-3.5 px-4 text-left font-550 whitespace-nowrap">
              <span v-if="!hasSelection">Số chỗ còn lại</span>
            </th>
            <th class="bg-[#f4f6f8] py-3.5 px-4 text-left font-550 whitespace-nowrap">
              <span v-if="!hasSelection">Giá người lớn</span>
            </th>
            <th class="bg-[#f4f6f8] py-3.5 px-4 text-left font-550 whitespace-nowrap">
              <span v-if="!hasSelection">Trạng thái</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item,index) in dataTours" class="bg-white cursor-pointer border-t border-[#e8eaeb] hover:bg-color-30">
            <td class="text-left whitespace-nowrap sticky left-0 py-2 px-4 align-middle">
                <span class="block w-5 h-5 max-h-full max-w-full m-auto text-color-22 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                      <path fill="currentColor" d="m18.425 12-6.01 6.01-1.415-1.414 4.596-4.596-4.596-4.596 1.414-1.414z"></path><path fill="currentColor" d="m13 12-6.01 6.01-1.415-1.414 4.597-4.596-4.597-4.596 1.415-1.414z"></path>
                    </svg>
                </span>
            </td>
            <td class="left-[52px] text-left whitespace-nowrap sticky py-2 align-middle">
              <div class="flex items-center">
                <div class="flex justify-center items-center h-5 pl-0">
                  <label :for="`item-${index}`" class="inline-flex justify-start cursor-pointer p-0">
                    <span class="flex items-stretch w-5 h-5 mt-0 mr-0">
                      <span class="relative m-[1px] w-full">
                        <input type="checkbox" :id="`item-${index}`" v-model="selectedRows" :value="item.id"
                               class="cursor-pointer absolute w-full h-full opacity-0 m-0 peer">
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
                  </label>
                </div>
              </div>
            </td>
            <td class="left-[88px] sticky py-2 px-4 text-left whitespace-nowrap">
              <RouterLink to="/" class="inline text-color-28">
                <div class="flex">
                  <div class="w-fit">#</div>
                  <div class="w-fit text-sm font-450">{{ item.id }}</div>
                </div>
              </RouterLink>
            </td>
            <td class="text-left whitespace-nowrap py-2 px-4 max-w-[300px] text-ellipsis overflow-hidden">
              <span class="font-450 ">{{ item.title }}</span>
            </td>
            <td class="text-left whitespace-nowrap py-2 px-4">
                <span class="max-w-32">
                  <span class="block whitespace-nowrap overflow-ellipsis overflow-hidden font-450">{{item.departure_date || '----'}}</span>
                </span>
            </td>
            <td class="text-left whitespace-nowrap py-2 px-4">
              <div class="flex flex-wrap items-stretch justify-start -mt-4 -ml-4 ">
                <div class="mt-4 ml-4 max-w-full ">
                  <span class="font-450">{{ item.destination }}</span>
                </div>
              </div>
            </td>
            <td class="text-left whitespace-nowrap py-2 px-4">
              <div class="flex flex-wrap items-stretch justify-start -mt-4 -ml-4 ">
                <div class="mt-4 ml-4 max-w-full ">
                  <span class="font-450">{{ item.seats }}</span>
                </div>
              </div>
            </td>
            <td class="text-left whitespace-nowrap py-2 px-4">
              <div class="flex flex-wrap items-stretch justify-start -mt-4 -ml-4 ">
                <div class="mt-4 ml-4 max-w-full ">
                  <span class="font-450">{{ item.price_adult }}</span>
                </div>
              </div>
            </td>
            <td class="text-left whitespace-nowrap py-2 px-4">
              <div class="flex flex-wrap items-stretch justify-end -mt-4 -ml-4 ">
                <div class="mt-4 ml-4 max-w-full ">
                  <span class="inline-flex items-center py-1 px-4 -outline-offset-1 rounded-[20px] bg-[#fffbf2]
                    text-[#e49c06]" style="outline: rgb(255, 223, 155) solid 1px;">
                    <span class="my-[-2px] -ml-2">
                      <span class="block w-5 h-5 max-h-full max-w-full m-auto">
                        <svg viewBox="0 0 20 20" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M10 13C11.66 13 13 11.66 13 10C13 8.34 11.66 7 10 7C8.34 7 7 8.34 7 10C7 11.66 8.34 13 10 13ZM6 10C6 12.21 7.79 14 10 14C12.21 14 14 12.21 14 10C14 7.79 12.21 6 10 6C7.79 6 6 7.79 6 10Z" fill="currentColor"></path>
                        </svg>
                      </span>
                    </span>
                      <span class="font-450 text-xs" v-if="item.status === 'active'">Đang mở bán</span>
                      <span class="font-450 text-xs" v-else-if="item.status === 'inactive'">Ngừng bán</span>
                      <span class="font-450 text-xs" v-else-if="item.status === 'sold_out'">Hết chỗ</span>
                      <span class="font-450 text-xs" v-else-if="item.status === 'ended'">Đã kết thúc</span>
                      <span class="font-450 text-xs" v-else>Không xác định</span>
                  </span>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import {deleteTour} from "@/service/tourService.js";

export default {
  data() {
    return {
      selectedRows: []
    }
  },
  methods:{
    async handleDelete(){
      await deleteTour({
        ids : this.selectedRows
      });
    }
  },
  computed:{
    hasSelection() {
      return this.selectedRows.length > 0;
    },
  },
  props:{
    dataTours:{
      type : Array,
    }
  },
}
</script>