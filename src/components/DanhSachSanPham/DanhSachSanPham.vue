<template>
  <BreadCrumb />

  <div class="container mx-auto flex justify-between gap-5 py-10">
    <DanhMucTour @filter-change="handleFilterChange" />
    <DanhSachTour
        :tours="tours"
        :current-page="currentPage"
        :total-pages="totalPages"
        @change-page="handleChangePage"
    />
  </div>
</template>

<script>
import BreadCrumb from '@/components/DanhSachSanPham/BreadCrumb.vue';
import DanhMucTour from '@/components/DanhSachSanPham/DanhMucTour.vue';
import DanhSachTour from '@/components/DanhSachSanPham/DanhSachTour.vue';
import {getTours} from "@/service/client/tourService.js";

export default{
  components:{
    BreadCrumb,
    DanhMucTour,
    DanhSachTour,
  },
  data(){
    return{
      tours : [],
      currentPage: 1,
      perPage: 5,
      totalPages: 1,
      filters: {
        categories: [],
        price_from: 0,
        price_to : 0,
        departures: [],
        destinations: []
      }
    }
  },
  methods:{
    async fetchTours(page = 1) {
      try {
        const result = await getTours({
          price_from: 0,
          page: page,
          size: this.perPage
        })
        if (result) {
          this.tours = result.data        // danh sách tour
          this.currentPage = page
          this.totalPages = result.totalPages // giả sử API có last_page
        }
        console.log({
          page,
          size: this.perPage,
          // mapping filters để gửi API
          categories: this.filters.categories.join(","),
          price_from: this.filters.price_from,
          price_to: this.filters.price_to,
          departures: this.filters.departures.join(","),
          destinations: this.filters.destinations.join(",")
        })
      } catch (e) {
        console.error("Lỗi load tours:", e)
      }
    },
    handleChangePage(page) {
      this.fetchTours(page)
    },
    handleFilterChange(newFilters) {
      this.filters = newFilters
      this.fetchTours(1)   // reset về page 1 khi lọc
    }
  },
  mounted() {
    this.fetchTours(1);
  }
}
</script>