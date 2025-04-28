
<template>
    <BreadCrumb />

    <div class="container mx-auto flex justify-between gap-5 py-10">
        <DanhMucTour />
        <DanhSachTour />
    </div>
</template>

<script>
    import BreadCrumb from '@/components/DanhSachSanPham/BreadCrumb.vue';
    import DanhMucTour from '@/components/DanhSachSanPham/DanhMucTour.vue';
    import DanhSachTour from '@/components/DanhSachSanPham/DanhSachTour.vue';

    export default{
        components:{
            BreadCrumb,
            DanhMucTour,
            DanhSachTour,
        }
    }
</script>