<template>
  <aside class="fixed top-0 left-0 h-screen">
    <div class="flex flex-col items-stretch w-[15rem] h-full bg-color-17 shadow-box-3">
      <div class="min-h-14 border-b border-b-color-16 flex items-center justify-between px-2 w-full overflow-hidden">
        <div>
          <img src="https://bizweb.dktcdn.net/dev/admin/frontend/assets/sapo-logo-ncFhCziL.svg" alt="">
        </div>
        <button class="text-inherit cursor-pointer flex items-center flex-shrink-0 py-1 px-[6px] h-8 rounded-md">
          <span class="w-5 h-5 block text-white">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
              <path fill="rgb(163, 168, 175)" d="m14.298 5.99-6.01 6.01 6.01 6.01 1.414-1.414-4.596-4.596 4.596-4.596z"></path>
            </svg>
          </span>
        </button>
      </div>
      <div class="overflow-x-hidden overflow-y-auto flex flex-1 flex-col items-stretch scrollbar">
        <ul class="py-2 flex flex-col gap-1 border-b border-b-color-20">
          <li class="flex flex-wrap relative">
            <div class="px-3 w-[15rem] flex-shrink-0">
              <RouterLink :to="{ name : 'dashboard'}" :class="{ 'bg-color-20' : $route.name === 'dashboard'}" class="flex flex-grow items-start p-[6px] text-left min-h-8 rounded-md text-color-19
                   focus:bg-color-18 hover:bg-color-20">
                <div class="w-5 h-5 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                    <path fill="currentColor" d="m21.477 9.085-7.413-6.1a3.26 3.26 0 0 0-4.128 0l-7.413 6.1a.75.75 0 1 0 .954 1.158l.773-.636v8.393a3.383 3.383 0 0 0 3.75 3.75h8a3.382 3.382 0 0 0 3.75-3.75v-8.393l.773.636a.75.75 0 0 0 .954-1.158m-7.727 11.165h-3.5v-3.75a1.75 1.75 0 0 1 3.5 0zm4.5-2.25c0 1.577-.673 2.25-2.25 2.25h-.75v-3.75a3.25 3.25 0 0 0-6.5 0v3.75h-.75c-1.577 0-2.25-.673-2.25-2.25v-9.626l5.139-4.226a1.755 1.755 0 0 1 2.222 0l5.139 4.226z"></path>
                  </svg>
                </div>
                <span class="flex-1 ml-1 font-medium">Tổng quan</span>
              </RouterLink>
            </div>
          </li>
          <li class="flex flex-wrap relative font-medium">
            <div class="px-3 w-[15rem] flex-shrink-0">
              <RouterLink :to="{ name : 'orders'}" class="flex flex-grow items-start p-[6px] text-left min-h-8 rounded-md text-color-19
                focus:bg-color-18 hover:bg-color-20" :class="{ 'bg-color-20' : $route.name === 'orders' || $route.name === 'draft_orders' || $route.name === 'order_returns' || $route.name === 'checkouts'}">
                <div class="w-5 h-5 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                    <path fill="currentColor" d="M12 21.749a2.24 2.24 0 0 1-1.591-.658l-2.019-2.019a.76.76 0 0 0-.982-.072l-1.358 1.021a1.75 1.75 0 0 1-2.8-1.4v-12.621a3.383 3.383 0 0 1 3.75-3.75h10a3.383 3.383 0 0 1 3.75 3.75v12.621a1.75 1.75 0 0 1-2.8 1.4l-1.359-1.021a.754.754 0 0 0-.981.07l-2.019 2.019a2.24 2.24 0 0 1-1.591.66m-4.144-4.393a2.25 2.25 0 0 1 1.594.655l2.02 2.019a.77.77 0 0 0 1.06 0l2.02-2.019a2.26 2.26 0 0 1 2.94-.209l1.361 1.019a.24.24 0 0 0 .261.024.24.24 0 0 0 .138-.224v-12.621c0-1.577-.673-2.25-2.25-2.25h-10c-1.577 0-2.25.673-2.25 2.25v12.621a.24.24 0 0 0 .138.224.24.24 0 0 0 .261-.024l1.36-1.021c.39-.29.862-.446 1.347-.444m8.894-8.356a.75.75 0 0 0-.75-.75h-5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 .75-.75m0 4a.75.75 0 0 0-.75-.75h-5a.75.75 0 0 0 0 1.5h5a.75.75 0 0 0 .75-.75m-8.75-4.75a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5m0 4a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5"></path>
                  </svg>
                </div>
                <span class="flex-1 ml-1 font-medium">Đơn hàng</span>
              </RouterLink>
            </div>
            <div v-if="$route.name === 'orders' || $route.name === 'draft_orders' || $route.name === 'order_returns' || $route.name === 'checkouts'">
              <div class="">
                <ul>
                  <li class="flex flex-wrap relative">
                    <div class="px-3 pt-1 w-[15rem] flex-shrink-0 text-color-19">
                      <RouterLink :to="{ name : 'orders'}" class="pl-[34px] py-[6px] pr-[6px] focus:bg-color-18 hover:bg-color-20 flex flex-grow-1 text-left relative rounded-md"
                        :class="{'text-color-21 bg-color-20' : $route.name === 'orders'}">
                        <span class="ml-1">Danh sách đơn hàng</span>
                      </RouterLink>
                    </div>
                  </li>
                  <li class="flex flex-wrap relative">
                    <div class="px-3 pt-1 w-[15rem] flex-shrink-0 text-color-19">
                      <RouterLink :to="{ name : 'draft_orders'}" class="pl-[34px] py-[6px] pr-[6px] focus:bg-color-18 hover:bg-color-20 flex flex-grow-1 text-left relative rounded-md"
                        :class="{'text-color-21 bg-color-20' : $route.name === 'draft_orders'}">
                        <span class="ml-1">Đơn hành nháp</span>
                      </RouterLink>
                    </div>
                  </li>
                  <li class="flex flex-wrap relative">
                    <div class="px-3 pt-1 w-[15rem] flex-shrink-0 text-color-19">
                      <RouterLink :to="{ name : 'order_returns'}" class="pl-[34px] py-[6px] pr-[6px] focus:bg-color-18 hover:bg-color-20 flex flex-grow-1 text-left relative rounded-md"
                                  :class="{'text-color-21 bg-color-20' : $route.name === 'order_returns'}">
                        <span class="ml-1">Trả hàng</span>
                      </RouterLink>
                    </div>
                  </li>
                  <li class="flex flex-wrap relative">
                    <div class="px-3 pt-1 w-[15rem] flex-shrink-0 text-color-19">
                      <RouterLink :to="{ name : 'checkouts'}" class="pl-[34px] py-[6px] pr-[6px] focus:bg-color-18 hover:bg-color-18 flex flex-grow-1 text-left relative rounded-md"
                                  :class="{'text-color-21 bg-color-20' : $route.name === 'checkouts'}">
                        <span class="ml-1">Đơn chưa hoàn tất</span>
                      </RouterLink>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li class="flex flex-wrap relative font-medium">
            <div class="px-3 w-[15rem] flex-shrink-0">
              <RouterLink to="/" class="flex flex-grow items-start p-[6px] text-left min-h-8 rounded-md text-color-19
                focus:bg-color-18 hover:bg-color-20">
                <div class="w-5 h-5 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20" focusable="false" aria-hidden="true">
                    <g fill="currentColor" stroke="currentColor" stroke-width="0.3" clip-path="url(#235__a)"><path d="M5.417 15.833h-1.667a.417.417 0 0 1 0-.833h1.667a.417.417 0 0 1 0 .833Z"></path><path d="M18.958 15.833h-1.041a.417.417 0 0 1 0-.833h.695l.562-2.993c-.007-1.532-1.316-2.84-2.924-2.84h-2.736l-1.326 5.833h2.395a.417.417 0 0 1 0 .833h-2.916a.417.417 0 0 1-.407-.508l1.515-6.667a.416.416 0 0 1 .407-.325h3.068a3.755 3.755 0 0 1 3.75 3.75l-.633 3.41a.416.416 0 0 1-.409.34Z"></path><path d="M16.25 17.5a2.086 2.086 0 0 1-2.083-2.083c0-1.15.935-2.084 2.083-2.084s2.083.934 2.083 2.084-.935 2.083-2.083 2.083Zm0-3.333c-.69 0-1.25.56-1.25 1.25 0 .689.56 1.25 1.25 1.25s1.25-.561 1.25-1.25c0-.69-.56-1.25-1.25-1.25Z"></path><path d="M7.083 17.5a2.086 2.086 0 0 1-2.083-2.083c0-1.15.935-2.084 2.083-2.084s2.084.934 2.084 2.084-.935 2.083-2.084 2.083Zm0-3.333c-.689 0-1.25.56-1.25 1.25 0 .689.561 1.25 1.25 1.25.69 0 1.25-.561 1.25-1.25 0-.69-.56-1.25-1.25-1.25Z"></path><path d="M5.417 8.333h-3.334a.417.417 0 0 1 0-.833h3.334a.417.417 0 0 1 0 .833Z"></path><path d="M5.417 10.833h-4.167a.417.417 0 0 1 0-.833h4.167a.417.417 0 0 1 0 .833Z"></path><path d="M5.417 13.333h-5a.417.417 0 0 1 0-.833h5a.417.417 0 0 1 0 .833Z"></path><path d="M11.667 15.833h-2.917a.417.417 0 0 1 0-.833h2.584l1.893-8.333h-9.477a.417.417 0 0 1 0-.834h10a.417.417 0 0 1 .407.509l-2.084 9.166a.42.42 0 0 1-.406.325Z"></path></g><defs><clipPath id="235__a"><path fill="currentColor" d="M0 0h20v20h-20z"></path></clipPath></defs>
                  </svg>
                </div>
                <span class="flex-1 ml-1 font-medium">Vận chuyển</span>
              </RouterLink>
            </div>
            <div>
              <ul>
                <li class="flex flex-wrap relative">
                  <div class="px-3 pt-1 w-[15rem] flex-shrink-0 text-color-19">
                    <RouterLink to="/" class="pl-[34px] py-[6px] pr-[6px] focus:bg-color-18 hover:bg-color-20 flex flex-grow-1 text-left relative rounded-md"
                                :class="{'text-color-21 bg-color-20' : $route.name = 'dashboard'}">
                      <span class="ml-1">Tổng quan</span>
                    </RouterLink>
                  </div>
                </li>
                <li class="flex flex-wrap relative">
                  <div class="px-3 pt-1 w-[15rem] flex-shrink-0 text-color-19">
                    <RouterLink to="/" class="pl-[34px] py-[6px] pr-[6px] focus:bg-color-18 hover:bg-color-20 flex flex-grow-1 text-left relative rounded-md"
                    >
                      <span class="ml-1">Vận đơn</span>
                    </RouterLink>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li class="flex flex-wrap relative font-medium">
            <div class="px-3 w-[15rem] flex-shrink-0">
              <RouterLink :to="{ name : 'products'}" class="flex flex-grow items-start p-[6px] text-left min-h-8 rounded-md text-color-19
                focus:bg-color-18 hover:bg-color-20" :class="{ 'bg-color-20' : $route.name === 'products' || $route.name === 'collections' || $route.name === 'catalogs'}">
                <div class="w-5 h-5 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                    <path fill="currentColor" stroke="currentColor" stroke-width="0.5" d="m21.24 6.62-8.832-4.474-.003-.002a1.38 1.38 0 0 0-1.25.012l-3.789 2.01a1 1 0 0 0-.088.047l-4.54 2.41a1.37 1.37 0 0 0-.738 1.219v8.316c0 .514.283.981.738 1.22l8.413 4.465.003.002a1.38 1.38 0 0 0 1.25.011l8.836-4.477c.47-.235.761-.706.761-1.231v-8.296c0-.525-.291-.997-.76-1.231Zm-9.543-3.426a.2.2 0 0 1 .184-.002l8.267 4.189-3.217 1.602-8.083-4.277zm-.5 17.347-7.911-4.2-.004-.001a.2.2 0 0 1-.11-.182v-7.787l8.025 4.184zm.592-8.998-7.981-4.162 3.79-2.012 8.042 4.256zm9.04 4.605a.2.2 0 0 1-.113.183l-8.348 4.23v-7.998l3.844-1.914v2.007a.586.586 0 0 0 1.171 0v-2.59l3.447-1.716z"></path>
                  </svg>
                </div>
                <span class="flex-1 ml-1 font-medium">Sản phẩm</span>
              </RouterLink>
            </div>
            <div v-if="$route.name === 'products' || $route.name === 'collections' || $route.name === 'catalogs'">
              <ul>
                <li class="flex flex-wrap relative">
                  <div class="px-3 pt-1 w-[15rem] flex-shrink-0 text-color-19">
                    <RouterLink :to="{ name : 'products'}" class="pl-[34px] py-[6px] pr-[6px] focus:bg-color-18 hover:bg-color-20 flex flex-grow-1 text-left relative rounded-md"
                                :class="{'text-color-21 bg-color-20' : $route.name === 'products'}">
                      <span class="ml-1">Danh sách sản phẩm</span>
                    </RouterLink>
                  </div>
                </li>
                <li class="flex flex-wrap relative">
                  <div class="px-3 pt-1 w-[15rem] flex-shrink-0 text-color-19">
                    <RouterLink :to="{ name : 'collections'}" class="pl-[34px] py-[6px] pr-[6px] focus:bg-color-18 hover:bg-color-20 flex flex-grow-1 text-left relative rounded-md"
                    >
                      <span class="ml-1">Danh mục sản phẩm</span>
                    </RouterLink>
                  </div>
                </li>
                <li class="flex flex-wrap relative">
                  <div class="px-3 pt-1 w-[15rem] flex-shrink-0 text-color-19">
                    <RouterLink :to="{ name : 'catalogs'}" class="pl-[34px] py-[6px] pr-[6px] focus:bg-color-18 hover:bg-color-20 flex flex-grow-1 text-left relative rounded-md"
                    >
                      <span class="ml-1">Bảng giá</span>
                    </RouterLink>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li class="flex flex-wrap relative font-medium">
            <div class="px-3 w-[15rem] flex-shrink-0">
              <RouterLink to="/" class="flex flex-grow items-start p-[6px] text-left min-h-8 rounded-md text-color-19
                focus:bg-color-18 hover:bg-color-20">
                <div class="w-5 h-5 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                    <path fill="currentColor" d="m20.591 6.619-7.255-4.02a2.74 2.74 0 0 0-2.671 0l-7.256 4.02a2.25 2.25 0 0 0-1.159 1.967v10.914a2.253 2.253 0 0 0 2.25 2.25h15a2.253 2.253 0 0 0 2.25-2.25v-10.914a2.25 2.25 0 0 0-1.159-1.967m-13.341 9.13h9.5v1.5h-9.5zm9.5-1.5h-9.5v-.75c0-.588.161-.75.75-.75h8c.589 0 .75.162.75.75zm-9.5 4.5h9.5v1.5h-9.5zm13 .75a.75.75 0 0 1-.75.75h-1.25v-6.75a2.067 2.067 0 0 0-2.25-2.25h-8a2.067 2.067 0 0 0-2.25 2.25v6.75h-1.25a.75.75 0 0 1-.75-.75v-10.913a.75.75 0 0 1 .386-.655l7.257-4.024a1.25 1.25 0 0 1 1.215 0l7.256 4.024a.75.75 0 0 1 .386.655zm-6-11.5a.75.75 0 0 1-.75.75h-3a.75.75 0 1 1 0-1.5h3a.75.75 0 0 1 .75.75"></path>
                  </svg>
                </div>
                <span class="flex-1 ml-1 font-medium">Quản lý kho</span>
              </RouterLink>
            </div>
            <div>
              <ul>
                <li class="flex flex-wrap relative">
                  <div class="px-3 pt-1 w-[15rem] flex-shrink-0 text-color-19">
                    <RouterLink to="/" class="pl-[34px] py-[6px] pr-[6px] focus:bg-color-18 hover:bg-color-20 flex flex-grow-1 text-left relative rounded-md"
                                :class="{'text-color-21 bg-color-20' : $route.name = 'dashboard'}">
                      <span class="ml-1">Tồn kho</span>
                    </RouterLink>
                  </div>
                </li>
                <li class="flex flex-wrap relative">
                  <div class="px-3 pt-1 w-[15rem] flex-shrink-0 text-color-19">
                    <RouterLink to="/" class="pl-[34px] py-[6px] pr-[6px] focus:bg-color-18 hover:bg-color-20 flex flex-grow-1 text-left relative rounded-md"
                    >
                      <span class="ml-1">Đơn hàng nhập</span>
                    </RouterLink>
                  </div>
                </li>
                <li class="flex flex-wrap relative">
                  <div class="px-3 pt-1 w-[15rem] flex-shrink-0 text-color-19">
                    <RouterLink to="/" class="pl-[34px] py-[6px] pr-[6px] focus:bg-color-18 hover:bg-color-20 flex flex-grow-1 text-left relative rounded-md"
                    >
                      <span class="ml-1">Nhập hàng</span>
                    </RouterLink>
                  </div>
                </li>
                <li class="flex flex-wrap relative">
                  <div class="px-3 pt-1 w-[15rem] flex-shrink-0 text-color-19">
                    <RouterLink to="/" class="pl-[34px] py-[6px] pr-[6px] focus:bg-color-18 hover:bg-color-20 flex flex-grow-1 text-left relative rounded-md"
                    >
                      <span class="ml-1">Trả hàng nhập</span>
                    </RouterLink>
                  </div>
                </li>
                <li class="flex flex-wrap relative">
                  <div class="px-3 pt-1 w-[15rem] flex-shrink-0 text-color-19">
                    <RouterLink to="/" class="pl-[34px] py-[6px] pr-[6px] focus:bg-color-18 hover:bg-color-20 flex flex-grow-1 text-left relative rounded-md"
                    >
                      <span class="ml-1">Nhà cung cấp</span>
                    </RouterLink>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li class="flex flex-wrap relative font-medium">
            <div class="px-3 w-[15rem] flex-shrink-0">
              <RouterLink :to="{ name : 'customers'}" class="flex flex-grow items-start p-[6px] text-left min-h-8 rounded-md text-color-19
                focus:bg-color-18 hover:bg-color-20" :class="{ 'bg-color-20' : $route.name === 'customers' || $route.name === 'customer_groups'}">
                <div class="w-5 h-5 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                    <path fill="currentColor" d="M12.01 10.75a4.25 4.25 0 1 1 0-8.5 4.25 4.25 0 0 1 0 8.5m0-7a2.75 2.75 0 1 0 0 5.5 2.75 2.75 0 0 0 0-5.5m3.99 18h-8c-2.42 0-3.753-1.325-3.753-3.731 0-2.662 1.506-5.769 5.75-5.769h4c4.244 0 5.75 3.107 5.75 5.769.003 2.406-1.33 3.731-3.747 3.731m-6-8a3.957 3.957 0 0 0-4.25 4.269c0 1.564.674 2.231 2.253 2.231h7.997c1.58 0 2.253-.667 2.253-2.231a3.96 3.96 0 0 0-4.253-4.269z"></path>
                  </svg>
                </div>
                <span class="flex-1 ml-1 font-medium">Khách hàng</span>
              </RouterLink>
            </div>
            <div>
              <ul>
                <li class="flex flex-wrap relative">
                  <div class="px-3 pt-1 w-[15rem] flex-shrink-0 text-color-19">
                    <RouterLink :to="{ name : 'customers'}" class="pl-[34px] py-[6px] pr-[6px] focus:bg-color-18 hover:bg-color-20 flex flex-grow-1 text-left relative rounded-md"
                                :class="{'text-color-21 bg-color-20' : $route.name === 'customers'}">
                      <span class="ml-1">Khách hàng</span>
                    </RouterLink>
                  </div>
                </li>
                <li class="flex flex-wrap relative">
                  <div class="px-3 pt-1 w-[15rem] flex-shrink-0 text-color-19">
                    <RouterLink :to="{ name : 'collections'}" class="pl-[34px] py-[6px] pr-[6px] focus:bg-color-18 hover:bg-color-20 flex flex-grow-1 text-left relative rounded-md"
                    >
                      <span class="ml-1">Nhóm khách hàng</span>
                    </RouterLink>
                  </div>
                </li>
              </ul>
            </div>
          </li>
          <li class="flex flex-wrap relative">
            <div class="px-3 w-[15rem] flex-shrink-0">
              <RouterLink :to="{ name : 'dashboard'}" :class="{ 'bg-color-20' : $route.name === 'dashboard'}" class="flex flex-grow items-start p-[6px] text-left min-h-8 rounded-md text-color-19
                   focus:bg-color-18 hover:bg-color-20">
                <div class="w-5 h-5 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                    <path fill="currentColor" d="M21.687 12.24a2.08 2.08 0 0 0-.313-2.585l-.737-.726a.25.25 0 0 1-.073-.194l.073-1.036a2.08 2.08 0 0 0-1.482-2.15l-.975-.295a.25.25 0 0 1-.156-.139l-.408-.942a2.094 2.094 0 0 0-2.322-1.22l-.99.194a.249.249 0 0 1-.203-.05l-.787-.636a2.1 2.1 0 0 0-2.628 0l-.787.636a.25.25 0 0 1-.204.05l-.99-.194a2.093 2.093 0 0 0-2.321 1.22l-.408.943a.25.25 0 0 1-.156.139l-.975.294a2.08 2.08 0 0 0-1.482 2.15l.073 1.037a.25.25 0 0 1-.073.194l-.737.725a2.08 2.08 0 0 0-.313 2.586l.544.885a.24.24 0 0 1 .025.206l-.319.99c-.3.935.08 1.938.924 2.44l.882.523c.063.038.106.1.119.171l.173 1.02a2.08 2.08 0 0 0 1.958 1.737l1.01.05a.24.24 0 0 1 .186.098l.616.811a2.11 2.11 0 0 0 2.55.63l.914-.427a.25.25 0 0 1 .21 0l.913.427q.417.193.878.194a2.11 2.11 0 0 0 1.672-.824l.616-.81a.25.25 0 0 1 .185-.099l1.011-.05a2.08 2.08 0 0 0 1.958-1.737l.174-1.019a.25.25 0 0 1 .117-.171l.883-.524a2.08 2.08 0 0 0 .923-2.439l-.319-.99a.25.25 0 0 1 .025-.207zm-1.57-.965-.545.885a2.09 2.09 0 0 0-.21 1.736l.32.991c.035.11-.01.23-.11.29l-.883.523c-.528.313-.89.84-.994 1.447l-.174 1.018a.25.25 0 0 1-.232.207l-1.012.05a2.08 2.08 0 0 0-1.56.823l-.616.811a.25.25 0 0 1-.303.075l-.914-.426a2.08 2.08 0 0 0-1.769 0l-.914.427a.25.25 0 0 1-.303-.075l-.616-.811a2.09 2.09 0 0 0-1.56-.823l-1.012-.05a.25.25 0 0 1-.232-.207l-.174-1.02a2.09 2.09 0 0 0-.993-1.446l-.883-.524a.25.25 0 0 1-.11-.289l.32-.99a2.09 2.09 0 0 0-.21-1.737l-.545-.885a.25.25 0 0 1 .037-.307l.736-.726c.437-.43.662-1.027.618-1.638l-.073-1.036a.246.246 0 0 1 .175-.255l.976-.295a2.09 2.09 0 0 0 1.315-1.17l.408-.942a.25.25 0 0 1 .276-.145l.99.194q.2.04.404.04c.475 0 .94-.165 1.311-.465l.788-.635a.25.25 0 0 1 .312 0l.788.635a2.1 2.1 0 0 0 1.716.426l.99-.194a.252.252 0 0 1 .275.145l.408.942c.245.566.724.992 1.315 1.17l.975.294a.25.25 0 0 1 .176.255l-.074 1.037a2.09 2.09 0 0 0 .618 1.638l.736.725a.246.246 0 0 1 .038.307"></path><path fill="currentColor" d="M13.88 8.311a.78.78 0 0 0-1.062.296l-3.812 6.751a.776.776 0 0 0 .296 1.063.78.78 0 0 0 1.063-.296l3.81-6.751a.78.78 0 0 0-.295-1.063"></path><path fill="currentColor" d="M14.477 12.532a2.2 2.2 0 0 0-2.197 2.197 2.2 2.2 0 0 0 2.197 2.197 2.2 2.2 0 0 0 2.197-2.197 2.2 2.2 0 0 0-2.197-2.197m0 2.835a.639.639 0 0 1 0-1.276.639.639 0 0 1 0 1.276"></path><path fill="currentColor" d="M11.72 9.266a2.2 2.2 0 0 0-2.197-2.197 2.2 2.2 0 0 0-2.197 2.197 2.2 2.2 0 0 0 2.197 2.197 2.2 2.2 0 0 0 2.197-2.197m-2.197-.638a.639.639 0 0 1 0 1.276.639.639 0 0 1 0-1.276"></path>
                  </svg>
                </div>
                <span class="flex-1 ml-1 font-medium">Khuyến mãi</span>
              </RouterLink>
            </div>
          </li>
          <li class="flex flex-wrap relative font-medium">
            <div class="px-3 w-[15rem] flex-shrink-0">
              <RouterLink :to="{ name : 'orders'}" class="flex flex-grow items-start p-[6px] text-left min-h-8 rounded-md text-color-19
                focus:bg-color-18 hover:bg-color-20" :class="{ 'bg-color-20' : $route.name === 'orders' || $route.name === 'draft_orders' || $route.name === 'order_returns' || $route.name === 'checkouts'}">
                <div class="w-5 h-5 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                    <path fill="currentColor" d="M12.508 2.01h-1.024a2.118 2.118 0 0 0-2.306 2.305v15.37a2.118 2.118 0 0 0 2.306 2.306h1.024a2.116 2.116 0 0 0 2.306-2.306v-15.37a2.117 2.117 0 0 0-2.306-2.306m.769 17.675c0 .604-.165.769-.769.769h-1.024c-.604 0-.769-.165-.769-.769v-15.37c0-.604.165-.769.769-.769h1.024c.604 0 .769.165.769.769zm6.404-12.552h-1.024a2.118 2.118 0 0 0-2.306 2.305v10.247a2.12 2.12 0 0 0 2.306 2.306h1.024a2.116 2.116 0 0 0 2.306-2.306v-10.247a2.116 2.116 0 0 0-2.306-2.305m.769 12.552c0 .604-.165.769-.769.769h-1.024c-.604 0-.769-.165-.769-.769v-10.247c0-.603.165-.768.769-.768h1.024c.604 0 .769.165.769.768zm-15.114-8.453h-1.025a2.117 2.117 0 0 0-2.306 2.305v6.148a2.118 2.118 0 0 0 2.306 2.306h1.025a2.116 2.116 0 0 0 2.305-2.306v-6.148a2.118 2.118 0 0 0-2.305-2.306m.768 8.453c0 .604-.165.769-.768.769h-1.025c-.604 0-.769-.165-.769-.769v-6.148c0-.604.165-.769.769-.769h1.025c.603 0 .768.165.768.77z"></path>
                  </svg>
                </div>
                <span class="flex-1 ml-1 font-medium">Báo cáo</span>
              </RouterLink>
            </div>
            <div v-if="$route.name === 'orders' || $route.name === 'draft_orders' || $route.name === 'order_returns' || $route.name === 'checkouts'">
              <div class="">
                <ul>
                  <li class="flex flex-wrap relative">
                    <div class="px-3 pt-1 w-[15rem] flex-shrink-0 text-color-19">
                      <RouterLink :to="{ name : 'orders'}" class="pl-[34px] py-[6px] pr-[6px] focus:bg-color-18 hover:bg-color-20 flex flex-grow-1 text-left relative rounded-md"
                                  :class="{'text-color-21 bg-color-20' : $route.name === 'orders'}">
                        <span class="ml-1">Tổng quan báo cáo</span>
                      </RouterLink>
                    </div>
                  </li>
                  <li class="flex flex-wrap relative">
                    <div class="px-3 pt-1 w-[15rem] flex-shrink-0 text-color-19">
                      <RouterLink :to="{ name : 'draft_orders'}" class="pl-[34px] py-[6px] pr-[6px] focus:bg-color-18 hover:bg-color-20 flex flex-grow-1 text-left relative rounded-md"
                                  :class="{'text-color-21 bg-color-20' : $route.name === 'draft_orders'}">
                        <span class="ml-1">Danh sách báo cáo</span>
                      </RouterLink>
                    </div>
                  </li>
                  <li class="flex flex-wrap relative">
                    <div class="px-3 pt-1 w-[15rem] flex-shrink-0 text-color-19">
                      <RouterLink :to="{ name : 'order_returns'}" class="pl-[34px] py-[6px] pr-[6px] focus:bg-color-18 hover:bg-color-20 flex flex-grow-1 text-left relative rounded-md"
                                  :class="{'text-color-21 bg-color-20' : $route.name === 'order_returns'}">
                        <span class="ml-1">Trả hàng</span>
                      </RouterLink>
                    </div>
                  </li>
                  <li class="flex flex-wrap relative">
                    <div class="px-3 pt-1 w-[15rem] flex-shrink-0 text-color-19">
                      <RouterLink :to="{ name : 'checkouts'}" class="pl-[34px] py-[6px] pr-[6px] focus:bg-color-18 hover:bg-color-18 flex flex-grow-1 text-left relative rounded-md"
                                  :class="{'text-color-21 bg-color-20' : $route.name === 'checkouts'}">
                        <span class="ml-1">Đơn chưa hoàn tất</span>
                      </RouterLink>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
        <div class="py-2 flex flex-col gap-1 border-b border-b-color-20">
          <ul class="flex flex-col gap-1">
            <li class="flex items-center min-h-8 px-3 w-[15rem]">
              <div class="text-color-19 uppercase px-2 flex-grow">
                <span class="font-semibold">Kênh bán hàng</span>
              </div>
              <button class="h-8 py-1 px-[6px] rounded-md flex items-center hover:bg-color-20">
                <span class="block w-5 h-5 max-w-5 max-h-5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                    <path fill="rgb(238, 239, 239)" fill-rule="evenodd" d="M12 2c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10m-1 5v4h-4v2h4v4h2v-4h4v-2h-4v-4zm-7 5c0 4.41 3.59 8 8 8s8-3.59 8-8-3.59-8-8-8-8 3.59-8 8" clip-rule="evenodd"></path>
                  </svg>
                </span>
              </button>
            </li>
            <li class="flex items-center min-h-8 px-3 w-[15rem]">
              <div class="text-color-19 p-[6px] flex items-start flex-grow cursor-pointer min-h-8 rounded-md">
                <div class="w-5 h-5 text-color-22 mr-2">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 20 20" focusable="false" aria-hidden="true"><defs><linearGradient id="702__a" x1="7.56" x2="8.72" y1="4.73" y2="9.03" gradientTransform="matrix(1 0 0 -1 0 19.89)" gradientUnits="userSpaceOnUse"><stop offset="0" style="stop-color: rgb(230, 248, 255);"></stop><stop offset="0.98" style="stop-color: rgb(255, 255, 255);"></stop></linearGradient><linearGradient xlink:href="#702__a" id="702__b" x1="8.81" x2="9.97" y1="4.44" y2="8.72"></linearGradient><linearGradient xlink:href="#702__a" id="702__c" x1="9.16" x2="11.65" y1="8.34" y2="8.34"></linearGradient></defs><rect width="20" height="20" rx="4" style="fill: rgb(13, 180, 115);"></rect><path d="M15.85 5.54a1.37 1.37 0 0 0-1.37-1.37h-8.94a1.37 1.37 0 0 0-1.37 1.37v1.3h11.68Z" style="fill: url(&quot;#702__a&quot;);"></path><path d="M4.17 14.24a1.59 1.59 0 0 0 1.59 1.59h8.49a1.6 1.6 0 0 0 1.6-1.59v-6.64h-11.68z" style="fill: url(&quot;#702__b&quot;);"></path><path d="M5.18 5.5a.46.46 0 0 1 .92 0 .47.47 0 0 1-.46.5.46.46 0 0 1-.46-.5" style="fill: rgb(13, 180, 115);"></path><path d="M6.78 5.5a.46.46 0 0 1 .91 0 .46.46 0 1 1-.91 0" style="fill: rgb(13, 180, 115);"></path><path d="M8.87 9.84a.91.91 0 0 0-.87-.7h-.91v.91h.91l.52 2.2a.91.91 0 0 0 .89.7h1.8a1.13 1.13 0 0 0 1.06-.8l.68-2h-4Z" style="fill: rgb(13, 180, 115);"></path><path d="m11.65 11.06-.27.81a.22.22 0 0 1-.19.16h-1.8l-.23-1Z" style="fill: url(&quot;#702__c&quot;);"></path><path d="M9.92 13.84a.46.46 0 1 1-.46-.46.47.47 0 0 1 .46.46" style="fill: rgb(13, 180, 115);"></path>
                    <path d="M11.63 13.84a.47.47 0 0 1-.46.46.46.46 0 0 1 0-.92.47.47 0 0 1 .46.46" style="fill: rgb(13, 180, 115);"></path>
                  </svg>
                </div>
                <span class="font-medium flex-1 ml-1">Website</span>
              </div>
              <button class="h-8 p-[6px] rounded-md flex items-center hover:bg-color-20 text-color-19">
                <span class="block w-5 h-5 max-w-5 max-h-5">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                    <path fill="currentColor" d="M12 4.5c-5 0-9.27 3.11-11 7.5 1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5m0 12.5c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"></path>
                  </svg>
                </span>
              </button>
            </li>
          </ul>
        </div>
        <div class="sticky bottom-0 bg-color-23">
          <ul class="py-2 flex flex-col gap-1 border-t border-color-24">
            <li class="flex flex-wrap relative">
              <div class="px-3 w-[15rem] flex-shrink-0">
                <div class="p-[6px] font-medium flex flex-grow text-color-19 text-left">
                  <div class="w-5 h-5 mr-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
                      <path fill="currentColor" d="M11.744 8a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5m0 6a2.25 2.25 0 1 1 0-4.5 2.25 2.25 0 0 1 0 4.5m9.208-.3a2.256 2.256 0 0 1 0-3.908 1.085 1.085 0 0 0 .392-1.475l-1.669-2.886a1.083 1.083 0 0 0-1.476-.4 2.26 2.26 0 0 1-3.39-1.95 1.087 1.087 0 0 0-1.087-1.081h-3.956a1.09 1.09 0 0 0-1.087 1.086 2.26 2.26 0 0 1-3.389 1.95 1.084 1.084 0 0 0-1.477.394l-1.669 2.889a1.084 1.084 0 0 0 .4 1.479 2.254 2.254 0 0 1 0 3.906 1.08 1.08 0 0 0-.4 1.479l1.672 2.884a1.084 1.084 0 0 0 1.478.4 2.26 2.26 0 0 1 2.255 0l.01.006a2.25 2.25 0 0 1 1.12 1.946 1.087 1.087 0 0 0 1.085 1.086h3.96a1.087 1.087 0 0 0 1.085-1.085 2.26 2.26 0 0 1 3.39-1.951 1.083 1.083 0 0 0 1.477-.394l1.674-2.889a1.084 1.084 0 0 0-.398-1.483zm-2.377 3.274a3.758 3.758 0 0 0-5.244 3.023h-3.177a3.758 3.758 0 0 0-5.24-3.024l-1.277-2.2a3.755 3.755 0 0 0 0-6.047l1.277-2.2a3.76 3.76 0 0 0 5.242-3.026h3.175a3.76 3.76 0 0 0 5.244 3.023l1.276 2.2a3.755 3.755 0 0 0 0 6.046z"></path>
                    </svg>
                  </div>
                  <div>Cấu hình</div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </aside>
</template>
<script setup lang="ts">
</script>

<style scoped>
.scrollbar{
  scrollbar-width: thin;
  scrollbar-color: rgb(43, 66, 99) rgb(24, 37, 55);
}
</style>