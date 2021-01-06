<template>
<div id="app">
      聊天室返现
  <el-table :data="tableData" :header-cell-style="{background:'#E4E2E2',color:'#333333',textAlign:'center'}" :cell-style="{textAlign:'center'}" style="width: 100%">
    <el-table-column prop="roomid" label="房间ID" align="left"> </el-table-column>
    <el-table-column prop="roomname" label="房间昵称" align="center"> </el-table-column>
    <el-table-column prop="roommoney" label="房间返现比例及记录" align="right"> </el-table-column>
  </el-table>
  </div>
</template>
<script>
export default {
  data() {
      return {
        tableData: [{
          roomid: '180',
          roomname: '快乐不如陪我大大方方爱一场',
          roommoney: '点击查看'
        }, {
          roomid: '180',
          roomname: '快乐不如陪我大大方方爱一场',
          roommoney: '点击查看'
        }, {
          roomid: '180',
          roomname: '快乐不如陪我大大方方爱一场',
          roommoney: '点击查看'
        }, {
          roomid: '180',
          roomname: '快乐不如陪我大大方方爱一场',
          roommoney: '点击查看'
        },{
          roomid: '180',
          roomname: '快乐不如陪我大大方方爱一场',
          roommoney: '点击查看'
        }]
      }
    }
};
</script>

<style></style>
