<style lang="less">
@import "./dashboard.less";
</style>
<template>
  <div class="dashboard-con">
    <Row :gutter="10">
      <Col span="16">
        <Card class="dashboard-con-idcard">
          <div class="dashboard-con-idcard-content">
            <div class="dashboard-con-idcard-content-avator">
              <img :src="avatorPath" />
            </div>
            <div class="dashboard-con-idcard-content-hello">
              <span>早安，Edgar，祝你开心每一天！</span>
            </div>
          </div>
        </Card>
        <Card class="dashboard-con-barchart" title="发油量">
          <div class="dashboard-con-barchart-content">
            <ec-basebar parentSelector=".dashboard-con-barchart-content" />
          </div>
        </Card>
        <Card class="dashboard-con-mapchart" title="用户分布">
          <div class="dashboard-con-mapchart-content">
            <ec-basemap parentSelector=".dashboard-con-mapchart-content" />
          </div>
        </Card>
      </Col>
      <Col span="8">
        <Card class="dashboard-con-fastmenu">
          <p slot="title">
            <Icon type="ios-film-outline"></Icon>
            便捷导航
          </p>
          <span slot="extra" @click="changeFastMenu">
            <Button v-if="!fastMenu.closable" icon="edit" type="text">编辑</Button>
            <Button v-if="fastMenu.closable" icon="close" type="text">取消</Button>
            <Button v-if="fastMenu.closable" icon="checkmark" type="text">保存</Button>
          </span>
          <div class="dashboard-con-fastmenu-content">
            <div class="dashboard-con-fastmenu-content-items" v-if="!item.hidden" v-for="(item, $index) in fastMenu.list" @click="fastgo($event, $index)">
              <Row type="flex" justify="space-between" align="middle">
                <Col span="18" style="height: 24px;"><span :title="item.name">{{item.name}}</span></Col>
                <Col span="6" v-show="fastMenu.closable">
                  <Icon size="20" type="ios-close-empty" @click.self="handleClose($event, $index)" />
                </Col>
              </Row>
            </div>
            <div class="dashboard-con-fastmenu-content-btn">
              <Button type="ghost" icon="plus-round" size="small" @click="handleAdd">添加</Button>
            </div>
          </div>
        </Card>
        <Card class="dashboard-con-dynamic" title="动态">
          <div class="dashboard-con-dynamic-content">
            <edgar-list title="23****33 注册了 VGT" content="几秒前"></edgar-list>
            <edgar-list title="21****12 注册了 VGT" content="几秒前"></edgar-list>
            <edgar-list title="21****45 注册了 VGT" content="几秒前"></edgar-list>
            <edgar-list title="21****14 完成了 实名认证，请及时审批" content="5分钟前"></edgar-list>
            <edgar-list title="21****33 注册了爱车，请及时审批" content="5分钟前"></edgar-list>
          </div>
        </Card>
        <Card class="dashboard-con-linechart" title="用户注册量">
          <div class="dashboard-con-linechart-content">
            <ec-baseline parentSelector=".dashboard-con-linechart-content" />
          </div>
        </Card>
        <Card class="dashboard-con-piechart" title="实名认证比例">
          <div class="dashboard-con-piechart-content">
            <ec-basepie parentSelector=".dashboard-con-piechart-content" />
          </div>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import ecBasebar from 'component/echarts/base-bar.vue';
import ecBasepie from 'component/echarts/base-pie.vue';
import ecBaseline from 'component/echarts/base-line.vue';
import ecBasemap from 'component/echarts/base-map.vue';
import EdgarList from 'component/edgar-list';

export default {
  name: 'home',
  components: {
    ecBasebar,
    ecBasepie,
    ecBaseline,
    ecBasemap,
    EdgarList
  },
  data() {
    return {
      fastMenu: {
        list: [{
          name: '菜单1',
          href: 'login',
        }, {
          name: '菜单2',
          href: 'register'
        }, {
          name: '菜单3333333333333333',
          href: '404'
        }, {
          name: '菜单4',
          href: '403'
        }, {
          name: '菜单5',
          href: '500'
        }, {
          name: '菜单6',
          href: '#'
        }],
        closable: false
      }
    };
  },
  computed: {
    avatorPath() {
      return localStorage.avatorImgPath;
    }
  },
  methods: {
    handleAdd() {
      //
    },
    changeFastMenu() {
      this.fastMenu.closable = !this.fastMenu.closable;
    },
    handleClose(event, idx) {
      event.preventDefault();
      event.stopPropagation();
      this.fastMenu.list[idx].hidden = true;
    },
    fastgo(event, idx) {
      event.preventDefault();
      event.stopPropagation();
      if (this.fastMenu.closable) {
        return;
      }
      this.$router.push({ name: this.fastMenu.list[idx].href });
    }
  }
};
</script>
