import MainLayout from './main';

const tpl = '<MainLayout><slot slot="main"></slot></MainLayout>';

export default {
  name: 'AppLayout',
  props: [ 'title', 'description', 'keywords' ],
  components: {
    MainLayout
  },
  computed: {
    vTitle() {
      return this.title || 'EdgarNodeServer';
    },
    vKeywords() {
      return this.keywords || 'egg, vue, easywebpack, iview, vant';
    },
    vDescription() {
      return this.description || 'EdgarNodeServer';
    }
  },
  template: EASY_ENV_IS_BROWSER ? tpl : `<!DOCTYPE html>
                <html lang="en">
                  <head>
                    <title>{{vTitle}}</title>
                    <meta name="keywords" :content="vKeywords">
                    <meta name="description" :content="vDescription">
                    <meta http-equiv="content-type" content="text/html;charset=utf-8">
                    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui">
                    <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
                  </head>
                  <body>
                    ${tpl}
                  </body>
                </html>`

};
