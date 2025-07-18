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
          <h1 class="font-550 text-[22px]">Chỉnh sửa danh mục</h1>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap justify-center items-start -mt-4 -ml-4 pb-5">
      <div class="min-w-[51%] mt-4 ml-4" style="flex: 2.04425 2.04425 693px;">
        <div class="flex flex-col">
          <div class="relative overflow-clip bg-white outline outline-transparent rounded-md"
               style="box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 1px, rgba(0, 0, 0, 0.15) 0px 1px 2px 0px;">
            <div class="pt-5 px-5 font-550 text-base">
              <h2>Thông tin danh mục</h2>
            </div>
            <div class="p-5">
              <div class="-mt-4 -ml-4">
                <div class="mt-4 ml-5">
                  <div class="break-words flex flex-wrap justify-between items-baseline pb-1 ">
                    <label for="title" class="text-color-24 css-1ypmoi1">Tên danh mục</label>
                  </div>
                  <div class="flex items-center gap-2 relative font-450 text-sm">
                    <input id="title" class="resize-none z-30 w-full text-left border min-h-9 py-2 px-3 rounded-md"
                           type="text" v-model="dataSent.name" placeholder="Nhập tên sản phẩm" style="box-shadow: none;outline: none;">
                    <div class="bg-white border border-color-29 z-10 absolute inset-0 pointer-events-none rounded-md"></div>
                  </div>
                </div>
                <div class="mt-4 ml-5">
                  <div class="break-words flex flex-wrap justify-between items-baseline pb-1 ">
                    <label class="text-color-24 css-1ypmoi1">Mô tả</label>
                  </div>
                  <div class="flex items-center gap-2 relative font-450 text-sm">
                    <Editor
                        api-key="5igfhdajsjjgz97l6dnw1fg7u9pn6192n0tewmq3kx1shkg2"
                        :init="{
                          toolbar_mode: 'sliding',
                          plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount',
                          toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table | align lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                        }"
                        initial-value=""
                        v-model="dataSent.description"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 ml-4" style="flex: 1 1 339px;">
        <div class="flex flex-col flex-wrap items-stretch">
          <div class="relative overflow-clip bg-white outline outline-transparent rounded-md"
               style="box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 1px, rgba(0, 0, 0, 0.15) 0px 1px 2px 0px;">
            <div class="pt-5 px-5 font-550 text-base">
              <h2>Ảnh sản phẩm</h2>
            </div>
            <div class="p-5 flex flex-col gap-2">
              <div class="relative flex justify-center bg-white rounded-md min-h-24 items-center css-w1rzuf">
                <div class="flex-1">
                  <div class="flex flex-col items-center py-5 gap-1">
                    <div class="flex gap-2 items-center">
                      <span class="w-5 h-5 max-w-full max-h-full m-auto text-color-22">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                          <path fill="currentColor" d="M21 13.286h-7.714v7.714h-2.572v-7.714h-7.714v-2.572h7.714v-7.714h2.572v7.714h7.714z"></path>
                        </svg>
                      </span>
                      <p>Kéo thả hoặc <span @click="toggleAddUrl" class="text-color-28 font-550 cursor-pointer">thêm ảnh từ Url</span></p>
                    </div>
                    <span class="font-550">
                      <span class="text-color-28">Tải ảnh lên từ thiết bị</span>
                    </span>
                    <p class="font-450 text-color-26">(Dung lượng ảnh tối đã 2M)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="relative bg-white outline outline-transparent rounded-md mt-4"
               style="box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 1px, rgba(0, 0, 0, 0.15) 0px 1px 2px 0px;">
            <div class="p-5 font-550 text-base">
              <div class="flex items-center gap-4">
                <label for="">Danh mục</label>
                <span class="w-4 h-4 text-color-28">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g fill="currentColor" clip-path="url(#355__a)">
                    <path d="M11.1 7.5v1.8h1.8v-1.8z"></path><path d="M11.1 12.9v3.6h2.7v-1.8h-.9v-3.6h-2.7v1.8z"></path><path fill-rule="evenodd" d="M12 3c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9m-7.2 9c0 4 3.2 7.2 7.2 7.2s7.2-3.2 7.2-7.2-3.2-7.2-7.2-7.2-7.2 3.2-7.2 7.2" clip-rule="evenodd"></path></g><defs><clipPath id="355__a"><path fill="currentColor" d="M3 3h18v18h-18z"></path></clipPath></defs>
                  </svg>
                </span>
              </div>
              <div class="relative inline-block text-left w-full">
                <!-- Checkbox ẩn để làm toggle -->
                <input type="checkbox" id="category" class="peer hidden" />
                <!-- Button dùng label để toggle -->
                <label for="category" class="cursor-pointer whitespace-nowrap inline-flex relative items-center text-left
                    w-full min-h-6 py-[7px] px-4 border border-color-29 bg-white hover:bg-color-30 rounded-md">
                  <span class="flex justify-between items-center relative w-full">
                    <span class="font-450 text-sm">{{ selectedCategory }}</span>
                    <span class="ml-1 block w-5 h-5 font-450 text-color-22">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path fill="currentColor" d="m7 9.5 5 5 5-5z"></path>
                      </svg>
                    </span>
                  </span>
                </label>
                <div class="absolute top-full mt-1 w-full left-0 z-50 text-sm  border border-color-29 rounded-md hidden peer-checked:block">
                  <div
                      v-for="(option, key) in optionsCategory"
                      :key="key"
                      @click="selectCategory(option)"
                      class="py-[7px] px-4 bg-white rounded-md isolate hover:bg-gray-100 border-b cursor-pointer flex gap-3 items-center
                        justify-between"
                  >
                    <div class="flex gap-3 items-center">
                      {{ option.label }}
                    </div>
                    <svg v-if="selectedCategory === option.label" width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M13.3334 4L6.00002 11.3333L2.66669 8" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-4 border-t border-color-29">
      <div class="flex justify-end gap-4">
        <button @click="handleSubmit" class="inline-flex relative justify-center items-center text-center rounded-md min-w-9 min-h-9 py-2 px-4
        border border-transparent text-white bg-color-28 hover:opacity-70">
          <span class="font-550">Cập nhật danh mục</span>
        </button>
      </div>
    </div>
  </div>
  <div :class="{ 'block' : openAddUrl, 'hidden' : !openAddUrl}">
    <div class="opacity-1 fixed inset-0 block animation z-[519]" style="background-color: rgba(0, 0, 0, 0.5);"></div>
    <div class="flex justify-center inset-0 flex-col top-0 left-0 z-[519] fixed items-center">
      <div class="relative mx-auto rounded-md  max-w-[700px] flex flex-col justify-center w-full max-h-[calc(-64px-100vh)]"
           style="box-shadow: rgba(0, 0, 0, 0.2) 0px 26px 80px, rgba(0, 0, 0, 0.2) 0px 0px 1px;">
        <div class="bg-white rounded-md">
          <div class="py-2 px-5 border border-color-29 rounded-tr-md rounded-tl-md">
            <div class="flex flex-row items-center justify-between">
              <div class="flex-1 text-lg font-550">Thêm ảnh từ URL</div>
              <div>
                <span class="inline-block text-color-22">
                  <button @click="toggleAddUrl" class="inline-flex relative justify-center items-center text-center min-w-9 min-h-9 py-2 bg-white">
                    <span class="flex justify-center items-center">
                      <span class="w-5 h-5 block m-auto max-w-full max-h-full">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                          <path fill="currentColor" d="m19 6.41-1.41-1.41-5.59 5.59-5.59-5.59-1.41 1.41 5.59 5.59-5.59 5.59 1.41 1.41 5.59-5.59 5.59 5.59 1.41-1.41-5.59-5.59z"></path>
                        </svg>
                      </span>
                    </span>
                  </button>
                </span>
              </div>
            </div>
          </div>
          <div class="overflow-auto p-5">
            <div class="flex flex-col justify-center gap-4">
              <div>
                <div class="flex justify-between items-baseline break-words flex-wrap pb-1">
                  <label for="thumbnail" class="text-color-24">Đường dẫn ảnh</label>
                </div>
                <div class="flex items-center gap-2 relative font-450 text-sm">
                  <input id="thumbnail" class="resize-none z-30 w-full text-left border min-h-9 py-2 px-3 rounded-md"
                         type="text" v-model="dataSent.image" placeholder="https://" style="box-shadow: none;outline: none;">
                  <div class="bg-white border border-color-29 z-10 absolute inset-0 pointer-events-none rounded-md"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="w-full p-5 bg-white border-t border-color-30 rounded-md">
            <div class="flex flex-row justify-between gap-4">
              <div></div>
              <div class="flex flex-row justify-between gap-4">
                <button @click="toggleAddUrl" class="inline-flex relative justify-center items-center text-center rounded-md min-w-9 min-h-9 py-2 px-4
                   bg-white border border-color-28 hover:opacity-70">
                  <span class="font-550 text-color-28">Hủy</span>
                </button>
                <button @click="toggleAddUrl" class="inline-flex relative justify-center items-center text-center rounded-md min-w-9 min-h-9 py-2 px-4
                    border border-transparent text-white bg-color-28 hover:opacity-70">
                  <span class="font-550">Xác nhận</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Editor from '@tinymce/tinymce-vue'
