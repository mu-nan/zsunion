<template>
  <div id="app">
    <el-container>
      <el-header class="header">
        <div class="title">
          <img src="../assets/index/LOGO.png" alt="" />
          <span>创建属于你的公会</span>
        </div>
        <div class="user_info">
          <img src="../assets/index/LOGO.png" alt="" />
          <span>{{ unionname }}</span>
        </div>
      </el-header>
      <el-main class="zhuti">
        <el-container>
          <el-aside>
            <el-menu :default-openeds="['1']" unique-opened router :default-active="defaultActive">
              <el-submenu :index="item.id+''" v-for="item in menulist" :key="item.id">
                <template slot="title">{{item.firstname}}</template>
                  <el-menu-item :index="subItem.path" v-for="subItem in item.child" :key="subItem.id" >{{subItem.name}}</el-menu-item>
              </el-submenu>
              <el-submenu index="4">
                <template slot="title">
                  <router-link to="/home/setting"> 设置中心 </router-link>
                </template>
              </el-submenu>
            </el-menu>
          </el-aside>

          <el-container>
            <el-header
              style="
                text-align: left;
                font-size: 12px;
                margin: 15px;
                border-radius: 6px;
                background: #fff;
              "
            >
              <span>王大锤</span>
            </el-header>
            <el-main style="margin: 15px; border-radius: 6px; background: #fff">
              <router-view></router-view>
            </el-main>
          </el-container>
        </el-container>
      </el-main>
      <el-footer>
        <div class="footer">
          <div class="foot_title">
            <span>联系我们</span>
            <span>公司简介</span>
            <span>免责声明</span>
          </div>
          <span
            >版权所有©2020-2023郑州寻山文化传媒有限公司豫ICP备1903259号</span
          >
        </div>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      defaultActive:'',
      menulist: [
        {
          firstname: "工会管理",
          id:1,
          child: [
            { name: "公会基本信息", id:101, path: "/home/Information" },
            { name: "公会成员", id:102, path: "/home/Member" },
            { name: "公会团队信息", id:103, path: "/home/Team" },
            { name: "公会管理员", id:104, path: "/home/Administrator" },
            { name: "成员贡献", id:105, path: "/home/Contribution" },
            { name: "本期公会数据", id:106, path: "/home/Data" },
            { name: "订单消息", id:107, path: "/home/Message" },
            { name: "公告管理", id:108, path: "/home/AnnouncementAdmin" },
            { name: "公会邀请", id:109, path: "/home/Invite" },
            { name: "公会等级", id:110, path: "/home/Level" },
          ],
        },
        {
          firstname: "财务中心",
          id:2,
          child: [
            { name: "账户管理", id:201, path: "/home/Admin" },
            { name: "聊天室返现", id:202, path: "/home/ChatMoney" },
            { name: "订单返现记录", id:203, path: "/home/RecommendPlayer" },
          ],
        },
        {
          firstname: "网站管理",
          id:3,
          child: [
            { name: "网站推荐陪玩", id:301, path: "/home/RecommendPlayer" },
            { name: "网站订单列表", id:302, path: "/home/OlderList" },
            { name: "网络订单数据", id:303, path: "/home/OlderData" },
            { name: "网络广告位配置", id:304, path: "/home/AD" },
          ],
        },
      ],
      unionname: "王大锤的公会",
    };
  },
  watch:{
    $route () {
      return this.getUrl()
    }
  },
  methods: {
    getUrl() {
     return this.$route.fullPath
    },
  },

  created() {
    this.defaultActive = this.getUrl();
    console.log(this.defaultActive)
  },
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
}

.title {
  margin: 5px 0px;
  display: inline-block;
}

.header span {
  border-left: 2px solid #dfdcdc;
  font-family: PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 36px;
  font-size: 26px;
  padding-left: 8px;
  margin-left: 8px;
}

.user_info {
  display: flex;
  justify-items: center;
}

.user_info span {
  border: 0px solid #000;
  font-size: 23px;
  line-height: 26px;
}
.user_info img {
  border-radius: 50%;
  height: 50%;
}

.zhuti {
  background: #f5f5f5;
}

.el-menu {
  border-right-width: 0px !important;
}

.el-aside {
  border-radius: 6px;
}

.footer {
  text-align: center;
}
.fooer span {
  font-size: 26px;
  font-family: PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 36px;
}
.foot_title span {
  margin: 0 8px;
}

.el-menu-item {
  border-radius: 24px 0px 0px 24px;
}
.el-menu-item:focus {
  background: #e93dfc;
  color: #ffffff;
  /* margin-left: -25px; */
}

.el-menu-item:hover {
  color: #e93dfc;
  background: #fff;
}

.el-menu-item.is-active {
  color: #fff;
  background: #e93dfc;
}

.el-submenu .el-menu-item {
  width: 80%;
}
.el-submenu__title {
  width: 80%;
}

a {
  text-decoration: none;
}
</style>