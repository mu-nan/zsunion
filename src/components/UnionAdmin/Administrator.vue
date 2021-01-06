<template>
  <div id="app">
    <el-table
      :data="tableData"
      stripe
      style="width: 100%"
      :header-cell-style="{ background: ' #EDEDED' }"
    >
      <el-table-column prop="adminName" label="管理员名称"> </el-table-column>
      <el-table-column prop="adminId" label="账号"> </el-table-column>
      <el-table-column prop="password" label="密码"> </el-table-column>
      <el-table-column prop="quanxian" label="权限"> </el-table-column>
      <el-table-column  label="状态" cell-click="isok()">
        <template>
        <el-switch v-model="zhuangtai" active-color="#FF00FF" inactive-color="#D6D4D4" > </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="短信提醒"> 
        <template>
        <el-switch v-model="isMessage" active-color="#FF00FF" inactive-color="#D6D4D4" change="isMessage"> </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="编辑">
        <img class="bianji" src="../../assets//bianji.png" alt="" />
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data () {
    return{
      zhuangtai:true,
      isMessage:false,
      tableData:[
        {adminName:'线上外宣管理',adminId:'619520465',password:'vgu21548',quanxian:'拉人，踢人，查看团队外宣林阿团信息和订单提醒'},
        {adminName:'外宣大鹏',adminId:'619520465',password:'vgu21548',quanxian:'拉人，踢人，查看团队外宣林阿团信息和订单提醒'},
        {adminName:'外宣大鹏',adminId:'619520465',password:'vgu21548',quanxian:'拉人，踢人，查看团队外宣林阿团信息和订单提醒'},
        {adminName:'外宣大鹏',adminId:'619520465',password:'vgu21548',quanxian:'拉人，踢人，查看团队外宣林阿团信息和订单提醒'},
        {adminName:'外宣大鹏',adminId:'619520465',password:'vgu21548',quanxian:'拉人，踢人，查看团队外宣林阿团信息和订单提醒'},
      ]
    }
  },
  methods:{
    isok(){
      alert(1)
    }
  }
};
</script>

<style scoped>
  .bianji{
    width: 20px;
    height: 25px;
  }
</style>