# edgar-server

基于 Egg + Vue + EasyWebpack 多页面和单页面服务端客户端渲染同构工程；UI解决方案iView + vant


## 说明 

由于业务需求，后端要采用Node，需要一个审核端，同时需要弄一些移动端访问的页面


## 迭代过程

- v0.5.0 整合v2内容，为了减小访问页面体积采用多页面服务端渲染
- v0.4.0 修改iView-Admin样式，增加业务组件
- v0.3.0 基于Egg + Vue + Vuex + EasyWebpack将Node后端和iView-Admin整合到一起，单页面模式（需要启多个服务感觉太麻烦了，开始整合）
- v0.2.0 基于vant实现移动端访问页面（其他应用已经使用了vant，保持一致）
- v0.1.0 基于Egg实现Node后端；基于Vue+iView-Admin实现管理端（其他应用已经使用了iView，保持一致）


## 依赖

### 骨架
- [egg](https://github.com/eggjs/egg/)
- [easywebpack](https://github.com/hubcarl/easywebpack)
- [iview](https://github.com/iview/iview)
- [vant](https://github.com/youzan/vant)

### 插件
- [后端参数校验](https://github.com/eggjs/egg-validate)
- [UUID](https://github.com/kelektiv/node-uuid)
- [HTTP](https://github.com/axios/axios)
- [验证码](https://github.com/lemonce/svg-captcha/tree/0a80a9ea3c1166c97c3073b68dd16cf019928d14)
- [剪切板](https://github.com/zenorocha/clipboard.js)
- [省市区数据](https://github.com/dwqs/area-data)
- [省市区UI](https://github.com/iview/iview-area)
- [图片处理](https://github.com/fengyuanchen/cropperjs)
- [图表](https://github.com/apache/incubator-echarts)
- [Cookie](https://github.com/js-cookie/js-cookie)
- [lodash](https://github.com/lodash/lodash)
- [时间处理](https://github.com/moment/moment)
- [滚动条](https://github.com/Akryum/vue-virtual-scroller)


## 使用

#### 1 安装依赖

```bash
npm install
```


#### 2 本地

```bash
npm run dev
```

应用访问: http://127.0.0.1:7001


#### 3 生产

- 首先在本地或者ci构建好jsbundle文件

```bash
npm run build 
```

- 然后,启动应用

```bash
npm start 
```


## License

[MIT](LICENSE)
