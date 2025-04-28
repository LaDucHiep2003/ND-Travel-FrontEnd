

<template>
    <BreadCrumb />
    <div class="container mx-auto flex justify-between gap-5 py-10">
        <DanhMucTour />
        <BaiViet />
    </div>
</template>

<script setup>
    import BaiViet from '@/components/TinTuc/BaiViet.vue';
    import BreadCrumb from '@/components/TinTuc/BreadCrumb.vue';
    import DanhMucTour from '@/components/TinTuc/DanhMucTour.vue';
</script>