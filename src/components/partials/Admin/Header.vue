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
          <div class="w-full h-56 bg-white border border-[#d3d5d7] rounded-md absolute top-full mt-1 hidden
              group-focus-within:block" style="box-shadow: rgba(168, 168, 168, 0.5) -4px 4px 20px 0px;">
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
            <div class="w-[420px] bg-white border border-[#d3d5d7] rounded-md absolute top-full left-0 -translate-x-1/2 mt-2 hidden group-focus-within:block" style="box-shadow: rgba(168, 168, 168, 0.5) -4px 4px 20px 0px;">
              <div class="p-5 border-b border-[#d3d5d7]">
                <span class="text-xl font-semibold">Thông báo</span>
              </div>
              <div class="flex justify-between items-center flex-wrap border-b border-[#e8eaeb]">
                <button class="appearance-none flex flex-1 px-1 pt-1 pb-[6px] text-nowrap text-center mt-[1px] mb-[-1px] text-inherit h-[46px] ">
                  <span class="text-color-25 py-2 px-4 min-w-9 font-semibold relative search flex flex-wrap gap-1">
                    Hệ thống
                     <span class="flex h-auto items-center">
                      <span class="flex">
                        <span class="inline-flex items-center bg-[#ee4747] rounded-full py-[2px] px-2 outline-0 relative">
                          <span class="font-550 text-white text-xs">1</span>
                        </span>
                      </span>
                    </span>
                  </span>
                </button>
                <button class="appearance-none flex-1 px-1 pt-1 pb-[6px] text-nowrap text-center mt-[1px] mb-[-1px] text-inherit h-[46px]">
                  <span class="text-color-26 py-2 px-4 min-w-9 font-semibold flex flex-wrap gap-1">Tin tức
                    <span class="flex h-auto items-center">
                        <span class="flex">
                          <span class="inline-flex items-center bg-[#ee4747] rounded-full py-[2px] px-2 outline-0 relative">
                            <span class="font-550 text-white text-xs">1</span>
                          </span>
                        </span>
                      </span>
                  </span>
                </button>
                <button class="appearance-none flex-1 px-1 pt-1 pb-[6px] text-nowrap text-center mt-[1px] mb-[-1px] text-inherit h-[46px]">
                  <span class="text-color-26 py-2 px-4 min-w-9 font-semibold">Khuyến mại</span>
                </button>
              </div>
