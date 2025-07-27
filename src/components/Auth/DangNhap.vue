<template>
    <BreadCrumb />
    <div class="flex justify-center items-center py-10 login">
        <div class="p-6 border border-color-3 text-center rounded-xl w-[400px]">
            <div class="text-2xl uppercase font-semibold">Đăng nhập</div>
            <div class="mt-2">Nếu bạn chưa có tài khoản, <RouterLink :to="{ name : 'dang-ki'}" class="text-color-1"> đăng ký tại đây</RouterLink></div>

            <div class="my-5">
                <el-input
                    v-model="dataSent.username"
                    class=""
                    size="large"
                    placeholder="Username"
                />
                <el-input
                    v-model="dataSent.password"
                    class=" mt-4"
                    size="large"
                    type="password"
                    placeholder="Mật khẩu"
                />
                <button @click="login" class="px-5 h-11 bg-color-1 w-full text-white border border-color-1 rounded-lg text-base hover:text-color-1
                    hover:bg-white max-md:w-full mt-5">Đăng nhập</button>

                <div class="mt-5">
                    <div>Quên mật khẩu</div>
                    <el-input
                        v-model="dataSent.password"
                        class="mt-10"
                        size="large"
                        placeholder="Email"
                    />
                    <button class="px-5 h-11 bg-color-1 w-full text-white border border-color-1 rounded-lg text-base hover:text-color-1  
                    hover:bg-white max-md:w-full mt-5">Lấy lại mật khẩu</button>
                </div>
                <div class="mt-5">
                    <div>Hoặc đăng nhập bằng</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BreadCrumb from "@/components/DanhSachSanPham/BreadCrumb.vue";
import Cookies from 'js-cookie';
import {login} from "@/service/authService.js";
    export default {
      components:{
        BreadCrumb
      },
      data(){
        return{
          dataSent:{
            username : null,
            password : null
          }
        }
      },
      methods:{
        async login(){
          try {
            const result = await login(this.dataSent);
            if(result.status === 200 && result.token){
              Cookies.set("token",result.token);

              const userRole = result.role;
              if (userRole === 'ADMIN' || userRole === 'STAFF') {
                this.$router.push({ name : 'dashboard'});
              } else {
                this.$router.push({ name : 'Home'});
              }
            }else {
              alert(result.description || "Login failed");
            }
          }catch (e) {
            console.log(e)
          }
        }
      }
    }
</script>