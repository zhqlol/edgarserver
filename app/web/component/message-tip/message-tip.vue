<style lang="less" scoped>
@import "message-tip.less";
</style>

<template>
  <div class="message-con">
    <Poptip placement="bottom-end" width="400" transfer>
      <Badge :count="value">
        <Icon type="ios-bell-outline" :size="22"></Icon>
      </Badge>
      <div class="message-con-content" slot="content">
        <Menu mode="horizontal" active-name="1" @on-select="activeKeyChange">
          <MenuItem name="1">
            {{tabLabel.notification}}
          </MenuItem>
          <MenuItem name="2">
            {{tabLabel.backlog}}
          </MenuItem>
        </Menu>
        <div v-if="activeKey === '1'">
          <edgar-list title="系统通知" content="恭喜您通过身份验证">
          </edgar-list>
          <edgar-list title="系统通知" content="恭喜您的爱车已经通过审批">
          </edgar-list>
        </div>
        <div v-if="activeKey === '2'">
          <edgar-list title="任务1" content="这个任务要赶快完成">
            <Tag slot="extra" color="red">马上到期</Tag>
          </edgar-list>
        </div>
        <Row class="message-con-btn-con">
          <Col span="12"><Button long type="text">查看全部</Button></Col>
          <Col span="12"><Button long type="text">清空消息</Button></Col>
        </Row>
      </div>
    </Poptip>
  </div>
</template>

<script>
import util from 'framework/utils/utils.js';
import EdgarList from 'component/edgar-list';
export default {
  name: 'messageTip',
  data() {
    return {
      tabLabel: {
        notification: '通知（2）',
        backlog: '待办（1）'
      },
      activeKey: '1'
    };
  },
  components: {
    EdgarList
  },
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  methods: {
    showMessage() {
      // util.openNewPage(this, 'message_index');
      // this.$router.push({
      //   name: 'message_index'
      // });
    },
    activeKeyChange(name) {
      this.activeKey = name;
    }
  }
};
</script>
