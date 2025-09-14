

<template>
    <div class="flex-1">
        <div class="pb-3 border-b border-color-3 flex justify-between items-center">
            <div class="flex justify-start items-center gap-2">
                <div class="border border-color-1 flex justify-center items-center h-8 w-8 rounded-lg">
                    <v-icon name="fa-list-ul" class="text-color-1" scale="1.1" />
                </div>
                <div class="border border-color-2 h-8 w-8 rounded-lg flex justify-center items-center">
                    <v-icon name="fa-th-large" class="text-color-3"/>
                </div>
            </div>
            <div class="flex items-center gap-3">
                <div class="text-sm">Sắp xếp theo</div>
                <el-select v-model="selectedSort" placeholder="Select" style="width: 150px" >
                    <el-option
                        v-for="item in options"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                    />
                </el-select>
            </div>
        </div>
        <div class="mt-5">
            <div v-for="tour in tours" :key="tour.id" class="md:flex items-center gap-3 rounded-2xl p-[10px] mb-5 border border-color-3 bg-white overflow-hidden cart-tour hover:border-color-1 transition-all duration-200">
                <div class="mb-2 overflow-hidden md:w-1/3 relative">
                    <img :src="tour.thumbnail" alt="Image"
                        class="rounded-lg w-full h-full transition-all duration-200">
                    <div class="absolute top-2 right-2 z-10 flex justify-center items-center">
                        <div class="w-7 h-7 inline-flex rounded-md justify-center items-center " style="background: rgba(0, 0, 0, 0.4);">
                            <v-icon name="fa-regular-heart" class="text-white" />
                        </div> 
                    </div>
                    <div class="absolute bottom-0 right-0 z-10 flex justify-center items-center">
                        <div class="w-7 h-7 inline-flex justify-center items-center" style="background: rgba(0, 0, 0, 0.4);">
                            <v-icon name="fa-bus" class="text-white" scale="1.2" />
                        </div> 
                    </div>
                    <!-- <div class="absolute bottom-0 right-0 z-10 flex justify-center items-center">
                        <div class="w-7 h-7 inline-flex justify-center items-center" style="background: rgba(0, 0, 0, 0.4);">
                            <v-icon name="fa-plane" class="text-white" scale="1.2" />
                        </div>
                    </div> -->
                </div>
                
                <div class="flex-1">
                    <div class="flex justify-between gap-2">
                        <div>
                            <div class="text-color-8">Mã tour: {{ tour.id }}</div>
                            <div class="text-base font-bold text-color-6 mb-1 hover:text-color-1 transition-all duration-100">{{ tour.title }}</div>
                            <div class="mb-1 text-color-1">
                                <v-icon name="fa-regular-star" />
                                <v-icon name="fa-regular-star" />
                                <v-icon name="fa-regular-star" />
                                <v-icon name="fa-regular-star" />
                                <v-icon name="fa-regular-star" />
                            </div>
                            <div class="text-color-8 flex items-center gap-2 mb-1 text-sm">
                                <v-icon name="fa-regular-clock"/>
                                <p>Thời gian: 5N4Đ</p>
                            </div>
                        </div>
                        <div>
                            <div class="text-color-8 flex items-center gap-2 mb-1">
                                <v-icon name="fa-map-marker-alt"/>
                                <div>Khởi hành từ: {{ tour.departure_from }}</div>
                            </div>
                            <div class="text-base text-color-1 font-bold">{{ formatPrice(tour.price_adult) }}<sup>₫</sup></div>
                            <RouterLink :to="{ name : 'chi-tiet-tour', params : { id : tour.id }}" class="mt-5">
                                <button class="h-11 w-52 flex justify-center items-center text-color-1 text-base border border-color-1 rounded-xl
                                    hover:text-white hover:bg-color-1 transition-all duration-300 mx-auto">
                                    <p>Xem chi tiết</p>
                                </button>
                            </RouterLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
<!--      Pagination-->
      <div class="flex justify-center items-center gap-1 my-5">
        <!-- Vòng lặp số trang -->
        <div
            v-for="page in totalPages"
            :key="page"
            class="h-9 w-9 font-medium text-base rounded-md flex justify-center items-center cursor-pointer transition-all duration-150"
            :class="page === currentPage
            ? 'bg-color-1 text-white font-semibold'
            : 'text-color-9 border border-color-3 hover:text-white hover:bg-color-1'"
                  @click="$emit('change-page', page)"
        >
          {{ page }}
        </div>

        <!-- Nút tới cuối -->
        <div
            v-if="currentPage < totalPages"
            class="h-9 w-9 text-color-9 font-medium text-base rounded-md border border-color-3 flex justify-center items-center
           hover:text-white hover:bg-color-1 transition-all duration-150 cursor-pointer"
            @click="$emit('change-page', totalPages)"
        >
          <v-icon name="fa-angle-double-right" class="p-1" />
        </div>
      </div>

    </div>

</template>

<script>
    export default {
      data(){
        return{
          options :[
              {
                value: 'Option1',
                label: 'Mặc định',
              },
              {
                value: 'Option2',
                label: 'A -> Z',
              },
              {
                value: 'Option3',
                label: 'Z -> A',
              },
            ],
          selectedSort : null,
        }
      },
      props:{
        tours:{
          type: Array,
          required: true
        },
        currentPage: {
          type: Number,
          required: true
        },
        totalPages: {
          type: Number,
          required: true
        }
      },
      methods:{
        formatPrice(price){
          return new Intl.NumberFormat('vi-VN').format(price);
        },
      },
      mounted() {
        this.selectedSort = this.options[0]
      }
    }
</script>