import {createCategory, editCategory, getCategory, getDetailCategory} from "@/service/TourCategoryService.js";
export default {
  components:{
    Editor
  },
  data() {
    return {
      openAddUrl : false,
      dataSent: {},
      selectedCategory: "Chọn danh mục",
      optionsCategory: [],
    }
  },
  methods:{
    toggleAddUrl(){
      this.openAddUrl = !this.openAddUrl;
    },
    async handleSubmit(){
      const result = await editCategory(this.dataSent);
      if(result){
        this.$router.push({ name : 'collections'})
      }
    },
    async loadCategories(){
      const result = await getDetailCategory(this.$route.params.id);
      if(result){
        this.dataSent = result;
      }
    },
    async loadOptionCategory(){
      const resultParent = await getCategory();
      if(resultParent){
        this.optionsCategory = resultParent.map(cate => ({
          label : cate.name,
          value : cate.id
        }))
      }
    },
    handleBack(){
      this.$router.back()
    },
    selectCategory(option) {
      this.selectedCategory = option.label;
      this.dataSent.parentId = option.value
      document.getElementById("category").checked = false;
    },
  },
  async created() {
    await  this.loadCategories();
    await this.loadOptionCategory()

    const selectedCategory = this.optionsCategory.find(option => option.value === this.dataSent.parentId);
    if(selectedCategory){
      this.selectedCategory = selectedCategory.label;
    }
  }
}
</script>

<style scoped>
.css-1ypmoi1::after {
  content: "*";
  color: rgb(238, 71, 71);
}
.css-w1rzuf::after{
  inset: 0px;
  opacity: 1;
  transform: scale(1);
  border: 1px dashed rgb(211, 213, 215);
  content: "";
  position: absolute;
  z-index: 10;
  border-radius: 6px;
  pointer-events: none;
}

.animation{
  animation: 200ms ease 0s 1 normal forwards running animation-8la7kf;
  will-change: opacity;
}
@keyframes animation-8la7kf {
  100% {
    opacity: 1;
  }
}
</style>