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
                        <Tab as="template" v-slot="{ selected }">
                            <div class="inline-flex justify-center items-center rounded-lg py-2 px-[14px] text-[15px] transition-all duration-200 hover:bg-color-1 hover:text-white cursor-pointer"
                                :class="{ 'bg-blue-500 text-white': selected, 'bg-color-2 text-color-1': !selected }"
                            >
                                Hàn Quốc
                            </div>
                        </Tab>
                        <Tab as="template" v-slot="{ selected }">
                            <div class="inline-flex justify-center items-center rounded-lg py-2 px-[14px] text-[15px] transition-all duration-200 hover:bg-color-1 hover:text-white ml-2 cursor-pointer"
                                :class="{ 'bg-blue-500 text-white': selected, 'bg-color-2 text-color-1': !selected }"
                            >
                                Trung Quốc
                            </div>
                        </Tab>
                        <Tab as="template" v-slot="{ selected }">
                            <div class="inline-flex justify-center items-center rounded-lg py-2 px-[14px] text-[15px] transition-all duration-200 hover:bg-color-1 hover:text-white ml-2 cursor-pointer"
                                :class="{ 'bg-blue-500 text-white': selected, 'bg-color-2 text-color-1': !selected }"
                            >
                                Thái Lan
                            </div>
                        </Tab>
                    </TabList>
                </div>
            </div>
            <TabPanels>
                <TabPanel>
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
                </TabPanel>
                <TabPanel>
                    <div class="pt-5">
                        <Splide :options="splideOptions" ref="splide">
                            <SplideSlide>
                                <CartTour />
                            </SplideSlide>
                        </Splide>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div class="pt-5">
                        <Splide :options="splideOptions" ref="splide">
                            <SplideSlide>
                                <CartTour />
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
            }
        }
    }
</script>