import Vue from 'vue'
import VueRouter from 'vue-router'
// import { component } from 'vue/types/umd'
import Login from '../components/login.vue'
import Home from '../components/home.vue'
import Admin from '../components/FinanceCenter/Admin.vue'
import ChatMoney from '../components/FinanceCenter/ChatMoney.vue'
import HistoryMoney from '../components/FinanceCenter/HistoryMoney.vue'
import Setting from '../components/Setting/set.vue'
import Administrator from '../components/UnionAdmin/Administrator.vue'
import AnnouncementAdmin from '../components/UnionAdmin/AnnouncementAdmin.vue'
import Contribution from '../components/UnionAdmin/Contribution.vue'
import Data from '../components/UnionAdmin/Data.vue'
import Information from '../components/UnionAdmin/Information.vue'
import Invite from '../components/UnionAdmin/Invite.vue'
import Level from '../components/UnionAdmin/Level.vue'
import Member from '../components/UnionAdmin/Member.vue'
import Message from '../components/UnionAdmin/Message.vue'
import Team from '../components/UnionAdmin/Team.vue'
import Advertising from '../components/WebAdmin/AD.vue'
import OlderData from '../components/WebAdmin/OlderData.vue'
import OlderList from '../components/WebAdmin/OlderList.vue'
import RecommendPlayer from '../components/WebAdmin/RecommendPlayer.vue'
import abc from '../1111.vue'





Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/login'
  },
  {
   path:'/login',
   component:Login
  },
  {
    path:'/111',
    component:abc
   },
  {
    path:'/home',
    component:Home,
    redirect:'/home/information',
    children:[
      {path:'Admin',component:Admin},
      {path:'ChatMoney',component:ChatMoney},
      {path:'HistoryMoney',component:HistoryMoney},
      {path:'Setting',component:Setting},
      {path:'Administrator',component:Administrator},
      {path:'AnnouncementAdmin',component:AnnouncementAdmin},
      {path:'Data',component:Data},
      {path:'Contribution',component:Contribution},
      {path:'Invite',component:Invite},
      {path:'Information',component:Information},
      {path:'Level',component:Level},
      {path:'Member',component:Member},
      {path:'Message',component:Message},
      {path:'Team',component:Team},
      {path:'AD',component:Advertising},
      {path:'OlderData',component:OlderData},
      {path:'OlderList',component:OlderList},
      {path:'RecommendPlayer',component:RecommendPlayer}
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
