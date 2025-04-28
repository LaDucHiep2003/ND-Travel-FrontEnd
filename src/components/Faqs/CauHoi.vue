
<template>
    <div class="container mx-auto py-10">
        <div class="text-center">
            <div class="text-3xl font-bold text-color-6 max-md:text-[28px]">Câu hỏi thường gặp?</div>
            <div class="text-base text-color-5 mt-2">Chúng tôi vinh hạnh vì đã có cơ hội đồng hành với hơn 10.000 khách hàng trên khắp thế giới</div>
        </div>
        <div class="grid grid-cols-2 gap-3 mt-10">
            <div class="border border-color-3 p-3 rounded-lg">
                <div class="w-full">
                    <div class="w-full rounded-2xl bg-white">
                        <Disclosure v-slot="{ open }">
                            <DisclosureButton
                                class="flex w-full items-center justify-between rounded-lg bg-color-2 px-4 py-2 text-left text-xl font-bold text-color-1 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
                                >
                                <div>Điều kiện đăng ký tour như thế nào?</div>
                                <v-icon name="fa-angle-down" scale="1.3" :class="open ? 'rotate-180 transform' : ''" />
                            </DisclosureButton>
                                <DisclosurePanel class="text-base py-2 text-gray-500">
                                    Để đăng ký đi tour Quý khách cần chuẩn bị Chứng minh nhân dân (còn hạn sử dụng) đối với tour du lịch trong 
                                    nước, và Hộ chiếu (còn hạn trên 6 tháng) đối với tour du lịch nước ngoài, ngoài ra đối với một số nước thì 
                                    sẽ Quý khách sẽ phải chuẩn bị thêm hồ sơ để xin visa, hồ sơ sẽ theo yêu cầu của Lãnh sự quán/ Đại sứ quán quy 
                                    định.
                            </DisclosurePanel>
                        </Disclosure>
                        <Disclosure v-slot="{ open }" as="div" class="mt-4">
                            <DisclosureButton
                                class="flex w-full items-center justify-between rounded-lg bg-color-2 px-4 py-2 text-left text-xl font-bold text-color-1 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
                                >
                                <div>Điều kiện đăng ký tour như thế nào?</div>
                                <v-icon name="fa-angle-down" scale="1.3" :class="open ? 'rotate-180 transform' : ''" />
                            </DisclosureButton>
                                <DisclosurePanel class="text-base py-2 text-gray-500">
                                    Để đăng ký đi tour Quý khách cần chuẩn bị Chứng minh nhân dân (còn hạn sử dụng) đối với tour du lịch trong 
                                    nước, và Hộ chiếu (còn hạn trên 6 tháng) đối với tour du lịch nước ngoài, ngoài ra đối với một số nước thì 
                                    sẽ Quý khách sẽ phải chuẩn bị thêm hồ sơ để xin visa, hồ sơ sẽ theo yêu cầu của Lãnh sự quán/ Đại sứ quán quy 
                                    định.
                            </DisclosurePanel>
                        </Disclosure>
                        <Disclosure v-slot="{ open }" as="div" class="mt-4">
                            <DisclosureButton
                                class="flex w-full items-center justify-between rounded-lg bg-color-2 px-4 py-2 text-left text-xl font-bold text-color-1 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
                                >
                                <div>Điều kiện đăng ký tour như thế nào?</div>
                                <v-icon name="fa-angle-down" scale="1.3" :class="open ? 'rotate-180 transform' : ''" />
                            </DisclosureButton>
                                <DisclosurePanel class="text-base py-2 text-gray-500">
                                    Để đăng ký đi tour Quý khách cần chuẩn bị Chứng minh nhân dân (còn hạn sử dụng) đối với tour du lịch trong 
                                    nước, và Hộ chiếu (còn hạn trên 6 tháng) đối với tour du lịch nước ngoài, ngoài ra đối với một số nước thì 
                                    sẽ Quý khách sẽ phải chuẩn bị thêm hồ sơ để xin visa, hồ sơ sẽ theo yêu cầu của Lãnh sự quán/ Đại sứ quán quy 
                                    định.
                            </DisclosurePanel>
                        </Disclosure>
                    </div>
                </div>
            </div>
            <div class="border border-color-3 p-3 rounded-lg">
                <div class="w-full">
                    <div class="w-full rounded-2xl bg-white">
                        <Disclosure v-slot="{ open }">
                            <DisclosureButton
                                class="flex w-full items-center justify-between rounded-lg bg-color-2 px-4 py-2 text-left text-xl font-bold text-color-1 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
                                >
                                <div>Điều kiện đăng ký tour như thế nào?</div>
                                <v-icon name="fa-angle-down" scale="1.3" :class="open ? 'rotate-180 transform' : ''" />
                            </DisclosureButton>
                                <DisclosurePanel class="text-base py-2 text-gray-500">
                                    Để đăng ký đi tour Quý khách cần chuẩn bị Chứng minh nhân dân (còn hạn sử dụng) đối với tour du lịch trong 
                                    nước, và Hộ chiếu (còn hạn trên 6 tháng) đối với tour du lịch nước ngoài, ngoài ra đối với một số nước thì 
                                    sẽ Quý khách sẽ phải chuẩn bị thêm hồ sơ để xin visa, hồ sơ sẽ theo yêu cầu của Lãnh sự quán/ Đại sứ quán quy 
                                    định.
                            </DisclosurePanel>
                        </Disclosure>
                        <Disclosure v-slot="{ open }" as="div" class="mt-4">
                            <DisclosureButton
                                class="flex w-full items-center justify-between rounded-lg bg-color-2 px-4 py-2 text-left text-xl font-bold text-color-1 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
                                >
                                <div>Điều kiện đăng ký tour như thế nào?</div>
                                <v-icon name="fa-angle-down" scale="1.3" :class="open ? 'rotate-180 transform' : ''" />
                            </DisclosureButton>
                                <DisclosurePanel class="text-base py-2 text-gray-500">
                                    Để đăng ký đi tour Quý khách cần chuẩn bị Chứng minh nhân dân (còn hạn sử dụng) đối với tour du lịch trong 
                                    nước, và Hộ chiếu (còn hạn trên 6 tháng) đối với tour du lịch nước ngoài, ngoài ra đối với một số nước thì 
                                    sẽ Quý khách sẽ phải chuẩn bị thêm hồ sơ để xin visa, hồ sơ sẽ theo yêu cầu của Lãnh sự quán/ Đại sứ quán quy 
                                    định.
                            </DisclosurePanel>
                        </Disclosure>
                        <Disclosure v-slot="{ open }" as="div" class="mt-4">
                            <DisclosureButton
                                class="flex w-full items-center justify-between rounded-lg bg-color-2 px-4 py-2 text-left text-xl font-bold text-color-1 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
                                >
                                <div>Điều kiện đăng ký tour như thế nào?</div>
                                <v-icon name="fa-angle-down" scale="1.3" :class="open ? 'rotate-180 transform' : ''" />
                            </DisclosureButton>
                                <DisclosurePanel class="text-base py-2 text-gray-500">
                                    Để đăng ký đi tour Quý khách cần chuẩn bị Chứng minh nhân dân (còn hạn sử dụng) đối với tour du lịch trong 
                                    nước, và Hộ chiếu (còn hạn trên 6 tháng) đối với tour du lịch nước ngoài, ngoài ra đối với một số nước thì 
                                    sẽ Quý khách sẽ phải chuẩn bị thêm hồ sơ để xin visa, hồ sơ sẽ theo yêu cầu của Lãnh sự quán/ Đại sứ quán quy 
                                    định.
                            </DisclosurePanel>
                        </Disclosure>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
</script>