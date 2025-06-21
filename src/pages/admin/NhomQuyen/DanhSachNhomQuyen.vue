<template>
  <div class="container mx-auto">
    <div class="py-4">
      <div class="flex justify-between flex-nowrap min-h-8">
        <div class="py-1.5 text-[22px] font-550">Danh sách nhóm quyền</div>
        <div class="flex-1 flex items-center self-start ml-4 whitespace-nowrap">
          <div class="flex w-full justify-end text-sm gap-2 flex-wrap">
            <button class="bg-transparent rounded-md inline-flex justify-center items-center relative text-center min-h-9
              min-w-9 py-[7px] px-4 hover:bg-[#f1f2f3]">
              <span class="flex justify-center items-center">
                <span class="mr-1 h-5 w-5 block max-w-full max-h-full m-auto text-color-22">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                    <path fill="currentColor" d="M22 11.273v6.545a2.646 2.646 0 0 1-2.727 2.546h-14.546a2.646 2.646 0 0 1-2.727-2.546v-6.545a.91.91 0 0 1 1.818 0v6.545a.845.845 0 0 0 .91.727h14.545a.846.846 0 0 0 .909-.727v-6.545a.909.909 0 0 1 1.818 0m-12.19-2.882 1.28-1.291v7.81a.909.909 0 0 0 1.82 0v-7.81l1.28 1.29a.91.91 0 0 0 1.556-.645.91.91 0 0 0-.264-.645l-2.836-2.836a.9.9 0 0 0-.582-.264h-.173a.9.9 0 0 0-.491.218h-.046l-2.836 2.882a.913.913 0 0 0 1.291 1.29"></path>
                  </svg>
                </span>
                <span class="font-550">Xuất file</span>
              </span>
            </button>
          </div>
          <div class="ml-4">
            <RouterLink :to="{ name : 'create_role'}" class="flex justify-center items-center relative text-center rounded-md min-w-9 min-h-9 py-[7px]
                px-4 border border-transparent text-white bg-color-28 hover:bg-[#33a0ff]">
              <span class="flex justify-center items-center relative font-550">
                <span class="mr-1 h-5 w-5 block max-w-full max-h-full m-auto text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                    <path fill="currentColor" fill-rule="evenodd" d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10m-1 5v4h-4v2h4v4h2v-4h4v-2h-4v-4zm-7 5c0 4.41 3.59 8 8 8s8-3.59 8-8-3.59-8-8-8-8 3.59-8 8" clip-rule="evenodd"></path>
                  </svg>
                </span>
                <span>Thêm nhóm quyền</span>
              </span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="relative rounded-md bg-white overflow-clip css-onvepv h-screen" style="box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 1px, rgba(0, 0, 0, 0.15) 0px 1px 2px 0px;
                outline: transparent solid 1px;}">
      <!--Khi khong co san pham nao-->
      <div class="h-[75vh] hidden">
        <div class="px-5 pb-16">
          <div class="flex flex-col -mx-5">
            <div class="opacity-50 py-3 border-b border-[#e8eaeb]">
              <div class="grid css-1q01qjh items-center gap-5">
                <div class="flex flex-row flex-nowrap items-center">
                  <span class="h-5 w-5 block text-color-22 m-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                      <path fill="currentColor" d="m18.425 12-6.01 6.01-1.415-1.414 4.596-4.596-4.596-4.596 1.414-1.414z"></path><path fill="currentColor" d="m13 12-6.01 6.01-1.415-1.414 4.597-4.596-4.597-4.596 1.415-1.414z"></path>
                    </svg>
                  </span>
                  <div class="w-4 h-4 border-2 rounded-[4px] border-[#d3d5d7]"></div>
                </div>
                <div class="w-full">
                  <div class="w-9/12 h-3 rounded-md" style="background-color: rgb(237, 238, 239);"></div>
                </div>
                <div class="w-full">
                  <div class="w-[85%] h-3 rounded-md" style="background-color: rgb(237, 238, 239);"></div>
                </div>
                <div class="w-full">
                  <div class="w-[95%] h-3 rounded-md" style="background-color: rgb(237, 238, 239);"></div>
                </div>
                <div class="w-full">
                  <div class="w-[65%] h-3 rounded-md" style="background-color: rgb(237, 238, 239);"></div>
                </div>
                <div class="w-full">
                  <div class="w-[65%] h-3 rounded-md" style="background-color: rgb(237, 238, 239);"></div>
                </div>
                <div class="w-full">
                  <div class="w-[85%] h-3 rounded-md" style="background-color: rgb(237, 238, 239);"></div>
                </div>
                <div class="w-full">
                  <div class="w-3/4 h-3 rounded-md" style="background-color: rgb(237, 238, 239);"></div>
                </div>
              </div>
            </div>
            <div class="opacity-30 py-3 border-b border-[#e8eaeb]">
              <div class="grid css-1q01qjh items-center gap-5">
                <div class="flex flex-row flex-nowrap items-center">
                  <span class="h-5 w-5 block text-color-22 m-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                      <path fill="currentColor" d="m18.425 12-6.01 6.01-1.415-1.414 4.596-4.596-4.596-4.596 1.414-1.414z"></path><path fill="currentColor" d="m13 12-6.01 6.01-1.415-1.414 4.597-4.596-4.597-4.596 1.415-1.414z"></path>
                    </svg>
                  </span>
                  <div class="w-4 h-4 border-2 rounded-[4px] border-[#d3d5d7]"></div>
                </div>
                <div class="w-full">
                  <div class="w-9/12 h-3 rounded-md" style="background-color: rgb(237, 238, 239);"></div>
                </div>
                <div class="w-full">
                  <div class="w-[85%] h-3 rounded-md" style="background-color: rgb(237, 238, 239);"></div>
                </div>
                <div class="w-full">
                  <div class="w-[95%] h-3 rounded-md" style="background-color: rgb(237, 238, 239);"></div>
                </div>
                <div class="w-full">
                  <div class="w-[65%] h-3 rounded-md" style="background-color: rgb(237, 238, 239);"></div>
                </div>
                <div class="w-full">
                  <div class="w-[65%] h-3 rounded-md" style="background-color: rgb(237, 238, 239);"></div>
                </div>
                <div class="w-full">
                  <div class="w-[85%] h-3 rounded-md" style="background-color: rgb(237, 238, 239);"></div>
                </div>
                <div class="w-full">
                  <div class="w-3/4 h-3 rounded-md" style="background-color: rgb(237, 238, 239);"></div>
                </div>
              </div>
            </div>
            <div class="opacity-10 py-3 border-b border-[#e8eaeb]">
              <div class="grid css-1q01qjh items-center gap-5">
                <div class="flex flex-row flex-nowrap items-center">
                  <span class="h-5 w-5 block text-color-22 m-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                      <path fill="currentColor" d="m18.425 12-6.01 6.01-1.415-1.414 4.596-4.596-4.596-4.596 1.414-1.414z"></path><path fill="currentColor" d="m13 12-6.01 6.01-1.415-1.414 4.597-4.596-4.597-4.596 1.415-1.414z"></path>
                    </svg>
                  </span>
                  <div class="w-4 h-4 border-2 rounded-[4px] border-[#d3d5d7]"></div>
                </div>
                <div class="w-full">
                  <div class="w-9/12 h-3 rounded-md" style="background-color: rgb(237, 238, 239);"></div>
                </div>
                <div class="w-full">
                  <div class="w-[85%] h-3 rounded-md" style="background-color: rgb(237, 238, 239);"></div>
                </div>
                <div class="w-full">
                  <div class="w-[95%] h-3 rounded-md" style="background-color: rgb(237, 238, 239);"></div>
                </div>
                <div class="w-full">
                  <div class="w-[65%] h-3 rounded-md" style="background-color: rgb(237, 238, 239);"></div>
                </div>
                <div class="w-full">
                  <div class="w-[65%] h-3 rounded-md" style="background-color: rgb(237, 238, 239);"></div>
                </div>
                <div class="w-full">
                  <div class="w-[85%] h-3 rounded-md" style="background-color: rgb(237, 238, 239);"></div>
                </div>
                <div class="w-full">
                  <div class="w-3/4 h-3 rounded-md" style="background-color: rgb(237, 238, 239);"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex flex-col items-center gap-4">
            <div class="flex justify-center items-center relative">
              <img src="data:image/svg+xml,%3csvg%20width='80'%20height='81'%20viewBox='0%200%2080%2081'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20opacity='0.9'%20clip-path='url(%23clip0_12126_171630)'%3e%3cpath%20d='M18.1668%2022.8158C17.77%2021.3203%2017.9684%2019.7638%2018.7469%2018.4209C19.5254%2017.078%2020.7771%2016.1166%2022.273%2015.7046C25.3717%2014.8653%2028.562%2016.7118%2029.4015%2019.8096L29.5542%2020.4047L28.1147%2021.8437L30.4777%2021.2059L33.294%2018.3904V20.4459L34.4999%2020.1209V17.3985L40.4378%2015.8267V16.9254C40.4378%2017.458%2040.5293%2017.9707%2040.6957%2018.4484L41.6574%2018.1889L41.781%2017.7754C41.7108%2017.5038%2041.6742%2017.2199%2041.6742%2016.9269L41.6589%2015.6451H42.416L42.79%2014.3938H41.0483C41.0025%2014.3938%2040.9415%2014.3938%2040.8957%2014.409L33.7366%2016.3318C33.6298%2016.3623%2033.5382%2016.4234%2033.4619%2016.4997L30.5311%2019.4143C29.4778%2015.7214%2025.6617%2013.5392%2021.9372%2014.5464C20.1512%2015.0194%2018.64%2016.1792%2017.6936%2017.812C16.7472%2019.4448%2016.503%2021.3371%2016.9915%2023.1378L17.4128%2024.734L18.6034%2024.412L18.1668%2022.8158Z'%20fill='%233E479B'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M15.9439%2022.8093L28.9723%2019.311C30.1432%2018.9881%2031.3545%2019.607%2031.8121%2020.7238L37.5322%2035.0669C37.7879%2035.7262%2037.761%2036.399%2037.4515%2037.0179C37.1284%2037.6638%2036.617%2038.0674%2035.944%2038.2558L19.3894%2042.696C18.7165%2042.8843%2018.057%2042.7767%2017.4648%2042.373C16.8726%2041.9963%2016.5226%2041.4312%2016.415%2040.7315L14.1942%2025.4465C14.0327%2024.2356%2014.7595%2023.1053%2015.9439%2022.8093Z'%20fill='%233AE580'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M52.0323%2016.3359L67.3083%2020.4397L61.9247%2051.0097L53.5935%2049.5296L57.9273%2024.8934L49.3674%2048.4129L41.4131%2045.5066L52.0323%2016.3359Z'%20fill='%23002C5B'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M59.6904%2018.3809L61.5612%2018.8787L60.4576%2022.9825C60.323%2023.5072%2059.7846%2023.8033%2059.2732%2023.6687L58.3311%2023.4131L59.6904%2018.3809Z'%20fill='%23013E80'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M51.8306%2016.9006L67.2143%2021.0179L67.8334%2018.7305L52.4497%2014.6133L51.8306%2016.9006Z'%20fill='%233E479B'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M44.666%2020.3742L49.8208%2015.2344L56.9272%2022.3521L51.7859%2027.5054L44.666%2020.3742Z'%20fill='%235072F1'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M36.0251%2020.3742L30.8703%2015.2344L23.7505%2022.3521L28.8918%2027.5054L36.0251%2020.3742Z'%20fill='%235072F1'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M30.8701%2015.2341L37.1689%2013.5791H44.3157L49.8204%2015.2341V37.8117H30.8701V15.2341Z'%20fill='%235072F1'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M37.1689%2013.5791H44.3157V15.2475C44.3157%2017.1985%2042.7141%2018.8131%2040.749%2018.8131C38.784%2018.8131%2037.1824%2017.1985%2037.1824%2015.2475L37.1689%2013.5791Z'%20fill='%23F3F8FF'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12.877%2035.292H39.8489L45.0979%2054.3309L39.8489%2069.441H17.2915C14.8554%2069.441%2012.877%2067.4631%2012.877%2065.0277V35.292Z'%20fill='%23FD9200'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M66.9419%2035.292H39.8623V69.441H62.5273C64.9499%2069.441%2066.9419%2067.4631%2066.9419%2065.0277V35.292Z'%20fill='%23FF9F1C'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M12.8771%2035.292H39.8625L35.8517%2047.1863C35.246%2049.0027%2033.5905%2050.1733%2031.6659%2050.1733H11.9484C10.9659%2050.1733%2010.1314%2049.7428%209.5527%2048.9489C8.98742%2048.1551%208.85283%2047.2267%209.16239%2046.2983L12.8771%2035.292Z'%20fill='%23FFC55F'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M66.8477%2035.292H39.8623L43.8731%2047.1863C44.4788%2049.0027%2046.1208%2050.1733%2048.0454%2050.1733H67.7763C68.7589%2050.1733%2069.5933%2049.7428%2070.1586%2048.9489C70.7373%2048.1551%2070.8719%2047.2267%2070.5489%2046.2983L66.8477%2035.292Z'%20fill='%23FFC55F'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_12126_171630'%3e%3crect%20width='70'%20height='64.1379'%20fill='white'%20transform='translate(5%208.5)'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e" alt="">
            </div>
            <div class="flex flex-col items-center">
              <div class="pb-4">
                <div class="pb-1 text-xl font-550 text-center">Cửa hàng của bạn chưa có đơn hàng nào</div>
                <div class="block text-center text-color-26">Cửa hàng của bạn chưa có đơn hàng nào</div>
              </div>
              <div class="flex flex-wrap justify-center">
                <RouterLink to="/" class="inline-flex items-center relative justify-center text-center rounded-md min-w-9 min-h-9
                    px-4 py-2 text-white border border-transparent bg-[#0088ff] hover:bg-[#33a0ff]">
                    <span class="flex justify-center items-center tracking-normal">
                      <span class="mr-1 w-5 h-5 block m-auto">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                          <path fill="currentColor" fill-rule="evenodd" d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10m-1 5v4h-4v2h4v4h2v-4h4v-2h-4v-4zm-7 5c0 4.41 3.59 8 8 8s8-3.59 8-8-3.59-8-8-8-8 3.59-8 8" clip-rule="evenodd"></path>
                        </svg>
                      </span>
                      <span class="text-sm font-550">Thêm đơn hàng</span>
                    </span>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--Giao dien khi co san pham-->
      <ul class="flex flex-wrap border-b border-[#e8eaeb]">
        <li v-for="(label, key) in tabLabel" :key="key" class="flex p-0 m-0 relative">
          <button
              @click="currentTab = key"
              class="appearance-none mt-[1px] mb-[-1px] text-color-26 relative w-full px-1 pt-1 pb-1.5 text-center text-nowrap"
          >
      <span
          :class="[
          'relative block rounded-md py-2 px-4 min-w-9 font-550 text-sm css-1hfoem2',
          currentTab === key ? 'text-color-28 active-tab' : 'text-color-26 button-title-table'
        ]"
      >
        {{ label }}
      </span>
          </button>
        </li>
      </ul>

      <LocNhomQuyen />

      <TableNhomQuyen :dataRoles="dataRoles" />
    </div>
  </div>
</template>

<script>
import PhanTrang from "@/pages/admin/DonHang/PhanTrang.vue";
import LocNhomQuyen from "@/pages/admin/NhomQuyen/LocNhomQuyen.vue";
import TableNhomQuyen from "@/pages/admin/NhomQuyen/TableNhomQuyen.vue";
import {getTours} from "@/service/tourService.js";
import {getRoles} from "@/service/roleService.js";
export default {
  components:{
    PhanTrang,
    LocNhomQuyen,
    TableNhomQuyen
  },
  data() {
    return {
      currentTab: 'all',
      searchText: '',
      dataRoles : []
    }
  },
  methods:{
    handleSearch(keyword) {
      this.searchText = keyword;
      this.loadRoles();
    },
    async loadRoles(){
      const params = {
        title : this.searchText,
      }
      const result = await getRoles(params);
      if(result){
        this.dataRoles = result;
      }
    },
  },
  computed: {
    tabLabel() {
      return {
        all: 'Tất cả',
      }
    },
  },
  mounted() {
    this.loadRoles();
  }
}
</script>

<style scoped>
.css-onvepv::before {
  content: "";
  position: absolute;
  inset: 0px;
  z-index: 32;
  border-radius: 6px;
  pointer-events: none;
  mix-blend-mode: luminosity;
}
.css-1q01qjh {
  grid-template-columns: 60px repeat(7, 1fr);
}
.css-1hfoem2::before {
  content: "";
  position: absolute;
  bottom: calc(-6px);
  left: 0px;
  right: 0px;
  height: 2px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.css-1hfoem2:hover::before {
  background-color: rgb(211, 213, 215)
}
.css-1hfoem2::after {
  content: "";
  position: absolute;
  z-index: 1;
  inset: -1px;
  display: block;
  pointer-events: none;
  box-shadow: rgb(0, 136, 255) 0px 0px 0px -1px;
  border-radius: 6px;
}
.active-tab::before {
  background-color: rgb(0, 136, 255);
}
.button-title-table:hover span{
  color: rgb(15, 24, 36);
  background-color: transparent;
}
</style>