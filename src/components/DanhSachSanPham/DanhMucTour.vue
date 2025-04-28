
<template>
    <div class="w-1/5 bg-white border border-color-3 p-3 rounded-2xl">
        <div class="sticky top-0">
            <div class="text-lg border-b-2 border-color-1 pb-1">Danh mục tour</div>
            <div>
                <el-collapse>
                    <el-collapse-item title="Tour trong nước" name="1">
                        <div>
                            Phú Quốc
                        </div>
                        <div>
                            Nha Trang
                        </div>
                        <div>Đà Nẵng</div>
                    </el-collapse-item>
                </el-collapse>
                <el-collapse>
                    <el-collapse-item title="Tour nước ngoài" name="2">
                        <div>
                            Hàn Quốc
                        </div>
                        <div>
                            Trung Quốc
                        </div>
                        <div>Thái Lan</div>
                    </el-collapse-item>
                </el-collapse>
            </div>
            <div>
                <div class="text-base py-3 pb-1">Chọn mức giá</div>
                <div>
                    <el-checkbox v-model="checked1" label="Giá dưới 1.000.000 đ" />
                    <el-checkbox v-model="checked2" label="1.000.000đ - 3.000.000đ" />
                    <el-checkbox v-model="checked3" label=" 3.000.000đ - 5.000.000đ" />
                    <el-checkbox v-model="checked4" label=" 5.000.000đ - 7.000.000đ" />
                    <el-checkbox v-model="checked5" label="7.000.000đ - 9.000.000đ" />
                    <el-checkbox v-model="checked6" label="Giá trên 9.000.000đ" />
                </div>
            </div>
            <div>
                <div class="text-base py-3 pb-1">Điểm khởi hành</div>
                <div>
                    <el-checkbox v-model="checked1" label="Hà Nội" />
                    <el-checkbox v-model="checked2" label="TP Hồ Chí Minh" />
                    <el-checkbox v-model="checked3" label="Huế" />
                    <el-checkbox v-model="checked4" label="Đà Nẵng" />
                    <el-checkbox v-model="checked5" label="Bình Dương" />
                </div>
            </div>
            <div>
                <div class="text-base py-3 pb-1">Điểm đến</div>
                <div>
                    <el-checkbox v-model="checked1" label="Úc" />
                    <el-checkbox v-model="checked2" label="Trung Quốc" />
                    <el-checkbox v-model="checked3" label="Hàn Quốc" />
                    <el-checkbox v-model="checked4" label="Nhật Bản" />
                    <el-checkbox v-model="checked5" label="Singapore" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue'


    const checked1 = ref(false)
    const checked2 = ref(false)
    const checked3 = ref(false)
    const checked4 = ref(false)
    const checked5 = ref(false)
    const checked6 = ref(false)
</script>