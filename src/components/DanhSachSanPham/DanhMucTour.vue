
<template>
    <div class="w-1/5 bg-white border border-color-3 p-3 rounded-2xl">
        <div class="sticky top-0">
            <div class="text-lg border-b-2 border-color-1 pb-1">Danh mục tour</div>
            <div>
                <el-collapse v-for="item in dataCate" :key="item.id">
                    <el-collapse-item :title="item.name" name="1">
                        <div v-for="cate in dataSubCate[item.id]" :key="cate.id">
                          {{ cate.name }}
                        </div>
                    </el-collapse-item>
                </el-collapse>
            </div>
          <div>
            <div class="text-base py-3 pb-1">Chọn mức giá</div>
            <el-checkbox-group v-model="filters.prices" @change="applyFilters">
              <el-checkbox :label="{ from: 0, to: 1000000 }">Giá dưới 1.000.000 đ</el-checkbox>
              <el-checkbox :label="{ from: 1000000, to: 3000000 }">1.000.000đ - 3.000.000đ</el-checkbox>
              <el-checkbox :label="{ from: 3000000, to: 5000000 }">3.000.000đ - 5.000.000đ</el-checkbox>
              <el-checkbox :label="{ from: 5000000, to: 7000000 }">5.000.000đ - 7.000.000đ</el-checkbox>
              <el-checkbox :label="{ from: 7000000, to: 9000000 }">7.000.000đ - 9.000.000đ</el-checkbox>
              <el-checkbox :label="{ from: 9000000, to: 0 }">Giá trên 9.000.000đ</el-checkbox>
            </el-checkbox-group>
          </div>

          <div>
            <div class="text-base py-3 pb-1">Điểm khởi hành</div>
            <el-checkbox-group v-model="filters.departures" @change="applyFilters">
              <el-checkbox label="Hà Nội" />
              <el-checkbox label="TP Hồ Chí Minh" />
              <el-checkbox label="Huế" />
              <el-checkbox label="Đà Nẵng" />
              <el-checkbox label="Bình Dương" />
            </el-checkbox-group>
          </div>

          <div>
            <div class="text-base py-3 pb-1">Điểm đến</div>
            <el-checkbox-group v-model="filters.destinations" @change="applyFilters">
              <el-checkbox label="Úc" />
              <el-checkbox label="Trung Quốc" />
              <el-checkbox label="Hàn Quốc" />
              <el-checkbox label="Nhật Bản" />
              <el-checkbox label="Singapore" />
            </el-checkbox-group>
          </div>
        </div>
    </div>
</template>

<script>
    import {getCategoryClient} from "@/service/client/tourCategoryService.js";
    import {getTours} from "@/service/client/tourService.js";

    export default {
      data(){
        return{
          filters: {
            categories: [],     // mảng cate_id
            prices: [],         // mảng giá (under_1m, 1-3m, ...)
            departures: [],     // mảng điểm khởi hành
            destinations: []    // mảng điểm đến
          },
          dataCate: [],
          dataSubCate : {}
        }
      },
      methods:{
        async loadCategory() {
          const result = await getCategoryClient({ subCategory: 0 });
          if (result) {
            this.dataCate = result;

            for (const cate of result) {
              await this.loadSubCategory(cate.id);
            }
          }
        },
        async loadSubCategory(cateId){
          const result = await getCategoryClient({ parentId: cateId });
          if (result) {
            this.dataSubCate[cateId] = result;
          }
        },
        applyFilters() {
          const { prices, categories, departures, destinations } = this.filters

          this.$emit("filter-change", {
            categories,
            departures,
            destinations,
            price_from: prices ? prices.from : 0,
            price_to: prices ? prices.to : 0
          })
        }
      },
      mounted() {
        this.loadCategory();
      }
    }
</script>