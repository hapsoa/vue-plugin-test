import _Vue, { VueConstructor } from 'vue';

import DialogComponent from '@/plugins/DialogPlugin/DialogComponent/DialogComponent.vue';

declare module 'vue/types/vue' {
  interface Vue {
    $dialog: DialogComponent;
  }
}

export function DialogPlugin(Vue: typeof _Vue, options?: any): void {
  const DialogComponentConstructor = Vue.extend(DialogComponent);
  const dialogComponentInstance = new DialogComponentConstructor({
    el: document.createElement('div'),
    methods: {
      open() {
        console.log('open');
        this.isOpen = true;
      },
    },
    data() {
      return {
        isOpen: false,
        title: 'default title',
        content: 'default content',
        positiveAnswer: 'default confirm',
        negativeAnswer: 'default cancel',
      };
    },
  });
  document.body.appendChild(dialogComponentInstance.$el);

  Vue.prototype.$dialog = dialogComponentInstance;

  // Vue.prototype.$hi = () => {
  //   console.log('hihi');
  // };
}

export type PluginFunction<T> = (Vue: typeof _Vue, options?: T) => void;

export interface PluginObject<T> {
  install: PluginFunction<T>;
  [key: string]: any;
}

export const pluginObject: PluginObject<any> = {
  install: DialogPlugin,
};

// export type PluginFunction<T> = (Vue: typeof _Vue, options?: T) => void;

// export class LodashPluginOptions {
//   // add stuff
// }

// export interface PluginObject<T> {
//   install: PluginFunction<T>;
//   [key: string]: any;
// }