<!--              Khi Khong co thong bao nao-->
              <div class="p-5 hidden">
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
<!--              Thong bao he thong-->
              <div class="border-b border-[#f2f9ff] hidden">
                <RouterLink to="" class="flex justify-start py-3 px-4 gap-2 bg-[#f2f9ff] appearance-none">
                  <div class="flex flex-col gap-1 w-[30px] items-center">
                    <img src="data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='30'%20height='30'%20rx='15'%20fill='url(%23paint0_linear_1362_16610)'%20/%3e%3cpath%20d='M14.2768%2018.8542C14.2768%2018.5824%2014.3007%2018.3186%2014.3407%2018.0628C12.614%2018.0229%2011.2231%2016.6159%2011.2231%2014.8733C11.2231%2013.1066%2012.654%2011.6757%2014.4206%2011.6757C15.8915%2011.6757%2017.1226%2012.675%2017.4903%2014.0339C18.1058%2013.7781%2018.7853%2013.6342%2019.4968%2013.6342C20.0483%2013.6342%2020.5839%2013.7222%2021.0875%2013.882L21.9109%2013.1306C22.1907%2012.8748%2022.2547%2012.4671%2022.0628%2012.1394L20.6079%209.6213C20.4241%209.29355%2020.0324%209.14166%2019.6726%209.26157L18.2018%209.72522C18.0179%209.58932%2017.826%209.46142%2017.6262%209.3495C17.4184%209.2296%2017.1945%209.11768%2016.9707%209.01376L16.6589%207.51091C16.579%207.14319%2016.2512%206.87939%2015.8755%206.87939H12.9658C12.5901%206.87939%2012.2703%207.14319%2012.1904%207.51091L11.8626%209.01376C11.6468%209.10969%2011.4389%209.21361%2011.2391%209.32552C11.0312%209.44543%2010.8234%209.58133%2010.6316%209.72522L9.16068%209.25358C8.80895%209.14166%208.41725%209.29355%208.22539%209.6133L6.77051%2012.1394C6.58665%2012.4591%206.6506%2012.8748%206.93038%2013.1306L8.06552%2014.1698C8.04153%2014.4016%208.02555%2014.6415%208.02555%2014.8733C8.02555%2015.1051%208.04153%2015.3449%208.06552%2015.5847L6.93038%2016.6239C6.6506%2016.8797%206.58665%2017.2874%206.7785%2017.6152L8.23339%2020.1332C8.41725%2020.461%208.80895%2020.6129%209.16867%2020.493L10.6395%2020.0293C10.8394%2020.1732%2011.0472%2020.3091%2011.2551%2020.429C11.4549%2020.5409%2011.6548%2020.6449%2011.8626%2020.7408L12.1904%2022.2436C12.2703%2022.6034%2012.5901%2022.8672%2012.9658%2022.8672H15.8755C15.9555%2022.8672%2016.0354%2022.8512%2016.1074%2022.8272C14.9882%2021.8679%2014.2768%2020.445%2014.2768%2018.8542Z'%20fill='white'%20/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M21.095%2016.0886C20.9911%2016.0247%2020.8872%2015.9767%2020.7753%2015.9287L20.6154%2015.1853C20.5754%2015.0014%2020.4156%2014.8735%2020.2317%2014.8735H18.8008C18.6169%2014.8735%2018.4571%2015.0014%2018.4171%2015.1853L18.2572%2015.9287C18.1533%2015.9767%2018.0494%2016.0247%2017.9534%2016.0806C17.8495%2016.1366%2017.7536%2016.2005%2017.6577%2016.2725L16.9382%2016.0406C16.7624%2015.9847%2016.5705%2016.0566%2016.4826%2016.2165L15.7711%2017.4556C15.6752%2017.6154%2015.7072%2017.8153%2015.8431%2017.9432L16.4026%2018.4548C16.3866%2018.5747%2016.3866%2018.6866%2016.3866%2018.8065C16.3866%2018.9184%2016.3946%2019.0383%2016.4026%2019.1583L15.8431%2019.6699C15.7072%2019.7978%2015.6752%2019.9976%2015.7711%2020.1575L16.4826%2021.3965C16.5785%2021.5564%2016.7624%2021.6284%2016.9382%2021.5724L17.6577%2021.3406C17.7536%2021.4125%2017.8575%2021.4765%2017.9614%2021.5404C18.0574%2021.5964%2018.1613%2021.6444%2018.2652%2021.6923L18.4251%2022.4357C18.4651%2022.6196%2018.6249%2022.7475%2018.8088%2022.7475H20.2397C20.4236%2022.7475%2020.5834%2022.6196%2020.6234%2022.4357L20.7833%2021.6923C20.8952%2021.6444%2020.9991%2021.5884%2021.103%2021.5324C21.199%2021.4765%2021.2949%2021.4125%2021.3908%2021.3486L22.1103%2021.5804C22.2861%2021.6364%2022.478%2021.5644%2022.5659%2021.4045L23.2774%2020.1655C23.3733%2020.0056%2023.3413%2019.8058%2023.2054%2019.6779L22.6459%2019.1663C22.6538%2019.0304%2022.6538%2018.9184%2022.6538%2018.7985C22.6538%2018.6866%2022.6459%2018.5667%2022.6379%2018.4548L23.1974%2017.9432C23.3333%2017.8153%2023.3653%2017.6154%2023.2694%2017.4556L22.5579%2016.2165C22.462%2016.0566%2022.2781%2015.9847%2022.1023%2016.0406L21.3828%2016.2725C21.2869%2016.2005%2021.191%2016.1446%2021.095%2016.0886ZM19.5123%2020.3733C20.3836%2020.3733%2021.087%2019.6699%2021.087%2018.7985C21.087%2017.9272%2020.3836%2017.2237%2019.5123%2017.2237C18.6409%2017.2237%2017.9375%2017.9272%2017.9375%2018.7985C17.9455%2019.6699%2018.6489%2020.3733%2019.5123%2020.3733Z'%20fill='white'%20/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_1362_16610'%20x1='10'%20y1='24.8684'%20x2='35.0519'%20y2='13.5638'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20stop-color='%230088FF'%20/%3e%3cstop%20offset='1'%20stop-color='%2333A0FF'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e" alt="">
                  </div>
                  <div class="flex flex-col flex-wrap items-stretch ">
                    <div class="font-550">Đơn hàng #1001 đã được mua quan nguồn đơn Website </div>
                    <div class="text-color-26 text-xs">03/05/2025 15:57</div>
                  </div>
                </RouterLink>
              </div>
