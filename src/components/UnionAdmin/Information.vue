<template>
  <div id="app">
    <div class="table">
      <div>
        <img src="../../assets/Information/gonghuiid.png" alt="" />
        公会ID：{{ info.id }}
      </div>
      <div>
        <img src="../../assets/Information/QQ.png" alt="" />
        公会QQ：{{ info.qq }}
      </div>
      <div>
        <img src="../../assets/Information/dingdan.png" alt="" />
        订单可得金额：{{ info.money }}
      </div>
      <div>
        <img src="../../assets/Information/liwu.png" alt="" />
        礼物可得金额：公会陪玩非聊天室礼物的{{ info.money2 }}%
      </div>
      <div>
        <img src="../../assets/Information/peiwan.png" alt="" />
        当前拥有陪玩数：{{ info.pop }}人
      </div>
      <div>
        <img src="../../assets/Information/kaitong.png" alt="" />
        是否有开通网站：{{ info.isOpen ? "无" : "是" }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      info: {
        id: 124578,
        qq: 124578578,
        money: "每两周一次的订单返现",
        money2: "10",
        pop: 1154,
        isOpen: true,
      },
    };
  },
};
</script>

<style scoped>
img{
  width:18px;
  height: 18px;
  margin-right:15px ;
}
.table div {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  /* justify-content: center; */
  justify-items: center;
  padding-left: 15px;
  height: 60px;
  font-size: 18px;
  font-family: PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 36px;
}
.table div:nth-child(even) {
  background: #f5f5f5;
}


</style>