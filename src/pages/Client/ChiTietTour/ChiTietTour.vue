

<template>
    <BreadCrumb />

    <div class="container mx-auto py-10">
        <div class="text-3xl">{{ tour.title }}</div>
        <div class="mb-1 text-color-1 mt-3">
            <v-icon name="fa-regular-star" scale="1.2" />
            <v-icon name="fa-regular-star" scale="1.2" />
            <v-icon name="fa-regular-star" scale="1.2" />
            <v-icon name="fa-regular-star" scale="1.2" />
            <v-icon name="fa-regular-star" scale="1.2" />
        </div>
        <div class="flex justify-start items-center gap-6 mt-3">
            <div class="flex gap-2 items-center">
                <div class="p-2 bg-color-2 inline-block rounded-2xl">
                    <v-icon name="fa-map-marker-alt" scale="1.5" class="text-color-1" />
                </div>
                <div class="text-color-5">
                    Khởi hành từ <div class="text-color-1">{{ tour.departure_from }}</div>
                </div>
            </div>
            <div class="flex gap-2 items-center">
                <div class="p-2 bg-color-2 inline-block rounded-2xl">
                    <v-icon name="fa-map-marker-alt" scale="1.5" class="text-color-1" />
                </div>
                <div class="text-color-5">
                    Điểm đến <div class="text-color-1">{{ tour.destination }}</div>
                </div>
            </div>
            <div class="flex gap-2 items-center">
                <div class="p-2 bg-color-2 inline-block rounded-2xl">
                    <v-icon name="fa-regular-calendar-alt" scale="1.5" class="text-color-1" />
                </div>
                <div class="text-color-5">
                    Thời gian <div class="text-color-1">{{ tour.duration }}</div>
                </div>
            </div>
            <div class="flex gap-2 items-center">
                <div class="p-2 bg-color-2 inline-block rounded-2xl">
                    <v-icon name="fa-regular-user" scale="1.5" class="text-color-1" />
                </div>
                <div class="text-color-5">
                    Số chỗ còn nhận <div class="text-color-1">Còn chỗ</div>
                </div>
            </div>
            <div class="flex gap-2 items-center">
                <div class="p-2 bg-color-2 inline-block rounded-2xl">
                    <v-icon name="fa-plane" scale="1.5" class="text-color-1" />
                </div>
                <div class="text-color-5">
                    Di chuyển bằng <div class="text-color-1">{{ tour.transport }}</div>
                </div>
            </div>
        </div>
        <div class="flex justify-between mt-5 gap-5">
            <ThongTinTour :tour="tour" />
            <DatTour :tour="tour" />
        </div>
        <TourCungLoai />
    </div>
</template>

<script>
    import BreadCrumb from '@/components/ChiTietTour/BreadCrumb.vue';
    import ThongTinTour from '@/components/ChiTietTour/ThongTinTour.vue';
    import DatTour from '@/components/ChiTietTour/DatTour.vue';
    import TourCungLoai from '@/components/ChiTietTour/TourCungLoai.vue';
    import {getDetailTour} from "@/service/client/tourService.js";

    export default {
        components:{
            BreadCrumb,
            ThongTinTour,
            DatTour,
            TourCungLoai
        },
      data(){
          return {
            tour : {}
          }
      },
      methods:{
          async getTour(){
            const result = await getDetailTour(this.$route.params.id);
            if(result){
              this.tour = result;
            }
          }
      },
      mounted() {
          this.getTour();
      }
    }
</script>