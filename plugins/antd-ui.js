import Vue from 'vue'
import Antd from 'ant-design-vue/lib'
import InfiniteScroll from "@/components/infinite-scroll";

Vue.use(Antd, {
  message: {
    top: '10%'
  },
  top: '10%'
})
Vue.use(InfiniteScroll);
