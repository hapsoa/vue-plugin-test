import _Vue from 'vue';

import TestComponent from '@/plugins/PeterKhun/TestComponent/TestComponent.vue';

declare module 'vue/types/vue' {
  interface Vue {
    $hi: () => void;
  }
}

export function TestPlugin(Vue: typeof _Vue, options?: any): void {
  const TestComponentConstructor = Vue.extend(TestComponent);
  const testComponentInstance = new TestComponentConstructor({
    el: document.createElement('div'),
    // data() {
    //   return {
    //     title: title,
    //     message: message
    //   };
    // }
  });
  document.body.appendChild(testComponentInstance.$el);

  Vue.prototype.$hi = () => {
    console.log('hihi');
  };
}

export type PluginFunction<T> = (Vue: typeof _Vue, options?: T) => void;

export interface PluginObject<T> {
  install: PluginFunction<T>;
  [key: string]: any;
}

export const pluginObject: PluginObject<any> = {
  install: TestPlugin,
};

// export type PluginFunction<T> = (Vue: typeof _Vue, options?: T) => void;

// export class LodashPluginOptions {
//   // add stuff
// }

// export interface PluginObject<T> {
//   install: PluginFunction<T>;
//   [key: string]: any;
// }
