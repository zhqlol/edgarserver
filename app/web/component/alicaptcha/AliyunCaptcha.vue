<template>
    <div> 
        <div id="_umfp" style="display:inline;width:1px;height:1px;overflow:hidden"></div>  
        <div class="ln">
            <div v-bind:id="dynamicId"></div>
        </div>  
    </div>
</template>

<script>
import Vue from 'vue';
import VueScript2 from 'vue-script2';

function randomCode(length) {
  let str = '';
  for (; str.length < length; str += Math.random().toString(36).substr(2)) {
    // init
  }
  return str.substr(0, length);
}

export default {
  name: 'vue-aliyun-captcha',
  props: {
    scene: {
      type: String,
      required: true
    },
    width: {
      type: String
    },
    appkey: {
      type: String,
      required: true
    }
  },
  data() {
    return {
    };
  },
  computed: {
    dynamicId() {
      this.nc_id = randomCode(10);
      return this.nc_id;
    }
  },
  mounted() {
    let nc = null;
    const nc_scene = this.scene; // 场景,不可更改
    const nc_token = [this.appkey, (new Date()).getTime(), Math.random()].join(':');
    const nc_option = {
      renderTo: '#' + this.nc_id, // 渲染到该DOM ID指定的Div位置
      appkey: this.appkey,
      scene: nc_scene,
      token: nc_token,
      customWidth: this.width || 300,
      callback: (data) => { // 校验成功回调
        this.$emit('callback', { csessionid: data.csessionid, sig: data.sig, token: nc_token, scene: nc_scene, nc });
      },
      error(s) {
        console.log('error', s);
        nc.reset();
      },
      verifycallback(data) {
      }
    };
    VueScript2.load('//g.alicdn.com/sd/ncpc/nc.js?t=1497440454594').then(() => {
      nc = new noCaptcha();
      nc.init(nc_option);
      /* 滑块高度 */
      // document.querySelector('.nc_scale span').style.height = '34px';
      /* 滑过时的背景色 */
      // document.querySelector('.nc_scale div.nc_bg').style.background = '#00C1DE';
      const s = document.createElement('style');
      let h = `html .nc_scale span {
        height: 34px !important;
      }
      html .nc_scale div.nc_bg {
        background: #00C1DE !important;
      }`;
      h = h.replace(/&lt;/gi, '<').replace(/&gt;/gi, '>').replace(/&amp;/gi, '&');
      // s.type = 'text/css';
      s.appendChild(document.createTextNode(h));
      document.head.appendChild(s);
    });
  }

};
</script>

<style>
@import './AliyunCaptcha.less';
</style>
