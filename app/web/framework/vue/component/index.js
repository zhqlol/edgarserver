import Vue from 'vue';
import AppLayout from 'component/layout/app';
import iView from 'iview';
import VueI18n from 'vue-i18n';
import EdgarPopover from 'component/popover';
import EdgarIcon from 'component/icon';
import 'asset/css/theme.less';

Vue.use(VueI18n);
Vue.use(iView);

Vue.component(AppLayout.name, AppLayout);
Vue.component(EdgarPopover.name, EdgarPopover);
Vue.component(EdgarIcon.name, EdgarIcon);
