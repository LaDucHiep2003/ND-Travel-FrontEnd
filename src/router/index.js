import { createRouter, createWebHistory } from "vue-router";

import Home from '@/pages/Client/Home/Home.vue';
import DanhSachSanPham from "@/pages/Client/DanhSachSanPham/DanhSachSanPham.vue";
import ChiTietTour from "@/pages/Client/ChiTietTour/ChiTietTour.vue";
import BaoHiemTour from "@/pages/Client/BaoHiemTour/BaoHiemTour.vue";
import Visa from "@/pages/Client/Visa/Visa.vue";
import TinTuc from "@/pages/Client/TinTuc/TinTuc.vue";
import GioiThieu from "@/pages/Client/GioiThieu/GioiThieu.vue";
import Faqs from "@/pages/Client/Faqs/Faqs.vue";
import LienHe from "@/pages/Client/LienHe/LienHe.vue";
import ChiTietTinTuc from "@/pages/Client/ChiTietTinTuc/ChiTietTinTuc.vue";
import GioHang from "@/pages/Client/GioHang/GioHang.vue";
import DangNhap from "@/pages/Client/Auth/DangNhap.vue";
import DangKi from "@/pages/Client/Auth/DangKi.vue";
import TourYeuThich from "@/pages/Client/Auth/TourYeuThich.vue";

const routes = [
    {
      path: "/",
      component: Home,
      name: "Home",
    },
    {
      path: "/danh-sach-san-pham",
      component: DanhSachSanPham,
      name: "danh-sach-san-pham",
    },
    {
      path: "/chi-tiet-tour",
      component: ChiTietTour,
      name: "chi-tiet-tour",
    },
    {
      path: "/bao-hiem-tour",
      component: BaoHiemTour,
      name: "bao-hiem-tour",
    },
    {
      path: "/visa",
      component: Visa,
      name: "visa",
    },
    {
      path: "/tin-tuc",
      component: TinTuc,
      name: "tin-tuc",
    },
    {
      path: "/gioi-thieu",
      component: GioiThieu,
      name: "gioi-thieu",
    },
    {
      path: "/faqs",
      component: Faqs,
      name: "faqs",
    },
    {
      path: "/lien-he",
      component: LienHe,
      name: "lien-he",
    },
    {
      path: "/tin-tuc/:id",
      component: ChiTietTinTuc,
      name: "chi-tiet-tin-tuc",
    },
    {
      path: "/gio-hang",
      component: GioHang,
      name: "gio-hang",
    },
    {
      path: "/auth/dang-nhap",
      component: DangNhap,
      name: "dang-nhap",
    },
    {
      path: "/auth/dang-ki",
      component: DangKi,
      name: "dang-ki",
    },
    {
      path: "/tour-yeu-thich",
      component: TourYeuThich,
      name: "tour-yeu-thich",
    },
]


const router = createRouter({
    history: createWebHistory(),
    routes,
    scrollBehavior(to, from, savedPosition) {
      if (savedPosition) {
        return savedPosition;
      } else {
        return { top: 0 };
      }
    },
  });
  
  export default router;