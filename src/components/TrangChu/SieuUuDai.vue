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
            <SplideSlide>
               <CartTourNgang />
               <CartTourNgang />
            </SplideSlide>
            <SplideSlide>
               <CartTourNgang />
               <CartTourNgang />
            </SplideSlide>
            <SplideSlide>
               <CartTourNgang />
               <CartTourNgang />
            </SplideSlide>
            <SplideSlide>
               <CartTourNgang />
               <CartTourNgang />
            </SplideSlide>
          </Splide>
        </div>
    </div>
</template>

<script>
    import CartTourNgang from '@/components/DungChung/CartTourNgang.vue';
    import { Splide, SplideSlide } from "@splidejs/vue-splide";

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
            }
        }
    }
</script>