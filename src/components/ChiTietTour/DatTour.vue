

<template>
    <div class="w-1/3">
        <div class="sticky top-0  bg-color-2 p-3 rounded-2xl">
            <div class="text-3xl text-color-1">
              {{ formatPrice(tour.price_adult) }}₫
            </div>
            <div class="font-medium text-sm text-color-6 mt-3 border-b border-color-10 pb-3">Mã tour : <span class="font-normal">{{ tour.id }}</span></div>
            <div class="flex justify-start items-center gap-3 mt-3 border-b border-color-10 pb-3">
                <div class="font-medium text-sm text-color-6">Mã giảm giá : </div>
                <div>
                    <span class="font-normal discount inline-block py-1 px-2 bg-color-1 text-color-2 relative left-[-3px] align-top">Giảm 50%</span>
                </div>
            </div>
            <div class="flex items-center gap-5 max-md:mb-2 py-5">
                <div class="p-2 inline-block rounded-2xl bg-color-1">
                    <v-icon name="fa-calendar-alt" scale="1.5" class="text-white" />
                </div>
                <div class="demo-date-picker">
                    <div class="block">
                      <VueDatePicker
                          v-model="date"
                          :enable-time-picker="false"
                          input-class="border min-h-9 py-2 px-3 rounded-md w-full text-left"
                          placeholder="Chọn ngày khởi hành"
                      />
                    </div>
                </div>
            </div>
            <div class="mt-5 border-b border-color-10 pb-3">
                <div class="font-medium text-sm text-color-6">Loại khách </div>
                <div class="py-3">
                  <!-- Người lớn -->
                  <div class="flex gap-2 items-center mb-2">
                    <div class="text-[13px] w-5/12">Người lớn</div>
                    <div class="relative w-1/3">
                      <button
                          class="absolute text-lg h-9 w-5 top-0 left-0"
                          @click="decrease('adult')"
                      >-</button>
                      <input
                          type="number"
                          v-model="adult"
                          min="0"
                          class="w-full h-9 p-0 text-center bg-white border border-color-1 pl-[10px] rounded-lg"
                      >
                      <button
                          class="absolute text-lg h-9 w-5 top-0 right-0"
                          @click="increase('adult')"
                      >+</button>
                    </div>
                    <div class="text-[13px] text-color-1 w-1/4 text-right">{{ formatPrice(tour.price_adult) }}đ</div>
                  </div>

                  <!-- Trẻ em -->
                  <div class="flex gap-2 items-center mb-2">
                    <div class="text-[13px] w-5/12">Trẻ em</div>
                    <div class="relative w-1/3">
                      <button
                          class="absolute text-lg h-9 w-5 top-0 left-0"
                          @click="decrease('child')"
                      >-</button>
                      <input
                          type="number"
                          v-model="child"
                          min="0"
                          class="w-full h-9 p-0 text-center bg-white border border-color-1 pl-[10px] rounded-lg"
                      >
                      <button
                          class="absolute text-lg h-9 w-5 top-0 right-0"
                          @click="increase('child')"
                      >+</button>
                    </div>
                    <div class="text-[13px] text-color-1 w-1/4 text-right">{{ formatPrice(tour.price_child) }}đ</div>
                  </div>

                  <!-- Trẻ sơ sinh -->
                  <div class="flex gap-2 items-center">
                    <div class="text-[13px] w-5/12">Trẻ sơ sinh</div>
                    <div class="relative w-1/3">
                      <button
                          class="absolute text-lg h-9 w-5 top-0 left-0"
                          @click="decrease('price_infant')"
                      >-</button>
                      <input
                          type="number"
                          v-model="infant"
                          min="0"
                          class="w-full h-9 p-0 text-center bg-white border border-color-1 pl-[10px] rounded-lg"
                      >
                      <button
                          class="absolute text-lg h-9 w-5 top-0 right-0"
                          @click="increase('price_infant')"
                      >+</button>
                    </div>
                    <div class="text-[13px] text-color-1 w-1/4 text-right">{{ formatPrice(tour.price_infant) }}đ</div>
                  </div>
                </div>
            </div>
            <div class="my-3 flex justify-between items-center">
                <div class="font-medium text-sm text-color-6">Tổng tiền</div>
                <div class="text-color-1 font-semibold text-xl">{{ formatPrice(totalPrice) }} đ</div>
            </div>
            <div class="flex justify-center items-center gap-5">
                <button class="h-10 w-full bg-color-1 text-white border border-color-1 rounded-lg text-sm">Đặt ngay</button>
                <button class="h-10 w-full text-color-1 border border-color-1 rounded-lg text-sm hover:bg-color-1 hover:text-white">Liên hệ tư vấn</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return{
      date : new Date(),
      adult: 1,
      child: 1,
      infant : 1,
      price_infant: 1000000,
      adultPrice: 4500000,
      childPrice: 2500000,
    }
  },
  props:{
    tour : {
      type : Object,
      required: true
    }
  },
  methods:{
    formatPrice(price){
      return new Intl.NumberFormat('vi-VN').format(price);
    },
    increase(type) {
      this[type]++;
    },
    decrease(type) {
      if (this[type] > 0) {
        this[type]--;
      }
    }
  },
  computed: {
    totalPrice() {
      return this.adult * this.tour.price_adult + this.child * this.tour.price_child + this.infant * this.tour.price_infant;
    },
  },
}
</script>

<style scoped>
.discount::before{
  content: "";
  width: 6px;
  height: calc(100% - 5px);
  position: absolute;
  top: 2.5px;
  background-image: radial-gradient(#e6f4ff 2px, transparent 0);
  background-size: 6px 6px;
  background-position-x: -6px;
  right: -3px;
}
.discount::after{
  content: "";
  width: 6px;
  height: calc(100% - 5px);
  position: absolute;
  top: 2.5px;
  background-image: radial-gradient(#e6f4ff 2px, transparent 0);
  background-size: 6px 6px;
  background-position-x: -6px;
  left: -3px;
}
</style>