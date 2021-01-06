<template>
  <div id="app">
    <el-row :gutter="0">
      <el-col :span="19" :offset="0">
        <el-row :gutter="20" style="margin-bottom:15px">
          <el-col :span="8" :offset="0">
            <span>团队</span>
            <el-select v-model="team" clearable placeholder="请选择" size="small">
              <el-option
                v-for="item in options"
                :key="item.team"
                :label="item.label"
                :value="item.team"
              >
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="8" :offset="0">
            <span>选择时间</span>
            <div>
              <el-date-picker class="time" v-model="date" type="date" placeholder="选择日期" size="small">
              </el-date-picker>
            </div>
          </el-col>
          <el-col :span="8" :offset="0">
            <span>陪玩UID</span>
            <el-input placeholder="请输入UID" v-model="uid" clearable size="small">
            </el-input>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="8" :offset="0">
            <div class="money1 money">
              <p>订单金额</p>
              <p>123456789元</p>
            </div>
          </el-col>
          <el-col :span="8" :offset="0">
            <div class="money2 money">
              <p>礼物总额</p>
              <p>215489元</p>
            </div>
          </el-col>
          <el-col :span="8" :offset="0">
            <div class="money3 money">
              <p>公会礼物抽成总额</p>
              <p>2155631元</p>
            </div>
          </el-col>
        </el-row>
      </el-col>
      <el-col :span="5" :offset="0">
        <el-button size="default"> 确定</el-button>
      </el-col>
    </el-row>

    <el-table :data="tableData" border stripe>
      <el-table-column prop="uid" label="UID"></el-table-column>
      <el-table-column prop="name" label="昵称"></el-table-column>
      <el-table-column prop="zhuangtai" label="状态"></el-table-column>
      <el-table-column prop="count" label="完成订单数量"></el-table-column>
      <el-table-column prop="count" label=""></el-table-column>
    </el-table>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      uid: "",
      date: "",
      team: "",
      tableData:[],
      options: [
        {
          team: "1",
          label: "王大锤团队",
        },
        {
          team: "2",
          label: "王小锤团队",
        },
        {
          team: "3",
          label: "王铁锤团队",
        },
        {
          team: "4",
          label: "王铜锤团队",
        },
      ],
    };
  },
};
</script>

<style scoped>
.time{
  widows: 50%;
}

.money p {
  margin:0px;
}

.money {
  width: 80%;
  font-size: 20px;
  font-family: PingFang SC;
  font-weight: 500;
  color: #ffffff;
  line-height: 36px;
  margin: 0 auto;
  text-align: center;
}
.money1 {
  background: linear-gradient(90deg, #f35c6d 0%, #f76a90 100%);
  border-radius: 8px;
}
.money2 {
  background: linear-gradient(90deg, #f1a551 0%, #f3c669 100%);
  border-radius: 8px;
}
.money3 {
  background: linear-gradient(90deg, #a36dc5 0%, #8865d1 100%);
  border-radius: 8px;
}
</style>