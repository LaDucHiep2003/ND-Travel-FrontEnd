<template>
    <div class="mt-10">
        <div class="border-b border-color-3">
            <div class="text-xl border-b-2 border-color-1 inline-block pb-1">Tour cùng loại</div>
        </div>
        <div class="grid grid-cols-4 gap-5 mt-5">
          <div v-for="item in tours" :key="item.id" class="rounded-2xl p-[10px] border border-color-3 bg-white overflow-hidden cart-tour hover:border-color-1 transition-all duration-200">
            <div class="mb-2 overflow-hidden relative">
              <img :src="item.thumbnail" alt="Image"
                   class="rounded-lg w-full h-full transition-all duration-200">
              <div v-if="item.transport === 'Xe khách'" class="absolute bottom-0 right-0 z-10 flex justify-center items-center">
                <div class="w-7 h-7 inline-flex justify-center items-center" style="background: rgba(0, 0, 0, 0.4);">
                  <v-icon name="fa-bus" class="text-white" scale="1.2" />
                </div>
              </div>
              <div v-else class="absolute bottom-0 right-0 z-10 flex justify-center items-center">
                <div class="w-7 h-7 inline-flex justify-center items-center" style="background: rgba(0, 0, 0, 0.4);">
                  <v-icon name="fa-plane" class="text-white" scale="1.2" />
                </div>
              </div>
            </div>
            <div>
              <div class="text-color-8 flex items-center gap-2 mb-1">
                <v-icon name="fa-map-marker-alt"/>
                <div>Khởi hành từ: {{ item.departure_from }}</div>
              </div>
              <div class="text-base font-bold text-color-6 mb-1 hover:text-color-1 transition-all duration-100 min-h-12">{{item.title }}</div>
              <div class="mb-1 text-color-1">
                <v-icon name="fa-regular-star" />
                <v-icon name="fa-regular-star" />
                <v-icon name="fa-regular-star" />
                <v-icon name="fa-regular-star" />
                <v-icon name="fa-regular-star" />
              </div>
              <div class="mb-1 text-base text-color-1 font-bold">{{ formatPrice(item.price_adult) }}</div>
              <div class="text-color-8 flex items-center gap-2 mb-1 text-sm">
                <v-icon name="fa-regular-clock"/>
                <p>Thời gian: {{ item.duration }}</p>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
    import CartTour from "@/components/DungChung/CartTour.vue";
    import {getTours} from "@/service/client/tourService.js";

    export default{
      components:{
          CartTour
      },
      data(){
        return{
          tours : []
        }
      },
      methods:{
        async getTours(){
          const result = await getTours({
            category : 2
          })
          if(result){
            this.tours = result.data
          }
        },
        formatPrice(price){
          return new Intl.NumberFormat('vi-VN').format(price);
        },
      },
      mounted() {
        this.getTours();
      }
    }
</script>