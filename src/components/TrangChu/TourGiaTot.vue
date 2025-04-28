
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
            <SplideSlide>
              <CartTour />
            </SplideSlide>
            <SplideSlide>
              <CartTour />
            </SplideSlide>
            <SplideSlide>
              <CartTour />
            </SplideSlide>
            <SplideSlide>
              <CartTour />
            </SplideSlide>
            <SplideSlide>
              <CartTour />
            </SplideSlide>
          </Splide>
        </div>
    </div>
</template>

<script>
    import CartTour from '@/components/DungChung/CartTour.vue';
    import { Splide, SplideSlide } from "@splidejs/vue-splide";
import { RouterLink } from 'vue-router';
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
            }
        }
    }
</script>
