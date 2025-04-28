

<template>
    <div class="mt-10">
        <div class="border-b border-color-3">
            <div class="text-xl border-b-2 border-color-1 inline-block pb-1">Tour cùng loại</div>
        </div>
        <div class="grid grid-cols-4 gap-5 mt-5">
            <CartTour />
            <CartTour />
            <CartTour />
            <CartTour />
        </div>
    </div>
</template>

<script>
    import CartTour from "@/components/DungChung/CartTour.vue";

    export default{
        components:{
            CartTour
        }
    }
</script>