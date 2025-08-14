<template>
    <div class="container mx-auto py-16 tour">
        <div class="flex justify-between max-md:flex-wrap">
            <div>
                <div class="text-3xl font-bold text-color-6 mb-2 hover:text-color-1 inline-block">Giá siêu ưu đãi có hạn</div>
                <p class="text-color-5 text-base font-medium mb-5">Tour giá rẻ bất ngờ</p>
            </div>
            <div class="flex items-center gap-2 text-color-1 hover:opacity-70">
                <div class="text-base max-md:text-sm">Xem thêm</div>
                <v-icon name="fa-arrow-right" />
            </div>
        </div>
        <div class="pt-5">
          <Splide :options="splideOptions" ref="splide">
            <SplideSlide v-for="(group, index) in chunkedTours" :key="index">
              <div v-for="tour in group"
                   :key="tour.id" class="md:flex items-center gap-3 rounded-2xl p-[10px] mb-5 border border-color-3 bg-white overflow-hidden cart-tour hover:border-color-1 transition-all duration-200">
                <div class="mb-2 overflow-hidden md:w-1/2 relative">
                  <img :src="tour.thumbnail" alt="Image"
                       class="rounded-lg w-full h-full transition-all duration-200">
                  <span class="absolute top-2 left-2 bg-bg-1 bg-no-repeat text-xs rounded text-white h-6 w-12 text-center flex justify-center items-center font-bold">-{{ tour.discount }}%</span>
                </div>
                <div class="flex-1">
                  <div class="text-color-8 flex items-center gap-2 mb-1">
                    <v-icon name="fa-map-marker-alt"/>
                    <div>Khởi hành từ: {{ tour.departure_from }}</div>
                  </div>
                  <div class="text-base font-bold text-color-6 mb-1 hover:text-color-1 transition-all duration-100">{{tour.title }}</div>
                  <div class="mb-1 text-color-1">
                    <v-icon name="fa-regular-star" />
                    <v-icon name="fa-regular-star" />
                    <v-icon name="fa-regular-star" />
                    <v-icon name="fa-regular-star" />
                    <v-icon name="fa-regular-star" />
                  </div>
                  <div class="mb-1 flex items-center gap-2">
                    <div class="text-base text-color-1 font-bold">{{ calcDiscountPrice(tour.price_adult, tour.discount) }}</div>
                    <del class="text-xs text-color-8">{{ formatPrice(tour.price_adult) }}</del>
                  </div>
                  <div class="text-color-8 flex items-center gap-2 mb-1 text-sm">
                    <v-icon name="fa-regular-clock"/>
                    <p>Thời gian: 5N4Đ</p>
                  </div>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
    </div>
</template>

<script>
    import CartTourNgang from '@/components/DungChung/CartTourNgang.vue';
    import { Splide, SplideSlide } from "@splidejs/vue-splide";
    import {getTours} from "@/service/client/tourService.js";

    export default{
        components: {
            CartTourNgang,
            Splide,
            SplideSlide,
        },
        data(){
            return{
              splideOptions: {
                perPage: 2,
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
              dataTour : []
            }
        },
      methods:{
          async loadData(){
            const result = await getTours({
              discountFrom : 10
            })
            if(result){
              this.dataTour = result;
            }
          },
          formatPrice(value) {
            if (typeof value !== 'number') return value;
            return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
          },
          calcDiscountPrice(price, discount) {
            if (!price) return 0;
            const finalPrice = price - (price * (discount || 0) / 100);
            return this.formatPrice(Math.max(finalPrice, 0));
          }
      },
      computed: {
        chunkedTours() {
          const chunkSize = 2; // số tour trên 1 slide
          const chunks = [];
          for (let i = 0; i < this.dataTour.length; i += chunkSize) {
            chunks.push(this.dataTour.slice(i, i + chunkSize));
          }
          return chunks;
        }
      },
      mounted() {
          this.loadData();
      }
    }
</script>