<template>
  <div class="container">
    <h2>MyComponent</h2>
    <p>propA: {{ propA }}</p>
    <p>propB: {{ propB }}</p>
    <p>propC: {{ propC }}</p>
    <p>propD: {{ propD }}</p>
  </div>
</template>
<script type="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";

@Component
export default class MyComponent extends Vue {
    // TPDO: 这个属性定义有问题
  @Prop()
  propA: number = 1
  @Prop({ default: "default value" })
  propB: string
  @Prop([String, Boolean])
  propC: string | Boolean
  @Prop({ type: null })
  propD: any
  @Watch("child")
  onChildChange(oldValue: string, newValue: string) {
    console.log(oldValue, newValue)
  }
}
</script>