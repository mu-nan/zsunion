<template>
  <div class="menu">
    <div :class="index==menuIndex?'active':'menu-box'" v-for="(item,index) in menu" :key="index" @click="setMenu(index)">
      <router-link :to="item.path"> <span>{{item.name}}</span></router-link>
    </div>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      menu: [
        {
          name: "水质预报",
          sort: 1,
          path: "/decisionSupport/waterQualityForecast",
        },
        {
          name: "水质评价",
          sort: 2,
          path: "/decisionSupport/graphAssociation",
        },
        {
          name: "防洪预报",
          sort: 3,
          path: "/decisionSupport/floodControlForecast",
        },
        {
          name: "水量调度",
          sort: 4,
          path: "/decisionSupport/waterDispatching",
        },
        // {
        //   name: "产汇流",
        //   sort: 5,
        //   path:  "/decisionSupport/graphAssociationddd",
        // },
        {
          name: "决策分析",
          sort: 6,
          path: "/decisionSupport/decisionAnalysis",
        },
        {
          name: "应急处置",
          sort: 7,
          path: "/decisionSupport/planaking",
        },
        // {
        //   name: "应急处置",
        //   sort: 7,
        //   path: "/",
        //   children: [
        //     {
        //       name: "预案模板",
        //       path: "/decisionSupport/planaking",
        //     },
        //     {
        //       name: "方案制定",
        //       path: "/decisionSupport/planMaking",
        //     },
        //     {
        //       name: "方案执行指挥",
        //       path: "/decisionSupport/planeDelivery",
        //     },
        //   ],
        // },
      ], //菜单数组
      menuIndex: 0, //菜单下标
    };
  },
　　// 这里解决刷新高亮位置改变的代码
  mounted(){
    this.menu.some((item,i)=>{
      if(item.path==this.$route.path){
        this.menuIndex = item.sort-1;
      }
    })
  },
 
 
  methods: {
    //菜单选项卡下标切换
    setMenu(params) {
      this.menuIndex = params;
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>