<!--              Thong bao tin tuc-->
              <div class="border-b border-[#f2f9ff]">
                <RouterLink to="" class="flex justify-start py-3 px-4 gap-2 bg-[#f2f9ff] appearance-none hover:text-color-28">
                  <div class="flex flex-col gap-1 w-[30px] items-center">
                    <img src="data:image/svg+xml,%3csvg%20width='30'%20height='30'%20viewBox='0%200%2030%2030'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3crect%20width='30'%20height='30'%20rx='15'%20fill='url(%23paint0_linear_1362_16664)'%20/%3e%3cpath%20d='M14.7625%2024.1666H20.8851C21.5155%2024.1666%2022.0272%2023.6549%2022.0272%2023.0245V8.17349V6.97531C22.0272%206.34491%2021.5155%205.83325%2020.8851%205.83325H14.7625H12.7267V6.21106C12.731%206.24992%2012.7332%206.29094%2012.7332%206.33196V8.82116V9.46019C12.7332%2010.3475%2012.0121%2011.0686%2011.1248%2011.0686H10.4858H7.99655C7.96416%2011.0686%207.92962%2011.0664%207.89724%2011.0643H7.5V23.0245C7.5%2023.6549%208.01166%2024.1666%208.64206%2024.1666H9.89421H14.7625ZM14.9935%2020.2849H11.0017C10.7038%2020.2849%2010.462%2020.0431%2010.462%2019.7452C10.462%2019.4472%2010.7038%2019.2054%2011.0017%2019.2054H14.9957C15.2936%2019.2054%2015.5354%2019.4472%2015.5354%2019.7452C15.5354%2020.0431%2015.2915%2020.2849%2014.9935%2020.2849ZM18.9875%2017.5301H11.0017C10.7038%2017.5301%2010.462%2017.2883%2010.462%2016.9904C10.462%2016.6925%2010.7038%2016.4507%2011.0017%2016.4507H18.9875C19.2854%2016.4507%2019.5272%2016.6925%2019.5272%2016.9904C19.5272%2017.2883%2019.2854%2017.5301%2018.9875%2017.5301ZM11.0017%2013.5254H18.9875C19.2854%2013.5254%2019.5272%2013.7672%2019.5272%2014.0651C19.5272%2014.363%2019.2854%2014.6048%2018.9875%2014.6048H11.0017C10.7038%2014.6048%2010.462%2014.363%2010.462%2014.0651C10.462%2013.7672%2010.7038%2013.5254%2011.0017%2013.5254Z'%20fill='white'%20/%3e%3cpath%20d='M7.99627%2010.421H11.1245C11.1267%2010.421%2011.131%2010.421%2011.1331%2010.421C11.6556%2010.4166%2012.0787%209.99349%2012.0831%209.47104C12.0831%209.46888%2012.0831%209.46456%2012.0831%209.46241V6.33202C12.0831%206.04273%2011.8456%205.85059%2011.5995%205.85059C11.4807%205.85059%2011.362%205.89376%2011.2627%205.99307L7.65517%209.60057C7.35292%209.90282%207.56665%2010.421%207.99627%2010.421Z'%20fill='white'%20/%3e%3cdefs%3e%3clinearGradient%20id='paint0_linear_1362_16664'%20x1='12.5'%20y1='21.7105'%20x2='35.5665'%20y2='11.4449'%20gradientUnits='userSpaceOnUse'%20%3e%3cstop%20stop-color='%23FFAE06'%20/%3e%3cstop%20offset='1'%20stop-color='%23FFBE38'%20/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e" alt="">
                  </div>
                  <div class="flex flex-col flex-wrap items-stretch ">
                    <div class="font-550">[Tổng hợp] Cập nhật tính năng tháng 04/2025</div>
                    <div class="text-color-26 text-xs">03/05/2025 15:57</div>
                  </div>
                </RouterLink>
              </div>
              <div class="rounded-bl-md rounded-br-md p-3">
                <RouterLink to="" class="relative flex justify-center items-center w-full h-full min-w-8 min-h-8 text-color-28
                  rounded-md py-1.5 px-2 bg-transparent">
                  <span class="flex justify-center items-center">
                    Xem tất cả thông báo
                  </span>
                </RouterLink>
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