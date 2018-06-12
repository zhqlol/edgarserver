<style lang="less">
@import "./register.less";
</style>

<template>
  <div class="regist" @keydown.enter="handleSubmit">
    <div class="regist-con">
      <Card class="regist-con-card" hoverable>
        <div class="form-con">
          <Form ref="registForm" :model="form">
            <FormItem>
              <span class="regist-con-title">欢迎注册EdgarServer</span>
            </FormItem>
            <FormItem prop="username">
              <Input v-model="form.username" clearable placeholder='设置用户名'>
                <Icon slot="prepend" size="18" type="person"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="password">
              <Input type="password" v-model="form.password" clearable placeholder="设置你的密码">
                <Icon slot="prepend" size="18" type="locked"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="confirmPassword">
              <Input type="password" v-model="form.confirmPassword" clearable placeholder="请再次输入你的密码">
                <Icon slot="prepend" size="18" type="locked"></Icon>
              </Input>
            </FormItem>
            <FormItem prop="phone">
              <Input v-model="form.phone" clearable placeholder='请输入手机号码'>
                <Icon slot="prepend" size="22" type="ipad"></Icon>
              </Input>
            </FormItem>
            <FormItem>
              <aliyun-capcha appkey='FFFF0N000000000061C8' scene='nc_message' width="100%" v-on:callback='onCaptcha'></aliyun-capcha>
            </FormItem>
            <FormItem prop="mCaptcha">
              <Row type="flex" justify="space-between">
                <Col :span="17">
                  <Input v-model="form.mCaptcha" clearable placeholder="请输入验证码" :disabled="aliCaptcha.csessionid === ''">
                    <EIcon slot="prepend" size="14" type="safety"></EIcon>
                  </Input>
                </Col>
                <Col>
                  <Button type="primary" :disabled="aliCaptcha.csessionid === ''">发送验证码</Button>
                </Col>
              </Row>
            </FormItem>
            <FormItem style="margin-bottom: 5px;">
              <Button @click="handleSubmit" type="primary" long>注册</Button>
            </FormItem>
            <FormItem style="margin-bottom: 0px;">
              <Row type="flex" justify="end">
                <Col>
                  <Button type="text" @click="login">已有账号？登录 ></Button>
                </Col>
              </Row>
            </FormItem>
          </Form>
        </div>
      </Card>
    </div>
  </div>
</template>

<script>
import AliyunCaptcha from '../../../../component/alicaptcha/AliyunCaptcha.vue';
const uri = 'http://127.0.0.1:7001';
export default {
  data() {
    return {
      form: {
        username: '',
        password: '',
        confirmPassword: '',
        phone: '',
        mCaptcha: ''
      },
      aliCaptcha: {
        csessionid: '',
        sig: '',
        token: '',
        scene: '',
        nc: ''
      }
    };
  },
  components: {
    'aliyun-capcha': AliyunCaptcha
  },
  methods: {
    onCaptcha(data) {
      this.aliCaptcha.csessionid = data.csessionid;
      this.aliCaptcha.sig = data.sig;
      this.aliCaptcha.token = data.token;
      this.aliCaptcha.scene = data.scene;
      this.aliCaptcha.nc = data.nc;
    },
    handleSubmit(e) {
      e.preventDefault();
      this.$Message.info('注册功能暂未开放');
    },
    login() {
      this.$router.push({ name: 'login' });
    }
  },
  mounted() {
    if (document.querySelector('.nc_scale')) {
      /* 滑块高度 */
      document.querySelector('.nc_scale span').style.height = '34px';
      /* 滑过时的背景色 */
      document.querySelector('.nc_scale div.nc_bg').style.background = '#00C1DE';
    }
  }
};
</script>
