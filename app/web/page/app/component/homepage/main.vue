<style lang="less" scoped>
@import "./main.less";
</style>
<template>
  <div class="main" :class="{'main-hide-text': shrink}">
    <div class="sidebar-menu-con" :style="{width: shrink?'40px':'200px', overflow: shrink ? 'visible' : 'auto'}">
      <shrinkable-menu :shrink="shrink" :open-names="openedSubmenuArr" :menu-list="menuList">
        <div slot="top" class="logo-con">
          <span v-show="!shrink" key="max-logo">Edgar Server</span>
          <span v-show="shrink" key="min-logo">E</span>
        </div>
      </shrinkable-menu>
    </div>
    <div class="main-header-con" :style="{paddingLeft: shrink?'40px':'200px'}">
      <div class="main-header">
        <div class="navicon-con">
          <div class="navicon-con-d" @click="toggleClick">
            <EIcon v-if="shrink" size="25" type="menufold-right"></EIcon>
            <EIcon v-else size="25" type="menufold"></EIcon>
          </div>
        </div>
        <div class="header-middle-con">
          <div class="main-breadcrumb">
            <breadcrumb-nav :currentPath="currentPath"></breadcrumb-nav>
          </div>
        </div>
        <div class="header-avator-con">
          <full-screen v-model="isFullScreen" @on-change="fullscreenChange"></full-screen>
          <lock-screen></lock-screen>
          <message-tip v-model="mesCount"></message-tip>
          <div class="user-dropdown-menu-con">
            <Row type="flex" justify="end" align="middle" class="user-dropdown-innercon">
              <Dropdown transfer>
                <div>
                  <Avatar :src="avatorPath" style="background: #619fe7;"></Avatar>
                  <span class="main-user-name">{{ userName }}</span>
                </div>
                <DropdownMenu slot="list">
                  <DropdownItem name="ownSpace">
                    <Icon size="19" type="ios-person-outline"></Icon>
                    <span style="margin-left: 5px;">个人中心</span>
                  </DropdownItem>
                  <DropdownItem name="loginout" divided>
                    <Icon size="16" type="log-out"></Icon>
                    <span style="margin-left: 5px;">退出登录</span>
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
            </Row>
          </div>
        </div>
      </div>
      <div class="tags-con">
          <tags-page-opened :pageTagsList="pageTagsList"></tags-page-opened>
      </div>
    </div>
    <div class="single-page-con" :style="{left: shrink?'40px':'200px'}">
        <!-- <div class="single-page"> -->
        <keep-alive :include="cachePage">
            <router-view></router-view>
        </keep-alive>
        <!-- </div> -->
    </div>
  </div>
</template>
<script>
import shrinkableMenu from 'component/shrinkable-menu/shrinkable-menu.vue';
import tagsPageOpened from 'component/tags/tags-page-opened.vue';
import breadcrumbNav from 'component/breadcrumb/breadcrumb-nav.vue';
import fullScreen from 'component/fullscreen/fullscreen.vue';
import lockScreen from 'component/lockscreen/lockscreen.vue';
import messageTip from 'component/message-tip/message-tip.vue';
import Cookies from 'js-cookie';
import util from 'framework/utils/utils.js';

export default {
  components: {
    shrinkableMenu,
    tagsPageOpened,
    breadcrumbNav,
    fullScreen,
    lockScreen,
    messageTip
  },
  data() {
    return {
      shrink: true,
      userName: '',
      isFullScreen: false,
      openedSubmenuArr: this.$store.state.app.openedSubmenuArr
    };
  },
  computed: {
    menuList() {
      return this.$store.state.app.menuList;
    },
    pageTagsList() {
      return this.$store.state.app.pageOpenedList; // 打开的页面的页面对象
    },
    currentPath() {
      return this.$store.state.app.currentPath; // 当前面包屑数组
    },
    avatorPath() {
      return localStorage.avatorImgPath;
    },
    cachePage() {
      return this.$store.state.app.cachePage;
    },
    lang() {
      return this.$store.state.app.lang;
    },
    menuTheme() {
      return this.$store.state.app.menuTheme;
    },
    mesCount() {
      return this.$store.state.app.messageCount;
    }
  },
  methods: {
    init() {
      const pathArr = util.setCurrentPath(this, this.$route.name);
      this.$store.commit('updateMenulist');
      if (pathArr.length >= 2) {
        this.$store.commit('addOpenSubmenu', pathArr[1].name);
      }
      this.userName = Cookies.get('edgar-user');
      const messageCount = 3;
      this.messageCount = messageCount.toString();
      this.checkTag(this.$route.name);
      this.$store.commit('setMessageCount', 3);
    },
    toggleClick() {
      this.shrink = !this.shrink;
    },
    handleClickUserDropdown(name) {
      if (name === 'ownSpace') {
        util.openNewPage(this, 'ownspace_index');
        this.$router.push({
          name: 'ownspace_index'
        });
      } else if (name === 'loginout') {
        // 退出登录
        this.$axios.post('/logout').then(res => {
          this.$store.commit('logout', this);
          this.$store.commit('clearOpenedSubmenu');
          this.$router.push({
            name: 'login'
          });
        });
      }
    },
    checkTag(name) {
      const openpageHasTag = this.pageTagsList.some(item => {
        if (item.name === name) {
          return true;
        }
        return false;
      });
      if (!openpageHasTag) { //  解决关闭当前标签后再点击回退按钮会退到当前页时没有标签的问题
        util.openNewPage(this, name, this.$route.params || {}, this.$route.query || {});
      }
    },
    fullscreenChange(isFullScreen) {
      // console.log(isFullScreen);
    }
  },
  watch: {
    $route(to) {
      this.$store.commit('setCurrentPageName', to.name);
      const pathArr = util.setCurrentPath(this, to.name);
      if (pathArr.length > 2) {
        this.$store.commit('addOpenSubmenu', pathArr[1].name);
      }
      this.checkTag(to.name);
      localStorage.currentPageName = to.name;
    },
    lang() {
      util.setCurrentPath(this, this.$route.name); // 在切换语言时用于刷新面包屑
    }
  },
  mounted() {
    this.init();
  },
  created() {
    // 显示打开的页面的列表
    this.$store.commit('setOpenedList');
  }
};
</script>
