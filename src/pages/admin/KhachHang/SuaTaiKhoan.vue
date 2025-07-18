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
          <h1 class="font-550 text-[22px]">Chỉnh sửa tài khoản</h1>
        </div>
      </div>
    </div>
    <div class="flex flex-wrap justify-center items-start -mt-4 -ml-4 pb-5">
      <div class="mt-4 ml-4 w-full">
        <div class="flex flex-col">
          <div class="relative bg-white outline outline-transparent rounded-md"
               style="box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 1px, rgba(0, 0, 0, 0.15) 0px 1px 2px 0px;">
            <div class="pt-5 px-5 font-550 text-base">
              <h2>Thông tin tài khoản</h2>
            </div>
            <div class="p-5">
              <div class="-mt-4 -ml-4">
                <div class="mt-4 ml-5">
                  <div class="flex justify-between items-center gap-5">
                    <div class="w-1/2">
                      <div class="break-words flex flex-wrap justify-between items-baseline pb-1 ">
                        <label for="departure_from" class="text-color-24 css-1ypmoi1">Tên tài khoản </label>
                      </div>
                      <div class="flex items-center gap-2 relative font-450 text-sm">
                        <input id="departure_from" class="resize-none z-30 w-full text-left border min-h-9 py-2 px-3 rounded-md"
                               type="text" v-model="dataSent.username" placeholder="Nhập địa tên tài khoản" style="box-shadow: none;outline: none;">
                        <div class="bg-white border border-color-29 z-10 absolute inset-0 pointer-events-none rounded-md"></div>
                      </div>
                    </div>
                    <div class="w-1/2">
                      <div class="break-words flex flex-wrap justify-between items-baseline pb-1 ">
                        <label for="destination" class="text-color-24 css-1ypmoi1">Họ tên</label>
                      </div>
                      <div class="flex items-center gap-2 relative font-450 text-sm">
                        <input id="destination" class="resize-none z-30 w-full text-left border min-h-9 py-2 px-3 rounded-md"
                               type="text" v-model="dataSent.fullname" placeholder="Nhập họ tên" style="box-shadow: none;outline: none;">
                        <div class="bg-white border border-color-29 z-10 absolute inset-0 pointer-events-none rounded-md"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-4 ml-5">
                  <div class="flex justify-between items-center gap-5">
                    <div class="w-1/2">
                      <div class="break-words flex flex-wrap justify-between items-baseline pb-1 ">
                        <label for="departure_from" class="text-color-24 css-1ypmoi1">Email </label>
                      </div>
                      <div class="flex items-center gap-2 relative font-450 text-sm">
                        <input id="departure_from" class="resize-none z-30 w-full text-left border min-h-9 py-2 px-3 rounded-md"
                               type="text" v-model="dataSent.email" placeholder="Nhập email" style="box-shadow: none;outline: none;">
                        <div class="bg-white border border-color-29 z-10 absolute inset-0 pointer-events-none rounded-md"></div>
                      </div>
                    </div>
                    <div class="w-1/2">
                      <div class="break-words flex flex-wrap justify-between items-baseline pb-1 ">
                        <label for="destination" class="text-color-24 css-1ypmoi1">Mật khẩu</label>
                      </div>
                      <div class="flex items-center gap-2 relative font-450 text-sm">
                        <input id="destination" class="resize-none z-30 w-full text-left border min-h-9 py-2 px-3 rounded-md"
                               type="text" v-model="dataSent.password" placeholder="Nhập mật khẩu" style="box-shadow: none;outline: none;">
                        <div class="bg-white border border-color-29 z-10 absolute inset-0 pointer-events-none rounded-md"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="mt-4 ml-5">
                  <div class="relative bg-white outline outline-transparent rounded-md mt-4"
                       style="box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 1px, rgba(0, 0, 0, 0.15) 0px 1px 2px 0px;">
                    <div class="p-5 font-550 text-base">
                      <div class="flex items-center gap-4">
                        <label for="">Quyền</label>
                        <span class="w-4 h-4 text-color-28">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><g fill="currentColor" clip-path="url(#355__a)">
                            <path d="M11.1 7.5v1.8h1.8v-1.8z"></path><path d="M11.1 12.9v3.6h2.7v-1.8h-.9v-3.6h-2.7v1.8z"></path><path fill-rule="evenodd" d="M12 3c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9m-7.2 9c0 4 3.2 7.2 7.2 7.2s7.2-3.2 7.2-7.2-3.2-7.2-7.2-7.2-7.2 3.2-7.2 7.2" clip-rule="evenodd"></path></g><defs><clipPath id="355__a"><path fill="currentColor" d="M3 3h18v18h-18z"></path></clipPath></defs>
                          </svg>
                        </span>
                      </div>
                      <div class="relative inline-block text-left w-full">
                        <!-- Checkbox ẩn để làm toggle -->
                        <input type="checkbox" id="role" class="peer hidden" />
                        <!-- Button dùng label để toggle -->
                        <label for="role" class="cursor-pointer whitespace-nowrap inline-flex relative items-center text-left
                            w-full min-h-6 py-[7px] px-4 border border-color-29 bg-white hover:bg-color-30 rounded-md">
                          <span class="flex justify-between items-center relative w-full">
                            <span class="font-450 text-sm">{{ selectedRole }}</span>
                            <span class="ml-1 block w-5 h-5 font-450 text-color-22">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <path fill="currentColor" d="m7 9.5 5 5 5-5z"></path>
                              </svg>
                            </span>
                          </span>
                        </label>
                        <div class="absolute top-full mt-1 w-full left-0 z-50 text-sm  border border-color-29 rounded-md hidden peer-checked:block">
                          <div
                              v-for="(option, key) in optionsRole"
                              :key="key"
                              @click="selectRole(option)"
                              class="py-[7px] px-4 bg-white rounded-md isolate hover:bg-gray-100 border-b cursor-pointer flex gap-3 items-center
                              justify-between"
                          >
                            <div class="flex gap-3 items-center">
                              {{ option.label }}
                            </div>
                            <svg v-if="selectedRole === option.label" width="16" height="16" viewBox="0 0 16 16" fill="none">
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
          </div>
        </div>
      </div>
    </div>

    <div class="py-4 border-t border-color-29">
      <div class="flex justify-end gap-4">
        <button @click="handleSubmit" class="inline-flex relative justify-center items-center text-center rounded-md min-w-9 min-h-9 py-2 px-4
        border border-transparent text-white bg-color-28 hover:opacity-70">
          <span class="font-550">Cập nhật</span>
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Editor from '@tinymce/tinymce-vue'
import {getRoles} from "@/service/roleService.js";
import {editUser, getDetailUser} from "@/service/userService.js";
export default {
  components:{
    Editor
  },
  data() {
    return {
      dataSent:{
        username : '',
        email : '',
        password : '',
        fullname : '',
        roles : []
      },
      selectedRole: "Chọn Quyền",
      optionsRole: [],
    }
  },
  methods:{
    async handleSubmit(){
      const result = await editUser(this.dataSent);
      if(result){
        this.$router.push({ name : 'customers'})
      }
      console.log(this.dataSent)
    },
    async loadRoles(){
      const result = await getRoles();
      if(result){
        this.optionsRole = result.map(cate => ({
          label : cate.code,
          value : cate.id
        }))
      }
    },
    async loadAccount(){
      const result = await getDetailUser(this.$route.params.id);
      if(result){
        this.dataSent = result;
      }
    },
    handleBack(){
      this.$router.back()
    },
    selectRole(option) {
      this.selectedRole = option.label;

      this.dataSent.roles = [{ id: option.value }];
      const checkbox = document.getElementById("role");
      if (checkbox) checkbox.checked = false;
    },
  },
  async mounted() {
    await this.loadRoles();
    await this.loadAccount();

    if (this.dataSent.roles.length > 0) {
      const firstRoleId = this.dataSent.roles[0].id;
      const selected = this.optionsRole.find(opt => opt.value === firstRoleId);
      if (selected) {
        this.selectedRole = selected.label;
      }
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