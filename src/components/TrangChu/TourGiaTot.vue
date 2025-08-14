
<template>
    <div class="container mx-auto tour">
        <div class="flex justify-between items-center mb-2 max-md:flex-wrap">
          <div>
              <div class="text-3xl font-bold text-color-6 mb-2 hover:text-color-1 max-md:text-[28px]">Tour giá tốt</div>
              <p class="text-color-5 text-base font-medium mb-5">Hơn 1.000 tour đa dạng giá hời có hạn</p>
          </div>
          <RouterLink :to="{ name : 'danh-sach-san-pham'}" class="flex items-center gap-2 text-color-1 hover:opacity-70">
              <div class="text-base max-md:text-sm">Xem thêm</div>
              <v-icon name="fa-arrow-right" />
          </RouterLink>
        </div>
        <div class="pt-5">
          <Splide :options="splideOptions" ref="splide">
            <SplideSlide v-for="item in dataTours" :key="item.id">
              <div class="rounded-2xl p-[10px] border border-color-3 bg-white overflow-hidden cart-tour hover:border-color-1 transition-all duration-200">
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
            </SplideSlide>
          </Splide>
        </div>
    </div>
</template>

<script>
import CartTour from '@/components/DungChung/CartTour.vue';
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import {getTours} from "@/service/client/tourService.js";
export default {
    components: {
        Splide,
        SplideSlide,
        CartTour
    },
    data(){
        return{
          splideOptions: {
            perPage: 4,
            perMove: 1,
            gap: "20px",
            pagination: false,
            breakpoints: {
              768: {
                perPage: 1,
                padding: {
                  right: '35%',
                  left: '0px'
                },
                gap: "10px"
              },
              1024: {
                perPage: 2,
              },
            },
          },
          dataTours: []
        }
    },
    methods:{
        async loadData(){
          const result = await getTours({
            price_adultTo : 5000000
          })
          if(result){
            this.dataTours = result;
          }
        },
        formatPrice(value) {
          if (typeof value !== 'number') return value;
          return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        },
    },
  mounted() {
      this.loadData();
  }
}
</script>
