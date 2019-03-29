import _Vue from 'vue';

import _ from 'lodash';

import TestComponent from '@/plugins/PeterKhun/TestComponent/TestComponent.vue';

import { LoDashStatic } from 'lodash';
declare module 'vue/types/vue' {
  interface Vue {
    $_: LoDashStatic;
  }
}

// export type PluginFunction<T> = (Vue: typeof _Vue, options?: T) => void;
export function LodashPlugin(Vue: typeof _Vue, options?: any): void {
  Vue.prototype.$_ = _;
  Vue.prototype.$open = () => {
    console.log('hihihihihihi!!!!!');
  };

  // Vue.component(Modal);
}

// export class LodashPluginOptions {
//   // add stuff
// }

// export interface PluginObject<T> {
//   install: PluginFunction<T>;
//   [key: string]: any;
// }
