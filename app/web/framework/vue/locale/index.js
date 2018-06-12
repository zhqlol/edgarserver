import Vue from 'vue';
import VueI18n from 'vue-i18n';
import Locales from 'locale_local/locale';

// 这里import locale_zh和locale_en一定要是dist目录下的，src下的会在IE9、IE10下提示Syntax error（IE Edge则没问题）
import zhLocale from 'locale_zh';
import enLocale from 'locale_en';
// 自动设置语言
const navLang = navigator.language;
const localLang = (navLang === 'zh-CN' || navLang === 'en-US') ? navLang : false;
const myLang = window.localStorage.lang || localLang || 'zh-CN';
Vue.config.lang = myLang;
// 多语言配置
Vue.locale = () => {};
const messages = {
  'en-US': Object.assign(enLocale, Locales['en-US']),
  'zh-CN': Object.assign(zhLocale, Locales['zh-CN'])
};
const i18n = new VueI18n({
  locale: myLang,
  messages
});

export default i18n;