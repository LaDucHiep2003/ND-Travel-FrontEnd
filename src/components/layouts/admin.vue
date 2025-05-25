<template>
  <div class="font-Inter font-450">
    <Header />
    <Sidebar />
    <main class="mt-14 py-0 w-[calc(100%-15rem)] ml-[15rem]">
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
import Header from '@/components/partials/Admin/Header.vue';
import Sidebar from "@/components/partials/Admin/Sidebar.vue";
export default {
  components:{
    Header,
    Sidebar
  }
}
</script>