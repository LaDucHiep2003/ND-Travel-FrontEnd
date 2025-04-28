
<template>
    <BreadCrumb />
    <div class="container mx-auto flex justify-between gap-5 py-10">
        <DanhMucTour />
        <div class="flex-1">
            <NoiDungTinTuc />
            <TinLienQuan />
        </div>
    </div>
</template>

<script setup>
    import NoiDungTinTuc from '@/components/ChiTietTinTuc/NoiDungTinTuc.vue';
    import BreadCrumb from '@/components/ChiTietTinTuc/BreadCrumb.vue';
    import DanhMucTour from '@/components/ChiTietTinTuc/DanhMucTour.vue';
    import TinLienQuan from '@/components/ChiTietTinTuc/TinLienQuan.vue';
</script>