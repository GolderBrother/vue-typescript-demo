<template>
  <div class='hello'>
    <h1>{{ title }}</h1>
    <h2>vue-typescrip-demo</h2>
    <input v-model='msg'>
    <p>msg: {{ msg }}</p>
    <p>computed msg: {{ computedMsg }}</p>
    <p>mixin 数据 ：{{ testMixinArg }}</p>
    <p>store 数据 ：{{ info.data }}</p>
    <RC></RC>

    <h2>让 vue 识别全局方法/变量(elementUI组件)</h2>
    <Button @click='showMessage'>测试element-ui的message</Button>

    <h2>测试 vuex-class</h2>
    <Button @click='routerTo("/testVuexClass")'>testVuexClass</Button>

    <!-- <h2>引入自定义组件</h2> -->
    <!-- <my-Component /> -->
  </div>
</template>

<script lang='ts'>
import Vue from 'vue'
import Component from 'vue-class-component'
import RenderComponent from '@/components/renderComponent.vue'
// import MyComponent from '@/components/MyComponent'
import TestMixin from '../mixins/test-mixin';
import { Getter } from 'vuex-class';
import { Button } from 'element-ui' 

@Component({
  components: {
    RC: RenderComponent,
    // 'my-Component': MyComponent
    Button
  },
  mixins: [TestMixin]
})
export default class HelloWorld extends Vue<TestMixin> {
  @Getter info

  // 初始化数据
  title: string = 'Welcome to Your Vue-Typescript App'
  msg: string = 'Hello World'

  // 计算属性，前面记得加上 get修饰符
  get computedMsg() {
    return `computed ${this.msg}`
  }

  // 方法
  greet():void {
    console.log(`greeting: ${this.msg}`)
  }

  showMessage(): void {
    console.log(this, _)
     this.$message({
        message: '恭喜你，这是一条成功消息',
        type: 'success'
    })
  }

  routerTo(path): void {
    this.$router.push(path)
  }

  // 生命周期钩子：已挂载
  mounted() {
    this.greet()
    console.log('testMixinArg: %s', this.testMixinArg)
    // this.testMixinFn()
    console.log('这是 _.assign({}): %o', _.assign({}))
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
