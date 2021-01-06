<template>
  <div id="app">
    <div>
      选择时间：
      <el-date-picker
        v-model="value"
        type="daterange"
        align="right"
        unlink-panels
        range-separator="--"
        start-placeholder="选择开始日期"
        end-placeholder="选择结束日期"
        :picker-options="pickerOptions"
      >
      </el-date-picker>
      <el-button size="default" @click="query()">确定</el-button>
    </div>
    <el-table :data="tableData" stripe style="width: 100%;" :header-cell-style="{background:' #EDEDED'}" empty-text=" ">
        <el-table-column prop="teamName" label="团队名称"> </el-table-column>
        <el-table-column prop="pop" label="团人数"> </el-table-column>
        <el-table-column prop="money" label="团订单金额"> </el-table-column>
        <el-table-column prop="gift" label="团礼物金额"> </el-table-column>
        <el-table-column prop="order" label="取消订单数"> </el-table-column>
        <el-table-column prop="cancel" label="撤单率"> </el-table-column>
        <el-table-column prop="info" label="查看团的信息"> </el-table-column>
        <el-table-column prop="addPop" label="添加团员"> </el-table-column>
    </el-table>
    <div class="empty" v-if="tableData != []">
      <img src="../../assets/wushuju.png" alt="">
      <p>暂时没有数据哦~</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData:[],
      pickerOptions: {
        shortcuts: [
          {
            text: "最近一周",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近一个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit("pick", [start, end]);
            },
          },
          {
            text: "最近三个月",
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },

      value: "",
    };
  },
  methods:{
    query(){
      console.log(this.value)
    }
  }
};
</script>

<style scoped>
.el-button {
  background: #ff00ff;
  border-radius: 6px;
  border: 0px solid;
  font-size: 16px;
  font-family: PingFang SC;
  font-weight: 500;
  color: #ffffff;
  margin-left: 15px;
}
.el-button:focus, .el-button:hover{
    background: #ff00ff;
  color: #ffffff;
}

.el-input__inner{
  border: 0px;
}
.el-date-editor .el-range-input{
 background: #eaeaea;
}

.el-table::before{
  width: 0px;
}
.empty{
  text-align: center;
}
</style>