<template>
  <div id="app">
    公会邀约
    <el-table :data="tableData" stripe style="width: 100%">
      <el-table-column prop="uid" label="UID"> </el-table-column>
      <el-table-column prop="name" label="昵称"> </el-table-column>
      <el-table-column prop="isOnline" label="状态"> </el-table-column>
      <el-table-column prop="intiveTime" label="邀约时间"> </el-table-column>
      <el-table-column prop="endTime" label="同意时间/拒绝时间"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return{
       tableData: [
        {
          uid: 61952046,
          name: "王大锤",
          isOnline: "已签约",
          intiveTime:'2020-12-03 14:52:07',
          endTime:'2020-12-03 14:52:07'
        },
        {
          uid: 61952046,
          name: "王小锤",
          isOnline: "已签约",
          intiveTime:'2020-12-03 14:52:07',
          endTime:'2020-12-03 14:52:07'
        },
        {
          uid: 61952046,
          name: "王锤锤",
          isOnline: "已签约",
          intiveTime:'2020-12-03 14:52:07',
          endTime:'2020-12-03 14:52:07'
        },
        {
          uid: 61952046,
          name: "王一锤",
          isOnline: "已签约",
          intiveTime:'2020-12-03 14:52:07',
          endTime:'2020-12-03 14:52:07'
        },
        {
          uid: 61952046,
          name: "王铁锤",
          isOnline: "已签约",
          intiveTime:'2020-12-03 14:52:07',
          endTime:'2020-12-03 14:52:07'
        },
        {
          uid: 61952046,
          name: "王阿锤",
          isOnline: "已签约",
          intiveTime:'2020-12-03 14:52:07',
          endTime:'2020-12-03 14:52:07'
        },
        {
          uid: 61952046,
          name: "王铜锤",
          isOnline: "已签约",
          intiveTime:'2020-12-03 14:52:07',
          endTime:'2020-12-03 14:52:07'
        },
       ]
    }
  }
};
</script>

<style>
</style>