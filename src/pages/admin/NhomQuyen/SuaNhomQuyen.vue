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
          <h1 class="font-550 text-[22px]">Thêm nhóm quyền</h1>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap justify-center items-start -mt-4 -ml-4 pb-5">
      <div class="mt-4 ml-4 w-full">
        <div class="flex flex-col">
          <div class="relative overflow-clip bg-white outline outline-transparent rounded-md"
               style="box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 1px, rgba(0, 0, 0, 0.15) 0px 1px 2px 0px;">
            <div class="pt-5 px-5 font-550 text-base">
              <h2>Thông tin nhóm quyền</h2>
            </div>
            <div class="p-5">
              <div class="-mt-4 -ml-4">
                <div class="mt-4 ml-5">
                  <div class="break-words flex flex-wrap justify-between items-baseline pb-1 ">
                    <label for="title" class="text-color-24 css-1ypmoi1">Tên nhóm quyền</label>
                  </div>
                  <div class="flex items-center gap-2 relative font-450 text-sm">
                    <input id="title" class="resize-none z-30 w-full text-left border min-h-9 py-2 px-3 rounded-md"
                           type="text" v-model="dataSent.name" placeholder="Nhập tên nhóm quyền" style="box-shadow: none;outline: none;">
                    <div class="bg-white border border-color-29 z-10 absolute inset-0 pointer-events-none rounded-md"></div>
                  </div>
                </div>
                <div class="mt-4 ml-5">
                  <div class="flex justify-between items-center gap-5">
                    <div class="w-full">
                      <div class="break-words flex flex-wrap justify-between items-baseline pb-1 ">
                        <label for="departure_from" class="text-color-24 css-1ypmoi1">Mã nhóm quyền</label>
                      </div>
                      <div class="flex items-center gap-2 relative font-450 text-sm">
                        <input id="departure_from" class="resize-none z-30 w-full text-left border min-h-9 py-2 px-3 rounded-md"
                               type="text" v-model="dataSent.code" placeholder="Nhập mã nhóm quyền" style="box-shadow: none;outline: none;">
                        <div class="bg-white border border-color-29 z-10 absolute inset-0 pointer-events-none rounded-md"></div>
                      </div>
                    </div>
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
    </div>

    <div class="py-4 border-t border-color-29">
      <div class="flex justify-end gap-4">
        <button @click="handleSubmit" class="inline-flex relative justify-center items-center text-center rounded-md min-w-9 min-h-9 py-2 px-4
        border border-transparent text-white bg-color-28 hover:opacity-70">
          <span class="font-550">Cập nhật nhóm quyền</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Editor from '@tinymce/tinymce-vue'
import {createRole, editRole, getDetailRole} from "@/service/roleService.js";
export default {
  components:{
    Editor
  },
  data() {
    return {
      dataSent:{
        name : '',
        code : '',
        description : '',
      },
    }
  },
  methods:{
    async handleSubmit(){
      const result = await editRole(this.dataSent);
      if(result){
        this.$router.push({ name : 'roles'})
      }
    },
    async loadRoles(){
      const result = await getDetailRole(this.$route.params.id)
      if(result){
        this.dataSent = result;
      }
    },
    handleBack(){
      this.$router.back()
    }
  },
  mounted() {
    this.loadRoles();
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