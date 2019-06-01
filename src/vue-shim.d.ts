import * as lodash from "lodash"
import Vue from "vue"
// import { Message } from 'element-ui'

declare module "*.vue" {
  export default Vue
}

// 全局变量设置
// 如果没有下面这段声明，但是在 ts 中使用的话，会报错误：就是害怕你全局声明的_ 跟 import _ from 'lodash' 的行为不一致，这样的话，之后会留下隐患
declare global {
  const _: typeof lodash
}

// 声明全局方法
// 配置使用 Element-uI 的 meesage
// 这样，之后再使用this.$message()的话就不会报错了 但是测试后发现没有效果 emmm~，老老实实继续手动挂载到Vue原型上
declare module "vue/types/vue" {
  interface Vue {
    $Message: any
    $Modal: any
  }
}
