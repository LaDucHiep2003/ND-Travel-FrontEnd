import { createRouter, createWebHistory } from "vue-router";

import Home from '@/pages/Client/Home/Home.vue';
import DanhSachTours from "@/pages/Client/DanhSachSanPham/DanhSachSanPham.vue";
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
import Dashboard from "@/pages/admin/Dashboard/Dashboard.vue";
import LayoutPageAdmin from "@/pages/admin/LayoutPageAdmin.vue";
import DanhSachDonHang from "@/pages/admin/DonHang/DanhSachDonHang.vue";
import DonHangNhap from "@/pages/admin/DonHang/DonHangNhap.vue";
import TraHang from "@/pages/admin/DonHang/TraHang.vue";
import DonChuaHoanTat from "@/pages/admin/DonHang/DonChuaHoanTat.vue";
import DanhSachSanPham from "@/pages/admin/SanPham/DanhSachSanPham.vue";
import DanhMucSanPham from "@/pages/admin/SanPham/DanhMucSanPham.vue";
import BangGia from "@/pages/admin/SanPham/BangGia.vue";
import KhachHang from "@/pages/admin/KhachHang/KhachHang.vue";
import NhomKhachHang from "@/pages/admin/KhachHang/NhomKhachHang.vue";
import TaoDonHang from "@/pages/admin/DonHang/TaoDonHang.vue";

const routes = [
    {
      path: "/",
      component: Home,
      name: "Home",
    },
    {
      path: "/danh-sach-san-pham",
      component: DanhSachTours,
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
    {
        path : "/admin",
        component: LayoutPageAdmin,
        meta : {
            layout : "admin"
        },
        children: [
            {
                path: "dashboard",
                component: Dashboard,
                name: "dashboard",
            },
            {
                path: "orders",
                component: DanhSachDonHang,
                name : 'orders',
            },
            {
                path: "orders/create",
                component: TaoDonHang,
                name : 'createOrder',
            },
            {
                path: "draft_orders",
                component: DonHangNhap,
                name : "draft_orders",
            },
            {
                path: "order_returns",
                component: TraHang,
                name : "order_returns",
            },
            {
                path: "checkouts",
                component: DonChuaHoanTat,
                name : "checkouts",
            },
            {
                path: "products",
                component: DanhSachSanPham,
                name : "products",
            },
            {
                path: "collections",
                component: DanhMucSanPham,
                name : "collections",
                meta : {
                    layout : "admin"
                },
            },
            {
                path: "catalogs",
                component: BangGia,
                name : "catalogs",
                meta : {
                    layout : "admin"
                },
            },
            {
                path: "customers",
                component: KhachHang,
                name : "customers",
                meta : {
                    layout : "admin"
                },
            },
            {
                path: "customer_groups",
                component: NhomKhachHang,
                name : "customer_groups",
                meta : {
                    layout : "admin"
                },
            },
        ],
        strict: true,
    }
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