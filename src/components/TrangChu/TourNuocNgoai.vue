<template>
    <div class="container mx-auto py-16 tour max-md:py-8">
        <TabGroup>
            <div class="flex justify-between items-center max-md:flex-wrap">
                <div>
                    <div class="text-3xl font-bold text-color-6 mb-2 hover:text-color-1 inline-block max-md:text-[28px]">Tour nước ngoài</div>
                    <p class="text-color-5 text-base font-medium mb-5">Hơn 1.000 tour đa dạng giá hời có hạn</p>
                </div>
                <div>
                  <TabList>
                    <Tab v-for="item in dataCate" as="template" v-slot="{ selected }">
                      <div class="inline-flex justify-center ml-2 items-center rounded-lg py-2 px-[14px] text-[15px] transition-all duration-200 hover:bg-color-1 hover:text-white cursor-pointer"
                           :class="{ 'bg-blue-500 text-white': selected, 'bg-color-2 text-color-1': !selected }"
                      >
                        {{ item.name }}
                      </div>
                    </Tab>
                  </TabList>
                </div>
            </div>
          <TabPanels>
            <TabPanel v-for="item in dataCate" :key="item.id">
              <div class="pt-5">
                <Splide :options="splideOptions" ref="splide">
                  <SplideSlide v-for="tour in (dataTours[item.id] || [])" :key="tour.id" >
                    <div class="rounded-2xl p-[10px] border border-color-3 bg-white overflow-hidden cart-tour hover:border-color-1 transition-all duration-200">
                      <div class="mb-2 overflow-hidden relative">
                        <img :src="tour.thumbnail" alt="Image"
                             class="rounded-lg w-full h-full transition-all duration-200">
                        <div v-if="tour.transport === 'Xe khách'" class="absolute bottom-0 right-0 z-10 flex justify-center items-center">
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
                          <div>Khởi hành từ: {{ tour.departure_from }}</div>
                        </div>
                        <div class="text-base font-bold text-color-6 mb-1 hover:text-color-1 transition-all duration-100 min-h-12">{{tour.title }}</div>
                        <div class="mb-1 text-color-1">
                          <v-icon name="fa-regular-star" />
                          <v-icon name="fa-regular-star" />
                          <v-icon name="fa-regular-star" />
                          <v-icon name="fa-regular-star" />
                          <v-icon name="fa-regular-star" />
                        </div>
                        <div class="mb-1 text-base text-color-1 font-bold">{{ formatPrice(tour.price_adult) }}</div>
                        <div class="text-color-8 flex items-center gap-2 mb-1 text-sm">
                          <v-icon name="fa-regular-clock"/>
                          <p>Thời gian: {{ tour.duration }}</p>
                        </div>
                      </div>
                    </div>
                  </SplideSlide>
                </Splide>
              </div>
            </TabPanel>
          </TabPanels>
        </TabGroup>
        <div class="mt-5">
            <button class="h-11 w-52 flex justify-center items-center text-color-1 text-base border border-color-1 rounded-xl
                hover:text-white hover:bg-color-1 transition-all duration-300 mx-auto">
                <p>Xem tất cả</p>
            </button>
        </div>
        
    </div>
</template>

<script>
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
import CartTour from '@/components/DungChung/CartTour.vue';
import { Splide, SplideSlide } from "@splidejs/vue-splide";
import {getCategoryClient} from "@/service/client/tourCategoryService.js";
import {getTours} from "@/service/client/tourService.js";
export default {
  components: {
    Splide,
    SplideSlide,
    CartTour,
    TabGroup,
    TabList,
    Tab,
    TabPanels,
    TabPanel
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
      dataCate : [],
      dataTours: {}
    }
  },
  methods:{
    async loadCategory() {
      const result = await getCategoryClient({ parentId: 4 });
      if (result) {
        this.dataCate = result;
        for (const cate of result) {
          await this.loadTours(cate.id);
        }
      }
    },
    formatPrice(value) {
      if (typeof value !== 'number') return value;
      return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
    },
    async loadTours(cateId) {
      const result = await getTours({ category: cateId });
      if (result) {
        this.dataTours[cateId] = result.data;
      }
    }
  },
  mounted() {
    this.loadCategory();
  }
}
</script>