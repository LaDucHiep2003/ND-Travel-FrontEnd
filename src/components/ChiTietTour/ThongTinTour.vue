
<template>
    <div class="w-2/3">
        <div class="h-[450px] w-[780px]">
            <img :src="tour.thumbnail" alt="Thumbnail" class="w-full h-full rounded-lg">
        </div>
        <div class="flex items-center gap-2 mt-3 text-color-5">
            <v-icon name="fa-share-alt" class="text-color-5" scale="1.2" />
            <p class="text-sm">Chia sẻ</p>
            <div class="h-6 w-6 bg-color-1 text-white flex justify-center items-center rounded-[50%]">
                <v-icon name="fa-facebook-f" />
            </div>
            <div class="h-6 w-6 bg-color-1 text-white flex justify-center items-center rounded-[50%]">
                <v-icon name="fa-pinterest-p" />
            </div>
            <div class="h-6 w-6 bg-color-1 text-white flex justify-center items-center rounded-[50%]">
                <v-icon name="fa-twitter" />
            </div>
        </div>

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
              <div class="p-7 shadow-box-1">{{ tour.description }}</div>
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
                <iframe :src="tour.location"
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

    </div>
</template>

<script>
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';

    export default{
      data(){
        return{
          activeName : 1
        }
      },
      components: {
        TabGroup,
        TabList,
        Tab,
        TabPanels,
        TabPanel
      },
      props:{
          tour : {
            type : Object,
            required: true
          }
      }
    }
</script>