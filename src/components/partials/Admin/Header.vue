<template>
  <div class="w-[calc(100%-15rem)] fixed top-0 h-14 left-[15rem]">
    <div class="bg-white shadow-box-4 relative">
      <div class="container mx-auto h-14 flex items-center justify-between gap-2">
        <div class="group max-w-[600px] w-full bg-white border border-transparent rounded-md
            hover:bg-color-19 focus-within:border-color-21 transition-colors duration-150 relative">
          <div class="flex items-center">
            <div class="relative ml-3 mr-2 text-color-22">
              <svg class="w-5 h-5 block" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                <path fill="currentColor" fill-rule="evenodd"
                      d="M14.891 13.477a6.002 6.002 0 0 0-9.134-7.72 6 6 0 0 0 7.72 9.134l5.715 5.716 1.415-1.415zm-2.063-6.305a4 4 0 1 1-5.656 5.656 4 4 0 0 1 5.656-5.656"
                      clip-rule="evenodd"></path>
              </svg>
            </div>
            <input
                placeholder="Tìm kiếm (Ctrl K)"
                type="text"
                class="w-full pr-3 py-2 text-sm text-left text-gray-900 placeholder-gray-400 bg-transparent focus:outline-none"
            >
          </div>
          <div class="w-full h-56 bg-white border border-[#d3d5d7] rounded-md absolute top-full z-[100] mt-1 hidden group-focus-within:block" style="box-shadow: rgba(168, 168, 168, 0.5) -4px 4px 20px 0px;">
            <div class="flex justify-start items-center flex-wrap border-b border-color-22">
              <button class="appearance-none px-1 pt-1 pb-[6px] text-nowrap text-center mt-[1px] mb-[-1px] text-inherit h-[46px] ">
                <span class="text-color-25 py-2 px-4 min-w-9 font-semibold relative search">Tất cả</span>
              </button>
              <button class="appearance-none px-1 pt-1 pb-[6px] text-nowrap text-center mt-[1px] mb-[-1px] text-inherit h-[46px]">
                <span class="text-color-26 py-2 px-4 min-w-9 font-semibold">Sản phẩm</span>
              </button>
              <button class="appearance-none px-1 pt-1 pb-[6px] text-nowrap text-center mt-[1px] mb-[-1px] text-inherit h-[46px]">
                <span class="text-color-26 py-2 px-4 min-w-9 font-semibold">Đơn hàng</span>
              </button>
              <button class="appearance-none px-1 pt-1 pb-[6px] text-nowrap text-center mt-[1px] mb-[-1px] text-inherit h-[46px]">
                <span class="text-color-26 py-2 px-4 min-w-9 font-semibold">Khách hàng</span>
              </button>
            </div>
            <div class="overflow-auto p-5 ">
              <div>
                <div class="flex justify-center items-center py-5 ">
                  <div class="flex flex-col items-stretch -mt-2 -ml-2">
                    <div class="mt-2 ml-2 flex justify-center items-center">
                      <svg width="36" height="36" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path fill="rgb(163, 168, 175)" fill-rule="evenodd" d="M14.891 13.477a6.002 6.002 0 0 0-9.134-7.72 6 6 0 0 0 7.72 9.134l5.715 5.716 1.415-1.415zm-2.063-6.305a4 4 0 1 1-5.656 5.656 4 4 0 0 1 5.656-5.656" clip-rule="evenodd"></path>
                      </svg>
                    </div>
                    <div class="text-color-26 mt-2 ml-2 ">Nhập từ khóa để tìm kiếm sản phẩm, đơn hàng, khách hàng, ...</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="flex justify-end items-center gap-2">
          <div class="group relative">
            <button class="focus:bg-color-19 hover:bg-color-19 relative py-[5px] px-2 min-w-9 min-h-9 flex items-center rounded-md
              gap-2">
              <span class="w-5 h-5">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                  <path fill="rgb(70, 81, 95)" fill-rule="evenodd" d="M18 10.5c0-3.07-1.14-5.64-4-6.32v-2.18h-4v2.18c-2.87.68-4 3.24-4 6.32v5.5l-2 1v2h16v-2l-2-1zm-5.6 11.46a2.014 2.014 0 0 1-2.41-1.96h4q0 .42-.15.78c-.26.6-.79 1.04-1.44 1.18" clip-rule="evenodd"></path>
                </svg>
              </span>
            </button>
            <div class="w-[420px] bg-white border border-[#d3d5d7] rounded-md absolute top-full right-0 hidden group-focus-within:block" style="box-shadow: rgba(168, 168, 168, 0.5) -4px 4px 20px 0px;">
              <div class="p-5 border-b border-[#d3d5d7]">
                <span class="text-xl font-semibold">Thông báo</span>
              </div>
              <div class="flex justify-between items-center flex-wrap border-b border-color-22">
                <button class="appearance-none flex-1 px-1 pt-1 pb-[5px] text-nowrap text-center mt-[1px] mb-[-1px] text-inherit h-[46px] ">
                  <span class="text-color-25 py-2 px-4 min-w-9 font-semibold relative search">Hệ thống</span>
                </button>
                <button class="appearance-none flex-1 px-1 pt-1 pb-[6px] text-nowrap text-center mt-[1px] mb-[-1px] text-inherit h-[46px]">
                  <span class="text-color-26 py-2 px-4 min-w-9 font-semibold">Tin tức</span>
                </button>
                <button class="appearance-none flex-1 px-1 pt-1 pb-[6px] text-nowrap text-center mt-[1px] mb-[-1px] text-inherit h-[46px]">
                  <span class="text-color-26 py-2 px-4 min-w-9 font-semibold">Khuyến mại</span>
                </button>
              </div>
              <div class="p-5">
                <div class="pt-5 pb-16">
                  <div class="flex flex-col items-center gap-4">
                    <div class="flex justify-center items-center">
                      <img src="https://bizweb.dktcdn.net/dev/admin/frontend/assets/notification-empty-BmnNePXV.svg" alt="">
                    </div>
                    <div class="pb-4">
                      <span class="text-sm">Cửa hàng của bạn chưa có thông báo nào</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="rounded-md focus:bg-color-19 hover:bg-color-19 min-h-9 min-w-9 cursor-pointer relative group">
            <button class="flex items-center gap-2 ">
              <span class="relative py-[5px] px-2 min-w-9 min-h-9 flex items-center rounded-md
                gap-2">
                <span class="w-8 h-8 flex justify-center items-center rounded-full bg-[#d7b8ff]">Sh</span>
              </span>
              <span class="font-semibold text-base ">Admin ND-Travel</span>
              <span class="flex justify-center items-center">
                <span class="w-5 h-5 block text-color-22 ">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                    <path fill="currentColor" d="m5.99 9.702 6.01 6.01 6.01-6.01-1.414-1.414-4.596 4.596-4.596-4.596z"></path>
                  </svg>
                </span>
              </span>
            </button>
            <div class="w-full z-[100] h-60 bg-white border border-[#d3d5d7] rounded-md absolute top-full left-0 mt-1 hidden group-focus-within:block" style="box-shadow: rgba(168, 168, 168, 0.5) -4px 4px 20px 0px;">
              <div class="flex flex-col rounded-md">
                <ul>
                  <li>
                    <ul class="p-2">
                      <li>
                        <div class="block w-full min-h-9 px-2 py-[10px] hover:bg-color-19 rounded-md">
                          <span class="flex items-center flex-wrap gap-2">
                            <div class="flex justify-center items-center h-5 w-5 rounded-md text-color-22">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                                <path fill="currentColor" fill-rule="evenodd" d="M12 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8m0-2a2 2 0 1 0 0-4 2 2 0 0 0 0 4" clip-rule="evenodd"></path><path fill="currentColor" fill-rule="evenodd" d="M17.926 20.056a9.99 9.99 0 0 0 4.074-8.056c0-5.523-4.477-10-10-10s-10 4.477-10 10a9.99 9.99 0 0 0 4.211 8.155q.674.48 1.425.845c1.319.64 2.8 1 4.364 1a9.96 9.96 0 0 0 5.926-1.944m-.697-2.001a8 8 0 1 0-10.457 0 6 6 0 0 1 5.228-3.055c2.243 0 4.2 1.231 5.229 3.055m-1.672 1.113a4 4 0 0 0-7.114 0 8 8 0 0 0 3.557.832c1.278 0 2.485-.3 3.557-.832" clip-rule="evenodd"></path>
                              </svg>
                            </div>
                            <div class="text-sm">Tài khoản của bạn</div>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div class="block w-full min-h-9 px-2 py-[10px] hover:bg-color-19 rounded-md">
                          <span class="flex items-center flex-wrap gap-2">
                            <div class="flex justify-center items-center h-5 w-5 rounded-md text-color-22">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                                <path fill="currentColor" stroke="currentColor" stroke-width="0.5" d="m21.24 6.62-8.832-4.474-.003-.002a1.38 1.38 0 0 0-1.25.012l-3.789 2.01a1 1 0 0 0-.088.047l-4.54 2.41a1.37 1.37 0 0 0-.738 1.219v8.316c0 .514.283.981.738 1.22l8.413 4.465.003.002a1.38 1.38 0 0 0 1.25.011l8.836-4.477c.47-.235.761-.706.761-1.231v-8.296c0-.525-.291-.997-.76-1.231Zm-9.543-3.426a.2.2 0 0 1 .184-.002l8.267 4.189-3.217 1.602-8.083-4.277zm-.5 17.347-7.911-4.2-.004-.001a.2.2 0 0 1-.11-.182v-7.787l8.025 4.184zm.592-8.998-7.981-4.162 3.79-2.012 8.042 4.256zm9.04 4.605a.2.2 0 0 1-.113.183l-8.348 4.23v-7.998l3.844-1.914v2.007a.586.586 0 0 0 1.171 0v-2.59l3.447-1.716z"></path>
                              </svg>
                            </div>
                            <div class="text-sm">Thông tin gói dịch vụ</div>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div class="block w-full min-h-9 px-2 py-[10px] hover:bg-color-19 rounded-md">
                          <span class="flex items-center flex-wrap gap-2">
                            <div class="flex justify-center items-center h-5 w-5 rounded-md text-color-22">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                                <path fill="currentColor" d="M20 3h-9c-1.103 0-2 .897-2 2v4h2v-4h9v14h-9v-4h-2v4c0 1.103.897 2 2 2h9c1.103 0 2-.897 2-2v-14c0-1.103-.897-2-2-2"></path><path fill="currentColor" d="m7 16-5-4 5-4v3h9v2h-9z"></path>
                              </svg>
                            </div>
                            <div class="text-sm">Đăng xuất</div>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li class="border-t border-[#e8eaeb]">
                    <ul class="p-2">
                      <li>
                        <div class="block w-full min-h-9 px-2 py-[10px] hover:bg-color-19 rounded-md">
                          <span class="flex items-center flex-wrap gap-2">
                            <div class="text-sm">Điều khoản dịch vụ</div>
                          </span>
                        </div>
                      </li>
                      <li>
                        <div class="block w-full min-h-9 px-2 py-[10px] hover:bg-color-19 rounded-md">
                          <span class="flex items-center flex-wrap gap-2">
                            <div class="text-sm">Chính sách bảo mật</div>
                          </span>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
</script>

<style scoped>
.search::before{
  content: "";
  position: absolute;
  bottom: calc(-7px);
  left: 0px;
  right: 0px;
  height: 2px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  background: rgb(0, 136, 255);
}
</style>