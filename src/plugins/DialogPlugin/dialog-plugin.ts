import _Vue from 'vue';

import DialogComponent from './DialogComponent/DialogComponent.vue';

declare module 'vue/types/vue' {
  interface Vue {
    $dialog: DialogComponent;
  }
  interface DialogComponent extends _Vue {
    open: () => void;
    title: string;
    content: string;
    positiveAnswer: string;
    negativeAnswer: string;
  }
}

export default {
  install(Vue: typeof _Vue, options?: any) {
    if (Vue.prototype.$dialog !== undefined) {
      Vue.prototype.$dialog.$destory();
    }
    const dialogComponentInstance = new DialogComponent();
    Vue.prototype.$dialog = dialogComponentInstance;

    dialogComponentInstance.$mount(
      document.body.appendChild(document.createElement('div')),
    );
  },
};
