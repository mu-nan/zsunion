<template>
  <div id="app">
    <template>
      <el-table :data="tableData" stripe style="width: 100%">
        <el-table-column prop="uid" label="UID"> </el-table-column>
        <el-table-column prop="name" label="昵称"> </el-table-column>
        <el-table-column prop="isOnline" label="状态"> </el-table-column>
        <el-table-column prop="sex" label="性别"> </el-table-column>
        <el-table-column prop="qq" label="QQ"> </el-table-column>
        <el-table-column prop="divide" label="公会礼物分成"> </el-table-column>
        <el-table-column prop="team" label="所属团队"> </el-table-column>
        <el-table-column fixed="right" label="操作" width="120">
          <template slot-scope="scope">
            <el-button  @click.native.prevent="deleteRow(scope.$index, tableData)" type="text" icon="el-icon-my-jieyue"> 解约 </el-button>
          </template>
        </el-table-column>
      </el-table>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          uid: 61952046,
          name: "王大锤",
          isOnline: "订单进行中",
          sex: 0,
          qq: 2154643557,
          divide: "10%",
          team: "无团",
        },
        {
          uid: 41567425,
          name: "王小锤",
          isOnline: "离线",
          sex: 1,
          qq: 45615344,
          divide: "10%",
          team: "无团",
        },
        {
          uid: 1567434465,
          name: "王锤锤",
          isOnline: "在线",
          sex: 0,
          qq: 2154643557,
          divide: "20%",
          team: "锤子团队",
        },
        {
          uid: 456123416,
          name: "王一锤",
          isOnline: "订单进行中",
          sex: 1,
          qq: 5765412,
          divide: "10%",
          team: "无团",
        },
        {
          uid: 43216113,
          name: "王锤锤",
          isOnline: "离线",
          sex: 1,
          qq: 698652141,
          divide: "10%",
          team: "无团",
        },
        {
          uid: 65432567,
          name: "王铁锤",
          isOnline: "订单进行中",
          sex: 1,
          qq: 86211544,
          divide: "10%",
          team: "锤子团队",
        },
      ],
    };
  },
  methods: {
      deleteRow(index, rows) {
        rows.splice(index, 1);
      }
    },
};
</script>

<style scoped>
.el-icon-my-jieyue {
  background: url("../../assets/member/jieyue.png") center no-repeat;
}
.el-icon-my-jieyue:before {
  content: "替";
  font-size: 19px;
  visibility: hidden;
}
.el-icon-my-jieyue {
  font-size: 19px;
}
.el-icon-my-jieyue:before {
  content: "\e611";
}
.el-button {
  background: #e0dfdf !important;
  border-radius: 18px !important;
  color: #777777 !important;
  padding: 5px 15px !important;
}
</style>