<template>
    <div class="mt-5 detail-tour">
        <TabGroup>
            <div class="border-b-4 border-color-1">
                <TabList>
                    <Tab as="template" v-slot="{ selected }">
                        <div class="inline-flex justify-center items-center rounded-t-lg py-2 px-9 h-12 text-lg transition-all duration-200 hover:bg-color-1 hover:text-white cursor-pointer"
                            :class="{ 'bg-blue-500 text-white': selected, 'bg-color-2': !selected }"
                        >
                            Mô tả
                        </div>
                    </Tab>
                    <Tab as="template" v-slot="{ selected }">
                        <div class="inline-flex ml-4 justify-center items-center rounded-t-lg py-2 px-9 h-12 text-lg transition-all duration-200 hover:bg-color-1 hover:text-white cursor-pointer"
                            :class="{ 'bg-blue-500 text-white': selected, 'bg-color-2': !selected }"
                        >
                            Lịch trình
                        </div>
                    </Tab>
                    <Tab as="template" v-slot="{ selected }">
                        <div class="inline-flex ml-4 justify-center items-center rounded-t-lg py-2 px-9 h-12 text-lg transition-all duration-200 hover:bg-color-1 hover:text-white cursor-pointer"
                            :class="{ 'bg-blue-500 text-white': selected, 'bg-color-2': !selected }"
                        >
                            Vị trí
                        </div>
                    </Tab>
                    <Tab as="template" v-slot="{ selected }">
                        <div class="inline-flex ml-4 justify-center items-center rounded-t-lg py-2 px-9 h-12 text-lg transition-all duration-200 hover:bg-color-1 hover:text-white cursor-pointer"
                            :class="{ 'bg-blue-500 text-white': selected, 'bg-color-2': !selected }"
                        >
                            Đánh giá tour
                        </div>
                    </Tab>
                </TabList>
            </div>
            <TabPanels>
                <TabPanel>
                    <div class="p-7 shadow-box-1">
                        Là thành viên thứ 29 của Câu lạc bộ những Vịnh đẹp nhất thế giới, Nha Trang là điểm đến hấp dẫn du khách trong và 
                        ngoài nước với thiên nhiên hoang sơ, những bãi cát trắng trải dài vô tận và làn nước biển trong xanh như ngọc. Để 
                        khám phá trọn vẹn vẻ đẹp vịnh biển xinh đẹp, cùng với nhiều hoạt động trải nghiêm thú vị du khách đừng quên lựa chọn 
                        tour Hà Nội - Nha Trang 3 ngày 2 đêm tại BestPrice nhé!
                    </div>
                </TabPanel>
                <TabPanel>
                    <div class="p-7">
                        <div>
                            <el-collapse class="shadow-box-1 mb-5 rounded-lg">
                                <el-collapse-item title="Ngày 1: Hà Nội - Nha Trang" name="1">
                                    <div class="py-[10px] px-[15px]">
                                        Xe ô tô và hướng dẫn viên đón quý khách lúc 4h sáng tại Cổng công viên 
                                        Thống Nhất khởi hành đi sân bay Nội Bài để bắt đầu hành trình tour Hà Nội - Nha Trang.
                                    </div>
                                </el-collapse-item>
                            </el-collapse>
                        </div>
                        
                        <div>
                            <el-collapse class="shadow-box-1 mb-5 rounded-lg">
                                <el-collapse-item title="Ngày 2: Khám Phá Biển Đảo Nha Trang" name="1">
                                    <div class="py-[10px] px-[15px]">
                                        Xe ô tô và hướng dẫn viên đón quý khách lúc 4h sáng tại Cổng công viên 
                                        Thống Nhất khởi hành đi sân bay Nội Bài để bắt đầu hành trình tour Hà Nội - Nha Trang.
                                    </div>
                                </el-collapse-item>
                            </el-collapse>
                        </div>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div class="p-8 shadow-box-1">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15600.801265425174!2d109.29670389037463!3d12.166761285123956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317063b8a8351145%3A0xb29d53e91916d3af!2zSMOybiBNdW4!5e0!3m2!1svi!2s!4v1727104457872!5m2!1svi!2s" 
                            width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </TabPanel>
                <TabPanel>
                    <div class="p-8 shadow-box-1">
                        <div class="py-6 rounded-lg flex justify-center items-center border border-color-10 bg-color-11">
                            <div class="text-center">
                                <div>Hiện tại sản phẩm chưa có đánh giá nào, bạn hãy trở thành người đầu tiên đánh giá cho sản phẩm này</div>
                                <div class="mt-3">
                                    <button class="h-9 min-w-[180px] text-white bg-color-12 rounded-md">Gửi đánh giá của bạn</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </TabPanel>
            </TabPanels>
        </TabGroup>
    </div>
</template>

<script>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
    import { ref } from 'vue';
    export default {
        setup(){
            const activeName = ref('1')

            return{
                activeName
            }
        },  
        components: {
            TabGroup,
            TabList,
            Tab,
            TabPanels,
            TabPanel
        },
    }
</script>