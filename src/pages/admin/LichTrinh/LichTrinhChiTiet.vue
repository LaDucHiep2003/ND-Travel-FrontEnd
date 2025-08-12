<template>
  <div class="px-9 mx-auto">
    <div class="py-4">
      <div class="flex justify-start min-h-8 items-center">
        <div class="pr-4">
          <button @click="handleBack" class="inline-flex relative justify-center items-center text-center rounded-md min-w-9 min-h-9 p-1.5
            border border-color-29 bg-white hover:bg-color-30">
            <span class="flex justify-center items-center relative">
              <span class="block w-5 h-5 max-w-full max-h-full m-auto text-color-22">
                 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" focusable="false" aria-hidden="true">
                   <path fill="currentColor" d="M16.667 9.167h-10.142l2.983-2.992-1.175-1.175-5 5 5 5 1.175-1.175-2.983-2.992h10.142z"></path>
                 </svg>
              </span>
            </span>
          </button>
        </div>
        <div class="py-1.5 px-[2px] ">
          <h1 class="font-550 text-[22px]">Chi tiết lịch trình</h1>
        </div>
      </div>
    </div>

    <div v-for="item in dataSchedule" class="flex flex-wrap justify-center items-start -mt-4 -ml-4 pb-5">
      <div class="min-w-[60%] mt-4 ml-4" style="flex: 2.04425 2.04425 693px;">
        <div class="flex flex-col">
          <div class="relative overflow-clip bg-white rounded-md mb-5 outline"
               :class="{
                  'outline-transparent': item.status === 'pending',
                  'outline-green-500': item.status === 'in_progress',
                  'outline-gray-400': item.status === 'completed'
                }"
               style="box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 1px, rgba(0, 0, 0, 0.15) 0px 1px 2px 0px;">
            <div class="pt-5 px-5 font-550 text-base">
              <h2>Lịch trình ngày {{ item.dayNumber }}</h2>
            </div>
            <div class="p-5">
              <div class="-mt-4 -ml-4">
                <div class="mt-4 ml-5">
                  <div class="flex justify-between items-center gap-5">
                    <div class="w-1/4">
                      <div class="break-words flex flex-wrap justify-between items-baseline pb-1 ">
                        <label class="text-color-24">Mã tour</label>
                      </div>
                      <div class="text-sm font-550 text-color-26">#{{ item.tourId }}</div>
                    </div>
                    <div class="w-1/4">
                      <div class="break-words flex flex-wrap justify-between items-baseline pb-1 ">
                        <label class="text-color-24 ">Số ngày</label>
                      </div>
                      <div class="text-sm font-550 text-color-26">Ngày {{ item.dayNumber }}</div>
                    </div>
                    <div class="w-1/4">
                      <div class="break-words flex flex-wrap justify-between items-baseline pb-1 ">
                        <label class="text-color-24">Thời gian</label>
                      </div>
                      <div class="text-sm font-550 text-color-26">{{ item.activityTime }}</div>
                    </div>
                    <div class="w-1/4">
                      <div class="break-words flex flex-wrap justify-between items-baseline pb-1 ">
                        <label class="text-color-24">Thứ tự hiển thị</label>
                      </div>
                      <div class="text-sm font-550 text-color-26">{{ item.orderIndex }}</div>
                    </div>
                  </div>
                </div>

                <div class="mt-4 ml-5">
                  <div class="flex justify-between items-center gap-5">
                    <div class="w-1/4">
                      <div class="break-words flex flex-wrap justify-between items-baseline pb-1 ">
                        <label class="text-color-24">Thời gian</label>
                      </div>
                      <div class="text-sm font-550 text-color-26">{{ item.activityTime }}</div>
                    </div>
                    <div class="w-1/4">
                      <div class="break-words flex flex-wrap justify-between items-baseline pb-1 ">
                        <label class="text-color-24">Tiêu đề</label>
                      </div>
                      <div class="text-sm font-550 text-color-26">{{ item.title }}</div>
                    </div>
                    <div class="w-1/4">
                      <div class="break-words flex flex-wrap justify-between items-baseline pb-1 ">
                        <label class="text-color-24">Địa điểm</label>
                      </div>
                      <div class="text-sm font-550 text-color-26">{{ item.location }}</div>
                    </div>
                    <div class="w-1/4">
                      <div class="break-words flex flex-wrap justify-between items-baseline pb-1">
                        <label class="text-color-24">Trạng thái</label>
                      </div>
                      <div class="text-sm font-550 text-color-26">
                        {{ statusLabel(item.status) }}
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-4 ml-5">
                  <div class="break-words flex flex-wrap justify-between items-baseline pb-1 ">
                    <label class="text-color-24">Mô tả hoạt động</label>
                  </div>
                  <div class="text-sm font-450 leading-6 text-color-26">
                    {{ item.description }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 ml-4">
        <div class="flex flex-col flex-wrap items-stretch">
          <div class="relative overflow-clip bg-white outline outline-transparent rounded-md"
               style="box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 1px, rgba(0, 0, 0, 0.15) 0px 1px 2px 0px;">
            <div class="pt-5 px-5 font-550 text-base">
              <h2>Hành động</h2>
            </div>
            <div class="p-5 flex flex-col gap-3">
              <button class="inline-flex relative justify-center items-center text-center rounded-md min-w-9 min-h-9 py-2 px-4
                border border-transparent text-white bg-color-28 hover:opacity-80">
                <span class="font-550">Chỉnh sửa</span>
              </button>
              <button @click="handleConfirm(item.id, 'in_progress')" v-if="item.status !== 'completed' && item.status !== 'in_progress'" class="inline-flex relative justify-center items-center text-center rounded-md min-w-9 min-h-9 py-2 px-4
                border border-transparent text-white bg-color-28 hover:opacity-80">
                <span class="font-550">Xác nhận</span>
              </button>
              <button @click="handleConfirm(item.id, 'completed')" v-if="item.status !== 'completed' && item.status === 'in_progress'" class="inline-flex relative justify-center items-center text-center rounded-md min-w-9 min-h-9 py-2 px-4
                border border-transparent text-white bg-color-28 hover:opacity-80">
                <span class="font-550">Hoàn thành</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {confirmSchedule, getSchedule} from "@/service/tourService.js";

export default {
  name: 'LichTrinhChiTiet',
  data() {
    return {
      dataSchedule : []
    };
  },
  methods: {
    handleBack() {
      this.$router.back();
    },
    async loadSchedule(){
      const result = await getSchedule(this.$route.params.id);
      if(result){
        console.log(result)
        this.dataSchedule = result;
      }
    },
    statusLabel(status) {
      switch (status) {
        case 'pending':
          return 'Sắp diễn ra';
        case 'in_progress':
          return 'Đang diễn ra';
        case 'completed':
          return 'Hoàn thành';
        default:
          return status;
      }
    },
    async handleConfirm(id, status){
      const result = await confirmSchedule(id, status);
      if(result){
        await this.loadSchedule();
      }
    }
  },
  mounted() {
    this.loadSchedule();
  }
};
</script>

<style scoped>
.text-color-24 {
  color: #111827;
}
.text-color-28 {
  color: #0088ff;
}
.border-color-29 {
  border-color: #e5e7eb;
}
.bg-color-30 {
  background-color: #f9fafb;
}
.font-550 {
  font-weight: 600;
}
.font-450 {
  font-weight: 500;
}
</style>