<template>
  <div class="bg-white mt-4 rounded-md relative overflow-clip" style="box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 3px 1px, rgba(0, 0, 0, 0.15) 0px 1px 2px 0px;
    outline: transparent solid 1px;">
    <div class="pt-5 px-5">
      <h2 class="text-base font-550">Biểu đồ doanh thu</h2>
    </div>
    <div class="p-5">
      <div class="chart-container">
        <highcharts :options="chartOptions" />
      </div>
    </div>
  </div>
</template>

<script>
import Highcharts from 'highcharts'
import HighchartsVue from 'highcharts-vue'

// Đảm bảo bạn đã cài đặt HighchartsVue vào Vue
export default {
  name: 'ChartComponent',
  components: {
    highcharts: HighchartsVue.component
  },
  data() {
    return {
      chartOptions: {
        chart: {
          type: 'column',
          backgroundColor: 'transparent',
          height: 400,
          width: 666
        },
        title: {
          text: 'Sample Chart'
        },
        xAxis: {
          categories: ['Category 1', 'Category 2', 'Category 3', 'Category 4', 'Category 5'],
          title: {
            text: null
          }
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Value'
          },
          labels: {
            overflow: 'justify'
          }
        },
        series: [
          {
            name: 'Series 1',
            data: [1, 2, 3, 4, 5],
            color: '#0088FF'
          },
          {
            name: 'Series 2',
            data: [5, 4, 3, 2, 1],
            color: '#99CFFF'
          }
        ],
        plotOptions: {
          column: {
            borderColor: '#ffffff',
            borderWidth: 1
          }
        },
        credits: {
          enabled: false
        }
      }
    }
  }
}
</script>
<style scoped>
.chart-container {
  width: 100%;
  height: 100%;
}
</style>