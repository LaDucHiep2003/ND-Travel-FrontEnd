
<template>
  <div class="container mx-auto">
    <div class="py-4">
      <div class="flex justify-between flex-nowrap min-h-8">
        <div class="py-1.5 text-[22px] font-550">Phân quyền</div>
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
                <span>Thêm quyền</span>
              </span>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-end items-center">
      <button class="relative text-center rounded-md min-w-9 min-h-9 py-[7px]
          px-4 border border-transparent text-white bg-color-12 hover:bg-[#33a0ff]">
        <span class="flex justify-center items-center relative font-550">
          <span>Cập nhật</span>
        </span>
      </button>
    </div>

    <div class="bg-color-white-2 mt-10 rounded-lg max-md:rounded-lg text-center shadow-shadow-5 transition-all duration-300
                ease-in-out hover:shadow-none max-md:px-2">
      <div class="overflow-x-auto w-full max-md:my-0 max-md:mx-auto">
        <table class="w-full border-collapse min-w-[600px]">
          <thead>
          <tr class="border-b border-color-light">
            <th class="p-card-padding max-lg:p-5 max-md:text-xs max-md:p-1 text-color-dark
                whitespace-nowrap"> Quyền</th>
            <th v-for="role in dataRole" :key="role.id" class="p-card-padding max-lg:p-5 max-md:text-xs max-md:p-1 text-color-dark
                whitespace-nowrap">{{ role.name }} </th>
            <th></th>
          </tr>
          </thead>
          <tbody>
<!--          <tr v-for="item in tableData">-->
<!--            <td class="h-10 border-b border-color-light max-md:text-xs whitespace-nowrap text-center font-medium text-color-info-dark">{{ item.title }}</td>-->
<!--            <td v-for="role in data" class="h-10 border-b border-color-light text-color-dark max-md:text-xs whitespace-nowrap text-center">-->
<!--              <label class="flex justify-center items-center cursor-pointer text-lg w-full py-2 px-3 rounded-md relative">-->
<!--                <input-->
<!--                    @change="handleClick(role.id, item.permission)"-->
<!--                    :checked="isChecked(role.id, item.permission)"-->
<!--                    type="checkbox" class="hidden peer"-->
<!--                />-->
<!--                <span class="w-6 h-6 border-[3px] border-gray-300 rounded-lg flex items-center justify-center-->
<!--                        peer-checked:border-blue-500 transition-colors relative"></span>-->
<!--                <span class="w-2.5 h-2.5 bg-blue-500 rounded-full peer-checked:inline-block hidden absolute inset-0 m-auto"></span>-->
<!--              </label>-->
<!--            </td>-->
<!--          </tr>-->
            <tr v-for="per in dataPermissions" :key="per.id">
              <td class="h-10 border-b border-color-light max-md:text-xs whitespace-nowrap text-center font-medium
                text-color-info-dark">{{ per.description }}</td>
              <td v-for="role in dataRole" :key="role.id" class="h-10 border-b border-color-light text-color-dark max-md:text-xs whitespace-nowrap text-center">
                <label class="flex justify-center items-center cursor-pointer text-lg w-full py-2 px-3 rounded-md relative">
                  <input
                      type="checkbox" class="hidden peer"
                  />
                  <span class="w-6 h-6 border-[3px] border-gray-300 rounded-lg flex items-center justify-center
                                    peer-checked:border-blue-500 transition-colors relative"></span>
                  <span class="w-2.5 h-2.5 bg-blue-500 rounded-full peer-checked:inline-block hidden absolute inset-0 m-auto"></span>
                </label>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import {getPermissions, getRoles} from "@/service/roleService.js";

export default {
  data(){
    return{
      dataPermissions : null,
      dataRole : null
    }
  },
  methods:{
    async loadPermissions(){
      const result = await getPermissions();
      console.log(result)
      if(result){
        this.dataPermissions = result;
      }
    },
    async loadRoles(){
      const result = await getRoles();
      if(result){
        this.dataRole = result;
      }
    }
  },
  mounted() {
    this.loadPermissions();
    this.loadRoles();
  }
}

</script>